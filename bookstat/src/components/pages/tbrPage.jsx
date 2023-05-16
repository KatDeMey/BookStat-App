import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import ToBeReadList from "../readingLists/toBeReadList";

const TBRPage = ({ allBooks, setAllBooks, isModalOpen, setIsModalOpen }) => {
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
          <h1> To Be Read:</h1>
          <br/>
          <ToBeReadList
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

export default TBRPage;
