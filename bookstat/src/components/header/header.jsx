import BookIcon from "../../assets/BookIcon"
import { Link } from "react-router-dom"
import "./style.css"

const Header = () => {


    return (
      <>
        <section className="header">
          <Link to="/">
            <div className="appTitle">
              <BookIcon />
              <h1>BookStat</h1>
            </div>
          </Link>

          <form>
            <input type="text" placeholder="Search Your Books..." />
            <button type="submit">Search</button>
          </form>
        </section>
      </>
    );
}

export default Header