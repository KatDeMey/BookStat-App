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
        <main className="mainsection h-auto flex-col space-y-2">
          <h1 className="text-[30px]"> Completed Reads:</h1>
          <CompletedReadingList allBooks={allBooks} setAllBooks={setAllBooks} />
        </main>

        <Footer />
      </div>
    </>
  );
};

export default ReadPage;
