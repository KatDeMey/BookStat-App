import { Link } from "react-router-dom";

import DeleteBookIcon from "../../assets/deleteBookIcon";

import"./style.css";

const CompletedReadingList = ({ allBooks, handleDelete }) => {
  //status === "tbr" "read" "reading"
  const filtered = allBooks.filter((book) => book.ReadStatus === "read");
  return (
    <ul className="current-reads">
      {filtered.map((filteredByReading) => (
          <Link to={`book/${filteredByReading.id}`}>
        <li key={filteredByReading.id} className="bookCard">
          <img
            className="book-card-img"
            src={filteredByReading.coverUrl}
            alt={filteredByReading.title}
          />
          <button
            // TODO: connect handleDelete
            class="overlay-delete"
            onClick={() => {
              // handleDelete(book.id);
              console.log(filtered);
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
        </Link>
      ))}
    </ul>
  );
};

export default CompletedReadingList;
