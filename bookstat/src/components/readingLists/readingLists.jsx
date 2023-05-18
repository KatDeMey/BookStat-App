import DeleteBookIcon from "../../assets/deleteBookIcon";
import { Link } from "react-router-dom";

import "./style.css";

const ReadingList = ({ allBooks, setAllBooks }) => {
  const handleDelete = async (id) => {
    console.log("delete");
    const res = await fetch(`http://localhost:4000/books/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const filteredBooks = allBooks.filter((book) => book.id !== id);
    setAllBooks(filteredBooks);
  };

  return (
    <ul className="current-reads">
      {allBooks.map((book, index) => {
        return (
          <>
            <li key={index} className="bookCard">
              <Link className="booksImgLi" to={`book/${book.id}`}>
                <img
                  className="book-card-img"
                  src={book.coverUrl}
                  alt={book.title}
                />{" "}
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
          </>
        );
      })}
    </ul>
  );
};

export default ReadingList;
