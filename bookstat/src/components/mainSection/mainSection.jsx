import { useState } from "react";
import { Link } from "react-router-dom";

import ReadingList from "../readingLists/readingLists.jsx";
import CurrentReadsList from "../readingLists/currentReadsList.jsx";
import ToBeReadList from "../readingLists/toBeReadList.jsx";
import CompletedReadingList from "../readingLists/completedReadsList.jsx";
import "./style.css";


const MainSection = ({
  allBooks,
  setAllBooks,
}) => {


  return (
    <main className="mainSection scrollable">
      <section className="reading-list-display">
        <div className="list-header">
          <h2>All Books</h2>
          {/* TODO: Align links to the right */}
          <Link>Edit List</Link>
          <Link to="/AllBooks">See All</Link>
        </div>
        <ReadingList allBooks={allBooks} setAllBooks={setAllBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Current Reads</h2>
          <Link>Edit List</Link>
          <Link to="/CurrentReads">See All</Link>
        </div>
        <CurrentReadsList allBooks={allBooks} setAllBooks={setAllBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>To Be Read</h2>
          <Link>Edit List</Link>
          <Link to="/tbr">See All</Link>
        </div>
        <ToBeReadList allBooks={allBooks} setAllBooks={setAllBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Completed Reads</h2>
          <Link>Edit List</Link>
          <Link to="/Read">See All</Link>
        </div>
        <CompletedReadingList allBooks={allBooks} setAllBooks={setAllBooks} />
      </section>
    </main>
  );
};

export default MainSection;
