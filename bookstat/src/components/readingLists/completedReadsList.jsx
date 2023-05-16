import { useState } from "react";
import DeleteBookIcon from "../../assets/deleteBookIcon";

import style from "./style.css";

const CompletedReadingList = ({ allBooks, handleDelete }) => {
  //status === "tbr" "read" "reading"
  const filtered = allBooks.filter((book) => book.ReadStatus === "read");
  return (
    <ul className="current-reads">
      {filtered.map((filteredByReading) => (
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
      ))}
    </ul>
  );
};

export default CompletedReadingList;
