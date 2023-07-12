import { Link } from "react-router-dom";
import DeleteBookIcon from "../../assets/deleteBookIcon";

import "./style.css";

const ToBeReadList = ({ allBooks, setAllBooks }) => {
  //ReadStatus === "tbr" "read" "reading"

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
      {allBooks
        .filter((book) => book.ReadStatus === "tbr")
        .map((filteredByReading) => (
          <li key={filteredByReading.id} className="bookCard">
            <Link className="booksImgLi" to={`book/${filteredByReading.id}`}>
              <img
                className="book-card-img"
                src={filteredByReading.coverUrl}
                alt={filteredByReading.title}
              />
            </Link>
            <button
              class="overlay-delete"
              onClick={() => {
                handleDelete(filteredByReading.id);
              }}
            >
              <DeleteBookIcon />
            </button>

            <h4 className="readingListP">{filteredByReading.title}</h4>
            <h5 className="readingListhP">
              {filteredByReading.authorFirstName}{" "}
              {filteredByReading.authorLastName}
            </h5>
          </li>
        ))}
    </ul>
  );
};

export default ToBeReadList;
