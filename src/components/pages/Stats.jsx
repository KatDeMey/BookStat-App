import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";

import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

const Stats = (allBooks, setAllBooks) => {

  let bookList = allBooks.allBooks;
  console.log("in Stats", bookList);

  const readBooks = bookList.filter((book) => book.ReadStatus === "read");
  const reading = bookList.filter((book) => book.ReadStatus === "reading");
  const tbr = bookList.filter((book) => book.ReadStatus === "tbr");
  const notRead = bookList.filter((book) => book.ReadStatus === "notRead");

  const smallBooks = bookList.filter((book) => book.numPages < 200);
  console.log("smallBooks", smallBooks);
  const mediumBooks = bookList.filter((book) => 200 < book.numPages < 499);
  const largeBooks = bookList.filter((book) => book.numPages >= 500);
  const notListed = bookList.filter((book) => !book.numPages);

  const ReadStatusData = {
    labels: ["Read", "Reading", "To be read", "Not Read"],
    height: 100,
    datasets: [
      {
        label: "Read Status Dataset",
        data: [readBooks.length, reading.length, tbr.length, notRead.length],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(165, 215, 70)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  const NumPagesData = {
    labels: ["<200", "200-499", "500+", "Not Listed"],
    height: 100,
    datasets: [
      {
        label: "Number of pages Dataset",
        data: [smallBooks.length, mediumBooks.length, largeBooks.length, notListed.length],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
          "rgb(255, 99, 420)",
        ],
        hoverOffset: 4,
      },
    ],
  };

  //might need TODO: a reduce function from allBooks.status

  return (
    <>
      <div className="App">
        <Header />
        <Navigation allBooks={allBooks} setAllBooks={setAllBooks} />
        <main main className="mainsection grid">
          <h1>Reading Stats</h1>

          {/* <ul>
            <li>Total Books: {bookList.length}</li>
            <li>readBooks: {readBooks.length}</li>
            <li>tbr: {tbr.length}</li>
            <li>reading: {reading.length}</li>
            <li>notRead: {notRead.length}</li>
          </ul> */}

          <div style={{ height: "300px", width: "300px" }}>
            <h2>Total Reads Tracker</h2>
            <Doughnut data={ReadStatusData} />
          </div>

          <div style={{ height: "300px", width: "300px" }}>
            <h2>Num Pages</h2>
            <Doughnut data={NumPagesData} />
          </div>

          {/* <div style={{ height: "300px", width: "300px" }}>
            <h2>Authors</h2>
            <Doughnut data={data} />
          </div>
          <div style={{ height: "300px", width: "300px" }}>
            <h2>Num Pages</h2>
            <Doughnut data={data} />
          </div> */}
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Stats;
