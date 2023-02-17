import { useState } from "react"
// import { useNavigate } from "react-router-dom"
// import {useNavigate} from "react"
import Modal from "../modal/modal"

import ReadingList from "../readingLists/readingLists"
import CurrentReadsList from "../readingLists/currentReadsList"
import ToBeReadList from "../readingLists/toBeReadList"
import CompletedReadingList from "../readingLists/completedReadsList"
import AddNewBookModal from "../modal/modal"
import style from "./style.css"

// import { useNavigate } from "react-router-dom"

const MainSection = ({ allBooks, setAllBooks }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleClick = () => {
    setIsModalOpen(!isModalOpen)
    console.log("openModal:", isModalOpen)
}
  // const navigate = useNavigate()


  return (
    <main className="mainSection scrollable">
      <section className="reading-list-display">
        <div className="list-header">
          <h2>All Books</h2>
          <button className="add-to-list" onClick={handleClick}>+</button>
          {isModalOpen && <Modal allBooks={allBooks} setAllBooks={setAllBooks}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />}
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