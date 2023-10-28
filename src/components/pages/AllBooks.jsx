import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import DeleteBookIcon from "./localdeleteBookIcon";
import { Link } from "react-router-dom";

// import "./BookPage.css";
const AllBooks = ({ allBooks, setAllBooks, handleDelete }) => {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation
          classname="PlaceLeft"
          allBooks={allBooks}
          setAllBooks={setAllBooks}
        />
        <main className="mainsection h-auto flex-col space-y-2">
          <h1 className="text-[30px]"> All Books:</h1>
          <ul className="flex flex-wrap w-[100%] space-evenly align-center gap-5 pr-[12px]">
            {allBooks.map((book, index) => {
              return (
                // bookCard
                <li
                  key={index}
                  className="flex-col justify-center align-center items-center border border-[pink] rounded h-[300px] bg-transparent min-w-[150px]  content-center flex-1 max-w-[300px]"
                >
                  <div className="bg-transparent space-y-2 flex-col justify-center align-center pt-[8%]">
                    <Link to={`book/${book.id}`}>
                      {/* book-card-img */}
                      <img
                        className="m-auto h-[200px] rounded"
                        src={book.coverUrl}
                        alt={book.title}
                      />
                    </Link>

                    <div className="bg-transparent text-center">
                      <h4 className="flex justify-center items-center min-h-[48px] max-h-[50px] px-[4px]">
                        {book.title}
                      </h4>
                      <h4>
                        {book.authorFirstName} {book.authorLastName}
                      </h4>
                    </div>
                  </div>
                  {/* overlay-delete */}
                  <button
                    className=" opacity-0 hover:opacity-100 flex bg-[#1e1e1e] rounded-full h-[auto] w-auto translate-y-[-640%] translate-x-[245%]"
                    onClick={() => {
                      handleDelete(book.id);
                    }}
                  >
                    <DeleteBookIcon className="bg-transparent h-[35px]" />
                  </button>
                </li>
              );
            })}
          </ul>
        </main>
        {/* <Footer className="relative bottom-0" /> */}
      </div>
    </>
  );
};

export default AllBooks;
