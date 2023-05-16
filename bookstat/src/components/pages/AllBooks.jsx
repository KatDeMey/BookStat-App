import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import DeleteBookIcon from "./localdeleteBookIcon";
// import ReadingList from "./ReadingPage";

const AllBooks = ({ allBooks, setAllBooks, isModalOpen, setIsModalOpen, handleDelete}) => {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation
          allBooks={allBooks}
          setAllBooks={setAllBooks}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <div className="App">
          <h1> All Books:</h1>
          <br />
          <ul>
            {allBooks.map((book, index) => {
              return (
                <li key={index} className="bookCard">
                  <img
                    className="book-card-img"
                    src={book.coverUrl}
                    alt={book.title}
                  />
                  <button
                    class="overlay-delete"
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    <DeleteBookIcon />
                  </button>
                  <h4 className="readingListP">{book.title}</h4>
                  <h5 className="readingListhP">
                    {book.authorFirstName} {book.authorLastName}
                  </h5>
                </li>
              );
            })}
          </ul>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default AllBooks;
