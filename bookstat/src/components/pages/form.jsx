import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";
import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";

import "../../App.css";

const initialState = {
  title: "",
  authorFirstName: "",
  authorLastName: "",
  coverUrl: "",
  numPages: null,
  publisher: "",
  yearPublished: null,
  ReadStatus: "notRead",
};

//TODO: redesign form to have a dropdown menu?
const Form = ({ allBooks, setAllBooks }) => {
  const [formState, setFormState] = useState(initialState);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const res = await fetch("http://localhost:4000/books", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: formState.title,
        authorFirstName: formState.authorFirstName,
        authorLastName: formState.authorLastName,
        coverUrl: formState.coverUrl,
        numPages: Number(formState.numPages),
        publisher: formState.publisher,
        yearPublished: Number(formState.yearPublished),
        ReadStatus: formState.ReadStatus,
      }),
    });
    const data = await res.json();
    setAllBooks([...allBooks, data]);
    navigate("/");

    //TODO: navigate back to Home Pages
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    if (name === "title") {
      setFormState({ ...formState, title: value });
    }
    if (name === "authorFirstName") {
      setFormState({ ...formState, authorFirstName: value });
    }
    if (name === "authorLastName") {
      setFormState({ ...formState, authorLastName: value });
    }
    if (name === "coverUrl") {
      setFormState({ ...formState, coverUrl: value });
    }
    if (name === "numPages") {
      setFormState({ ...formState, numPages: value });
    }
    if (name === "publisher") {
          setFormState({ ...formState, publisher: value });
        } 
    if (name === "status") {
      if (value === "notRead") {
        setFormState({ ...formState, ReadStatus: value });
      } else if (value === "tbr") {
        setFormState({ ...formState, ReadStatus: value });
      } else if (value === "reading") {
        setFormState({ ...formState, ReadStatus: value });
      } else if (value === "read") {
        setFormState({ ...formState, ReadStatus: value });
      }
    }
  };

  return (
    <>
      <div className="App">
        <Header />
        <Navigation />
        {/* TODO: Gridify this */}
        <div className="main">
          <h2>Add a New Book:</h2>
          <br />
          <form onSubmit={handleSubmit}>
            <ul>
              <li>
                <label htmlFor="bookTitle">Book Title</label>
                <input
                  id="title"
                  name="title"
                  type="text"
                  value={formState.title}
                  required
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="authorFirstName">Author's First Name</label>
                <input
                  id="authorFirstName"
                  name="authorFirstName"
                  type="text"
                  value={formState.authorFirstName}
                  required
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="authorLastName"> Author's Last Name</label>
                <input
                  id="authorLastName"
                  name="authorLastName"
                  type="text"
                  value={formState.authorLastName}
                  required
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="coverUrl"> Cover Image URL</label>
                <input
                  id="coverUrl"
                  name="coverUrl"
                  type="text"
                  value={formState.coverUrl}
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="numPages"> Number of Pages</label>
                <input
                  id="numPages"
                  name="numPages"
                  type="text"
                  value={formState.numPages}
                  required
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="publisher"> Publisher</label>
                <input
                  id="publisher"
                  name="publisher"
                  type="text"
                  value={formState.publisher}
                  onChange={handleChange}
                />
              </li>

              <li>
                <label htmlFor="yearPublished"> Publication Year</label>
                <input
                  id="yearPublishedyearPublished"
                  name="yearPublished"
                  type="text"
                  value={formState.yearPublished}
                  onChange={handleChange}
                />
              </li>

              <br />

              <label className="readStatus">Read status: </label>
              <select onChange={handleChange} name="status">
                <option value="notRead">Not Read</option>
                <option value="tbr">To Be Read</option>
                <option value="reading">Reading</option>
                <option value="read">Read</option>
              </select>
              <br />
              <br />
              <input type="submit" value="Add Book" />
            </ul>
          </form>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Form;
