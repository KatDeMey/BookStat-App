import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import DeleteBookIcon from "./localdeleteBookIcon";
import { Link } from "react-router-dom";

import "./BookPage.css";
const AllBooks = ({ allBooks, setAllBooks, handleDelete }) => {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation
          classname="PlaceLeft"
          allBooks={allBooks}
          setAllBooks={setAllBooks}
        />
        <main className="mainsection grid">
          <h1> All Books:</h1>
          <br />
          <ul>
            {allBooks.map((book, index) => {
              return (
                <li key={index} className="bookCard">
                  <Link className="booksImgLi" to={`book/${book.id}`}>
                    <img
                      className="book-card-img"
                      src={book.coverUrl}
                      alt={book.title}
                    />
                  </Link>

                  <button
                    class="overlay-delete"
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    <DeleteBookIcon />
                  </button>
                  <h4 className="readingListP">{book.title}</h4>
                  <h5 className="readingListhP">
                    {book.authorFirstName} {book.authorLastName}
                  </h5>
                </li>
              );
            })}
          </ul>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default AllBooks;
