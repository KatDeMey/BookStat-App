import { Link } from "react-router-dom";
import DeleteBookIcon from "../../assets/deleteBookIcon";

import "./style.css";

const CompletedReadingList = ({ allBooks, setAllBooks }) => {
  //status === "tbr" "read" "reading"
  const filtered = allBooks.filter((book) => book.ReadStatus === "read");

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
      {filtered.map((filteredByReading) => (
        <li key={filteredByReading.id} className="bookCard">
          <Link className="booksImgLi" to={`book/${filteredByReading.id}`}>
            <img
              className="book-card-img"
              src={filteredByReading.coverUrl}
              alt={filteredByReading.title}
            />
          </Link>

          <button
            // TODO: Props Delete
            class="overlay-delete"
            onClick={() => {
              handleDelete(filteredByReading.id);
              // console.log(filtered);
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

export default CompletedReadingList;
