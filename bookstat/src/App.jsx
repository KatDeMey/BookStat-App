import { useState, useEffect } from "react";
import Header from "./components/header/header.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import MainSection from "./components/mainSection/mainSection.jsx";
import Footer from "./components/Footer/footer.jsx";

import "./App.css";

function App() {
  const [allBooks, setAllBooks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch("http://localhost:4000/books")
      .then(function (response) {
        console.log(response);
        return response.json();
      })
      .then((data) =>
        // console.log("data.books-----", data.data.books)
        // const books = data.data.books
        setAllBooks(data.data.books)
      );
  }, []);

  useEffect(() => {}, []);

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
        <MainSection
          allBooks={allBooks}
          setAllBooks={setAllBooks}
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
        <Footer />
      </div>
    </>
  );
}

export default App;
