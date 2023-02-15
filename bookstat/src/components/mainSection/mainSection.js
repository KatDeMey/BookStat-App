import { useState } from "react"
import ReadingList from "../readingLists/readingLists"
import style from "./style.css"


const initialBooks = [{
  title: "The Beautiful Ones",
  authorFirstName: "Silvia",
  authorLastName: "Moreno-Garcia",
  cover_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zOfVx3YBe-N6tLUM6DKLwAHaLW%26pid%3DApi&f=1&ipt=21cfcc2adda96c3805815429332a093ddc5b34344a05b479e80dbdb0ae15a475&ipo=images",
  ISBN: "",
  numPages: "292",
},
{
  title: "Mad Honey",
  authorFirstName: "Jodi",
  authorLastName: "Picoult",
  cover_url: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse4.mm.bing.net%2Fth%3Fid%3DOIP.iBAImwJT2M4eSLrDdJPGYQHaLY%26pid%3DApi&f=1&ipt=828e7eab7d181679851a58e65d9ad2dbc3948951f1a17505b870cfc210bd3faf&ipo=images",
  ISBN: "",
  numPages: "",
}
]

const MainSection = () => {
  const [bookList, setBookList] = useState(initialBooks)


  return (
    <main className="mainSection scrollable">
      <section className="reading-list-display">
        <div className="list-header">
          <h2>Current Reads</h2>
          <button>+</button>
        </div>

        <ul className="current-reads">
          {bookList.map((book, index) => {
            return (
              <>
                <li key={index}>
                  <ReadingList bookList={bookList} />
                </li>
              </>
            )
          })}
        </ul>
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>To Be Read</h2>
          <div>
            <button>+</button>
          </div>
        </div>
        <ul className="TBR">
          {bookList.map((book, index) => {
            return (
              <>
                <li key={index}>
                  <ReadingList bookList={bookList} />
                </li>
              </>
            )
          })}
        </ul>
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>Anticipated reads</h2>
          <button>+</button>
        </div>
        <ul className="anticipated-reads">
          {bookList.map((book, index) => {
            return (
              <>
                <li key={index}>
                  <ReadingList bookList={bookList} />
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