import Header from "./components/header/header.jsx";
import Navigation from "./components/navigation/navigation.jsx";
import MainSection from "./components/mainSection/mainSection.jsx";
import Footer from "./components/Footer/footer.jsx";

import "./App.css";

function Home({
  handleDelete,
  allBooks,
  setAllBooks,
  isModalOpen,
  setIsModalOpen,
}) {
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

export default Home;
