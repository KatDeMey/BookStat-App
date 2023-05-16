import Header from "../components/header/header";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/Footer/footer";
import CurrentReadsList from "../components/readingLists/currentReadsList.jsx";

const ReadingNow = ({ allBooks, setAllBooks, isModalOpen, setIsModalOpen }) => {
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
        <div>
          <h1> Current Reads:</h1>
          <br />
          <CurrentReadsList
            allBooks={allBooks}
            setAllBooks={setAllBooks}
            isModalOpen={isModalOpen}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReadingNow;
