import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";

import Chart from "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

let readBooks = 0;
let reading = 0;
let tbr = 0;
let notRead = 0;

const Stats = (allBooks, setAllBooks) => {
  //TODO: get this to work
  for (let i = 0; i < allBooks.length; i++) {
    if (allBooks.ReadStatus === "read") {
      console.log("readBooks");
      readBooks++;
    } else if (allBooks.ReadStatus === "tbr") {
      tbr++;
    } else if (allBooks.ReadStatus === "reading") {
      reading++;
    } else if (allBooks.ReadStatus === "notRead") {
      notRead++;
    }
  }

  const data = {
    labels: ["Read", "Reading", "To be read", "Not Read"],
    height: 100,
    datasets: [
      {
        label: "My First Dataset",
        data: [readBooks, reading, tbr, notRead],
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

  //might need TODO: a reduce function from allBooks.status

  return (
    <>
      <div className="App">
        <Header />
        <Navigation allBooks={allBooks} setAllBooks={setAllBooks} />
        <main main className="mainsection grid">
          <h1>Reading Stats</h1>
          <div style={{ height: "300px", width: "300px" }}>
            <h2>Total Reads Tracker</h2>
            <Doughnut data={data} />
          </div>

          <div style={{ height: "300px", width: "300px" }}>
            <h2>Num Pages</h2>
            <Doughnut data={data} />
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
