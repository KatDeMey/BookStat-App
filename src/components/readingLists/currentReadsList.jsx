import { Link } from "react-router-dom";
import DeleteBookIcon from "../../assets/deleteBookIcon";

import "./style.css";

const CurrentReadsList = ({ allBooks, setAllBooks }) => {
  //status === "tbr" "read" "reading"

  const handleDelete = async (id) => {
    console.log("delete");
    const res = await fetch(`http://localhost:4000/books/${id}`, {
      method: "DELETE",
    });
    const data = await res.json();
    const filteredBooks = allBooks.filter((book) => book.id !== id);
    setAllBooks(filteredBooks);
  };

  return (
    <ul className="current-reads flex flex-wrap w-[100%] space-evenly align-center gap-5 pr-[12px]">
      {allBooks
        .filter((book) => book.ReadStatus === "reading")
        .map((filteredByReading) => (
          <li
            key={filteredByReading.id}
            className="flex-col justify-center align-center items-center border border-[pink] rounded h-[300px] bg-transparent min-w-[150px]  content-center flex-1 max-w-[300px]"
          >
            <div className="bg-transparent space-y-2 flex-col justify-center align-center pt-[8%]">
              <Link to={`book/${filteredByReading.id}`}>
                {/* book-card-img */}
                <img
                  className="m-auto h-[200px] rounded"
                  src={filteredByReading.coverUrl}
                  alt={filteredByReading.title}
                />
              </Link>

              <div className="bg-transparent text-center">
                <h4 className="flex justify-center items-center min-h-[48px] max-h-[50px] px-[4px]">
                  {filteredByReading.title}
                </h4>
                <h4>
                  {filteredByReading.authorFirstName}{" "}
                  {filteredByReading.authorLastName}
                </h4>
              </div>
            </div>
            <button
              className=" opacity-0 hover:opacity-100 flex bg-[#1e1e1e] rounded-full h-[auto] w-auto translate-y-[-640%] translate-x-[245%]"
              onClick={() => {
                handleDelete(
                  {
                    /* overlay-delete */
                  }.id
                );
              }}
            >
              <DeleteBookIcon className="bg-transparent h-[35px]" />
            </button>
          </li>
        ))}
    </ul>
  );
};

export default CurrentReadsList;
