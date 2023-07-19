import { useState } from "react";
import DeleteBookIcon from "./localdeleteBookIcon";

import Header from "../header/header";
import Navigation from "../navigation/navigation";
import Footer from "../Footer/footer";
import CurrentReadsList from "../readingLists/currentReadsList";

import style from "./style.css";

const CurrentReads = ({ allBooks, setAllBooks }) => {
  return (
    <>
      <div className="App">
        <Header />
        <Navigation allBooks={allBooks} setAllBooks={setAllBooks} />
        <main className="mainsection grid">
          <h1> Current Reads:</h1>
          <br />
          <CurrentReadsList allBooks={allBooks} setAllBooks={setAllBooks} />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default CurrentReads;
