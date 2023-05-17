import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./homePage";
import TBRPage from "./components/pages/tbrPage";
import AllBooks from "./components/pages/AllBooks";
import CurrentReads from "./components/pages/ReadingPage";
import ReadPage from "./components/pages/ReadPage";
import Form from "./components/pages/form";
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
          element={
            <Home
              allBooks={allBooks}
              setAllBooks={setAllBooks}
              // isModalOpen={isModalOpen}
              // setIsModalOpen={setIsModalOpen}
              // handleDelete={handleDelete}
            />
          }
        />
        <Route
          path={"/AllBooks"}
          element={<AllBooks allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route
          path={"/CurrentReads"}
          element={
            <CurrentReads
              allBooks={allBooks}
              setAllBooks={setAllBooks}
              // handleDelete={handleDelete}
            />
          }
        />
        <Route
          path="/tbr"
          element={<TBRPage allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route
          path="/Read"
          element={<ReadPage allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        <Route
          path="/AddNewBook"
          element={<Form allBooks={allBooks} setAllBooks={setAllBooks} />}
        />
        {/* TODO: */}
        {/* <Route  path="/book/:id" element={} />
        <Route  path="/book/:id/edit" element={} /> */}
      </Routes>
    </>
  );
}

export default App;
