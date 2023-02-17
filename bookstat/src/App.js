import { useState, useEffect } from 'react';
// import { Route, Routes } from "react-router-dom"
import { Link, Route, Routes } from "react-router-dom"

import './App.css';

import Footer from './components/Footer/footer';
import Header from './components/header/header';
import MainSection from './components/mainSection/mainSection';
import Navigation from './components/navigation/navigation';


function App() {
  const [allBooks, setAllBooks] = useState([])

  useEffect(() => {
    fetch('http://localhost:4010/books')
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data)
      })
  }, [])

  return (

    <div className="App">
      <Header />
      <Navigation allBooks={allBooks} setAllBooks={setAllBooks} />
      <MainSection allBooks={allBooks} setAllBooks={setAllBooks} />
      {/* <Form  /> */}
      <Footer />
    </div>
  );
}

export default App;
