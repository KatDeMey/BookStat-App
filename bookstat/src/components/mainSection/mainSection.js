import { useState } from "react"
import ReadingList from "../readingLists/readingLists"
import CurrentReadsList from "../readingLists/currentReadsList"
import ToBeReadList from "../readingLists/toBeReadList"
import CompletedReadingList from "../readingLists/completedReadsList"
import AddNewBookModal from "../modal/modal"
import style from "./style.css"

import Modal from './modal.js'

//import  Navigate
import { useNavigate } from "react-router-dom";

const MainSection = ({ allBooks }) => {

  const navigate = useNavigate()

  const handleAddNewBook = () => {
    console.log("you want to add a book to:")

  }

  return (
    <main className="mainSection scrollable">
      <section className="reading-list-display">
        <div className="list-header">
          <h2>All Books</h2>
          <button className="add-to-list" onClick={handleAddNewBook}>+</button>
          <a>See All</a>
        </div>
        <ReadingList allBooks={allBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Current Reads</h2>
          {/* <button className="add-to-list" >+</button> */}
        </div>
        <CurrentReadsList allBooks={allBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>To Be Read</h2>
          {/* <button className="add-to-list">+</button> */}
        </div>
        <ToBeReadList allBooks={allBooks} />
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Completed Reads</h2>
          {/* <button className="add-to-list">+</button> */}
        </div>
        <CompletedReadingList allBooks={allBooks} />
      </section>
    </main >
  )
}

export default MainSection