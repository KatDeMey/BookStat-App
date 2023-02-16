import { useState } from "react"
import ReadingList from "../readingLists/readingLists"
import style from "./style.css"


const MainSection = ({allBooks}) => {
   
  return (
    <main className="mainSection scrollable">
      <section className="reading-list-display">
        <div className="list-header">
          <h2>Current Reads</h2>
          <button>+</button>
        </div>

<ReadingList allBooks={allBooks}/>
        {/* <ul className="current-reads">
          {allBooks.map((book, index) => {
            return (
              <>
                <li key={index}>
                  <ReadingList allBooks={allBooks}/>
                </li>
              </>
            )
          })}
        </ul> */}
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>To Be Read</h2>
          <div>
            <button>+</button>
          </div>
        </div>
        <ul className="TBR">
          {allBooks.map((book, index) => {
            return (
              <>
                <li key={index}>
                  <ReadingList allBooks={allBooks}/>
                </li>
              </>
            )
          })}
        </ul>
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Most Popular</h2>
          <button>+</button>
        </div>
        <ul className="anticipated-reads">
          {allBooks.map((book, index) => {
            return (
              <>
                <li key={index}>
                  <ReadingList allBooks={allBooks}/>
                </li>
              </>
            )
          })}
        </ul>
      </section>
    </main >
  )
}

export default MainSection