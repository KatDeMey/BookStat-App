import { useState } from "react"

import style from "./style.css"


const CompletedReadingList = ({ allBooks }) => {
//status === "tbr" "read" "reading"
return (
  <ul className="current-reads">
    {allBooks
      .filter(
        (book) => book.ReadStatus === "read" || book.ReadStatus === "Read"
      )
      .map((filteredByReading) => (
        <li key={filteredByReading.id} className="bookCard">
          <img
            className="book-card-img"
            src={filteredByReading.coverUrl}
            alt={filteredByReading.title}
          />
          <h4 className="readingListP">{filteredByReading.title}</h4>
          <h5 className="readingListhP">
            {filteredByReading.authorFirstName}{" "}
            {filteredByReading.authorLastName}
          </h5>
        </li>
      ))}
  </ul>
);
}

export default CompletedReadingList;