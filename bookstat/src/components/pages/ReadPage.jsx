import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import CompletedReadingList from "../readingLists/completedReadsList";

const ReadPage = ({ allBooks, setAllBooks, isModalOpen, setIsModalOpen }) => {
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
          <h1> Completed Reads:</h1>
          <br />
          <CompletedReadingList
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

export default ReadPage;
