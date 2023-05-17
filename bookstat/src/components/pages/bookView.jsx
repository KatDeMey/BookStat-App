import Navigation from "../navigation/navigation";
import Header from "../header/header";
import "./pages.css"
import { useParams } from "react-router-dom";

const BookView = ({allBooks}) => {
  // useParams
console.log(allBooks)
const {id} = useParams()
console.log(typeof(id))
const filtered = allBooks.filter((book) => book.id === Number(id))
console.log("Book =", filtered);
const book = filtered[0]

return (
    <>
      <div className="Pages">
        <Header classname="PageHeader" />
        <Navigation classname="PageNav" />
        <main className="main">
          <h2>{book.title}</h2>
          <br />
          <p>
            Author: {book.authorFirstName} {book.authorLastName}
          </p>
          <p>Publisher: {book.publisher}</p>
          <p>Pages: {book.numPages}</p>
          <p>Year Published: {book.yearPublished}</p>
          <p>Read Status: {book.ReadStatus} </p>
          <img
            className="book-card-img"
            src={book.coverUrl}
            alt={book.title}
          />
        </main>
      </div>
    </>
  );
};

export default BookView;
