import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";

import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";

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

// TODO: BAR CHART

//labels = author name and lastname
const labels = ["brandon Sanderson", "JK Rowling", "William Shakespear", "Umi Sakuri", "Charles Dickens"]

const topAuthorsData = {
  labels: labels,
  datasets: [
    {
      label: "Your Top Authors",
      //will need to do a filter of authors then .length (probably).
      //TODO: unhardcode
      data: [5, 9, 2, 8, 4],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};



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

          <br />
          <br />

          <div style={{ height: "300px", width: "300px" }}>
            <h2>Total Reads Tracker</h2>
            <Doughnut data={ReadStatusData} />
          </div>

          <br />
          <br />
          <br />
          <br />

          <div style={{ height: "300px", width: "300px" }}>
            <h2>Num Pages</h2>
            <Doughnut data={NumPagesData} />
          </div>

          <br />
          <br />
          <br />
          <br />

          <div style={{ height: "300px", width: "300px" }}>
            <h2>Authors</h2>
            <Bar data={topAuthorsData} />
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Stats;
