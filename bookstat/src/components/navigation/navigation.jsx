// import { useNavigate } from "react-router-dom";
import { BrowserRouter, Link, Route, Routes, Navigate } from "react-router-dom"; // import { useState } from "react"
// import { Link, Route, Routes } from "react-router-dom"
import style from "./style.css";
import Modal from "../modal/modal.jsx";

const Navigation = ({ allBooks, setAllBooks, isModalOpen, setIsModalOpen }) => {
  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
    console.log("openModal:", isModalOpen);
  };
  return (
    <>
      <aside className="PlaceLeft">
        <nav>
          <ul>
            <li>
              {" "}
              <Link to="/">Home</Link>
            </li>
            <li>
              {" "}
              <Link to="/AllBooks">All Books</Link>{" "}
            </li>
            <li>
              {" "}
              <Link to="/tbr">To Be Read</Link>
            </li>
            <li>
              {" "}
              <Link to="/CurrentReads">Current Reads</Link>
            </li>
            <li>
              {" "}
              <Link to="/Read">Completed Reads</Link>
            </li>
            <button className="openModalBtn green" onClick={handleClick}>
              + Add New Book
            </button>
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Navigation;
