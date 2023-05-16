import { useState } from "react";
// import { useNavigate } from "react-router-dom"
import { useNavigate } from "react";
import Modal from "../modal/modal.jsx";

import ReadingList from "../readingLists/readingLists.jsx";
import CurrentReadsList from "../readingLists/currentReadsList.jsx";
import ToBeReadList from "../readingLists/toBeReadList.jsx";
import CompletedReadingList from "../readingLists/completedReadsList.jsx";
// import AddNewBookModal from "../modal/modal.jsx";
import style from "./style.css";

// import { useNavigate } from "react-router-dom"

const MainSection = ({
  allBooks,
  setAllBooks,
  isModalOpen,
  setIsModalOpen,
}) => {
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
    console.log("Handled click in main.jsx");
    console.log("openModal:", isModalOpen);
  };

  const handleModalOpen = () => {
    if (isModalOpen) {
      return <Modal allBooks={allBooks} setAllBooks={setAllBooks} />;
    }
  };

  return (
    <main className="mainSection scrollable">
      <section className="reading-list-display">
        <div className="list-header">
          <h2>All Books</h2>
          <button className="add-to-list" onClick={handleClick}>
            +
          </button>
          {/* TODO: convert to link + Align <p>S to the right */}
          <p className="EditLists">Edit List</p>
        </div>
        <ReadingList allBooks={allBooks} setAllBooks={setAllBooks} />
        {handleModalOpen()}
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Current Reads</h2>
          <p className="EditLists">(edit)</p>
        </div>
        <CurrentReadsList allBooks={allBooks} setAllBooks={setAllBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>To Be Read</h2>
          <p className="EditLists">(edit)</p>
        </div>
        <ToBeReadList allBooks={allBooks} setAllBooks={setAllBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Completed Reads</h2>
          <p className="EditLists">(edit)</p>
        </div>
        <CompletedReadingList allBooks={allBooks} setAllBooks={setAllBooks} />
      </section>
    </main>
  );
};

export default MainSection;
