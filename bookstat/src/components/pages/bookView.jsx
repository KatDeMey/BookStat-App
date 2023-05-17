import Navigation from "../navigation/navigation";
import Header from "../header/header";
import { Link, useParams } from "react-router-dom";
import "./pages.css";

const BookEdit = ({ allBooks }) => {
  console.log(allBooks);
  const { id } = useParams();
  console.log(typeof id);
  const filtered = allBooks.filter((book) => book.id === Number(id));
  const book = filtered[0];

  return (
    <>
      <div className="Pages">
        <Header classname="PageHeader" />
        <Navigation classname="PageNav" />
        <main className="main pageView">
          <div className="Left">
            <h2>{book.title}</h2>
            <br />
            <p>
              <strong>Author:</strong> {book.authorFirstName}{" "}
              {book.authorLastName}
            </p>
            <p>
              <strong>Publisher:</strong> {book.publisher}
            </p>
            <p>
              <strong>Pages:</strong> {book.numPages}
            </p>
            <p>
              <strong>Year Published:</strong> {book.yearPublished}
            </p>
            <p>
              <strong>Read Status:</strong> {book.ReadStatus}{" "}
            </p>
            <img
              className="book-card-img imgBigger"
              src={book.coverUrl}
              alt={book.title}
            />
            <br />
            <br />
            <hr />
            <br />
            <Link to={`/book/${book.id}/edit`}><u>Edit</u></Link>
          </div>
          <div className="Right">
            <p>
              <strong>Review:</strong>
            </p>
            <p>
              {" "}
              {book.review ? (
                book.review
              ) : (
                <Link to={`/book/${book.id}/review`}>
                  <u>Add your review</u>
                </Link>
              )}{" "}
            </p>
          </div>
        </main>
      </div>
    </>
  );
};

export default BookEdit;
