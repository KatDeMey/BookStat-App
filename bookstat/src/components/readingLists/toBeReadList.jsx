import { Link } from "react-router-dom";

import "./style.css";

const ToBeReadList = ({ allBooks }) => {
  //ReadStatus === "tbr" "read" "reading"
  return (
    <ul className="current-reads">
      {allBooks
        .filter((book) => book.ReadStatus === "tbr")
        .map((filteredByReading) => (
          <Link to={`book/${filteredByReading.id}`}>
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
          </Link>
        ))}
    </ul>
  );
};

export default ToBeReadList;
