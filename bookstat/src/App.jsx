import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./homePage";
import TBRPage from "./components/pages/tbrPage";
import AllBooks from "./components/pages/AllBooks";
import CurrentReads from "./components/pages/ReadingPage";
import ReadPage from "./components/pages/ReadPage";
// import Form from "./components/pages/form";
import Form from "./components/pages/forms/newBookForm";
import BookEdit from "./components/pages/forms/editBook";

import BookView from "./components/pages/bookView";
import "./App.css";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((data) => setAllBooks(data.data.books))
      .then(() => setLoading(false));
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Routes>
        <Route
          path={"/"}
          element={<Home allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route
          path={"/AllBooks"}
          element={<AllBooks allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route
          path="/AllBooks/book/:id"
          element={<BookView allBooks={allBooks} />}
        />

        {/* CurrentReads */}
        <Route
          path={"/CurrentReads"}
          element={
            <CurrentReads allBooks={allBooks} setAllBooks={setAllBooks} />
          }
        />
        <Route
          path="/CurrentReads/book/:id"
          element={<BookView allBooks={allBooks} />}
        />
        {/* TBR */}
        <Route
          path="/tbr"
          element={<TBRPage allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route
          path="/tbr/book/:id"
          element={<BookView allBooks={allBooks} />}
        />

        {/* Read */}
        <Route
          path="/Read"
          element={<ReadPage allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route
          path="/Read/book/:id"
          element={<BookView allBooks={allBooks} />}
        />

        <Route
          path="/AddNewBook"
          element={<Form allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route path="/book/:id" element={<BookView allBooks={allBooks} />} />
        <Route
          path="/book/:id/edit"
          element={<BookEdit allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
      </Routes>
    </>
  );
}

export default App;
