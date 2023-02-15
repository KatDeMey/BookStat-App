import ReadingList from "../readingLists/readingLists"
import style from "./style.css"

const MainSection = () => {
  return (
    <main className="mainSection scrollable">
      <section className="readin-list-display">
        <div className="list-header">
          <h2>Current Reads</h2>
          <button>+</button>
        </div>
        <ul className="current-reads">
          <li>
            <ReadingList />
          </li>
        </ul>
      </section>

      <section className="reading-list-display">
        <div className="list-header">
          <h2>To Be Read</h2>
          <button>+</button>
        </div>
        <ul className="TBR">
          <li>
            <ReadingList />
          </li>
        </ul>
      </section>

      <section className="reading-list-display">
        <div className="listh-eader">
          <h2>Anticipated reads</h2>
          <button>+</button>
        </div>
        <ul className="anticipated-reads">
          <li>
            <ReadingList />
          </li>
        </ul>
      </section>
    </main >
  )
}

export default MainSection