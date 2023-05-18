import Navigation from "../navigation/navigation";
import Header from "../header/header";
import DeleteBookIcon from "../../assets/deleteBookIcon";

import { Link, useParams, useNavigate } from "react-router-dom";
import "./pages.css";

const BookEdit = ({ allBooks, setAllBooks }) => {
  console.log(allBooks);
  const { id } = useParams();
  console.log(typeof id);
  const filtered = allBooks.filter((book) => book.id === Number(id));
  const book = filtered[0];
  const navigate = useNavigate();


const handleSubmit = async (event) => {
    event.preventDefault();
    // TODO: submit the review
    console.log("thanks for the review")
}

  // const handleDelete = async (id) => {
  //   console.log("delete");
  //   const res = await fetch(`http://localhost:4000/books/${id}`, {
  //     method: "DELETE",
  //   })
  //   .then((res) => res.json())
  //   .then((data) => allBooks, console.log("allBooks"));

  //   const filteredBooks = allBooks.filter((book) => book.id !== id);
  //   setAllBooks(filteredBooks);

  //   navigate("/");
  // };

  return (
    <>
      <div className="Pages">
        <Header classname="PageHeader" />
        <Navigation classname="PageNav" />
        <main className="main pageView">
          <div className="Left">
            <h2>{book.title}</h2>
            <br />
            <p>
              <strong>Author:</strong> {book.authorFirstName}{" "}
              {book.authorLastName}
            </p>
            <p>
              <strong>Publisher:</strong> {book.publisher}
            </p>
            <p>
              <strong>Pages:</strong> {book.numPages}
            </p>
            <p>
              <strong>Year Published:</strong> {book.yearPublished}
            </p>
            <p>
              <strong>Read Status:</strong> {book.ReadStatus}{" "}
            </p>
            <img
              className="book-card-img imgBigger"
              src={book.coverUrl}
              alt={book.title}
            />
            <br />
            <br />
            <hr />
            <br />
            <Link to={`/book/${book.id}/edit`}>
              <u>Edit</u>
            </Link>
            <br />
            <br />
            {/* <button
              onClick={() => {
                handleDelete(book.id);
              }}
            >
              <DeleteBookIcon />
            </button> */}
          </div>
          <div className="Right">
            <p>
              <strong>Review:</strong>
            </p>
            <p>
              {" "}
              {book.review ? (
                book.review
              ) : (
                <div>
                  {/* TODO: */}
                  {/* <Link to={`/book/${book.id}/review`}>
                    <u>Add your review</u>
                  </Link> */}
                  <br />

                  <form onSubmit={handleSubmit}>
                    <label className="smallerLabel">Add Your Review: </label>
                    <br />
                    <br />
                    <textarea
                      type="text"
                      placeholder="Write your Review..."
                    ></textarea>
                    <button type="submit">Add</button>
                  </form>
                </div>
              )}{" "}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default BookEdit;
