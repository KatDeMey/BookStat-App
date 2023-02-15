import BookIcon from "../../assets/BookIcon"
import style from "./style.css"

const Header = () => {
    return (
        <>
            <section className="header">
                <div className="appTitle">
                    <img src="src\assets\BookIcon.svg" />
                    <h1>BookStat</h1>
                </div>
                <form>
                    <input type="text" placeholder="Search Your Books..." />
                    <button type="submit">Search</button>
                </form>
            </section>
        </>
    )
}

export default Header