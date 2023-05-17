// import { useNavigate } from "react-router-dom";
import { Link} from "react-router-dom"; // import { useState } from "react"
import style from "./style.css";

const Navigation = ({ allBooks, setAllBooks }) => {

  return (
    <>
      <aside className="PlaceLeft">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/AllBooks">All Books</Link>
            </li>
            <li>
              <Link to="/tbr">To Be Read</Link>
            </li>
            <li>
              <Link to="/CurrentReads">Current Reads</Link>
            </li>
            <li>
              <Link to="/Read">Completed Reads</Link>
            </li>
            <Link to="/AddNewBook">
              <button
                className="openModalBtn green"
              >
                + Add New Book
              </button>
            </Link>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navigation;
