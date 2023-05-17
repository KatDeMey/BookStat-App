import Header from "../components/header/header";
import Navigation from "../components/navigation/navigation";
import Footer from "../components/Footer/footer";
import CurrentReadsList from "../components/readingLists/currentReadsList.jsx";
import "..pages/BookPage.css";


const ReadingNow = ({ allBooks, setAllBooks }) => {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation
          allBooks={allBooks}
          setAllBooks={setAllBooks}
        />
        <div>
          <h2> Current Reads:</h2>
          <CurrentReadsList
            allBooks={allBooks}
            setAllBooks={setAllBooks}
          />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default ReadingNow;
