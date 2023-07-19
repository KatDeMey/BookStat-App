import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import CompletedReadingList from "../readingLists/completedReadsList";

const ReadPage = ({ allBooks, setAllBooks }) => {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation allBooks={allBooks} setAllBooks={setAllBooks} />
        <main className="mainsection grid">
          <h1> Completed Reads:</h1>
          <br />
          <CompletedReadingList allBooks={allBooks} setAllBooks={setAllBooks} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ReadPage;
