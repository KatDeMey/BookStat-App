import { useState, useEffect } from 'react';
// import { Route, Routes } from "react-router-dom"
// import { Link, Route, Routes } from "react-router-dom"

import './App.css';

import Footer from './components/Footer/footer';
import Header from './components/header/header';
import MainSection from './components/mainSection/mainSection';
import Navigation from './components/navigation/navigation';
import Modal from './components/modal/modal';


function App() {
  const [allBooks, setAllBooks] = useState([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  useEffect(() => {
    const fetchData = async () => {
      await fetch('http://localhost:4010/books')
      .then((res) => res.json())
      .then((data) => {
              setAllBooks(data)})
    }
    fetchData()
      .catch(console.error);
  }, [])

  return (
    <div className="App">
      <Header />
      {isModalOpen && <Modal allBooks={allBooks} setAllBooks={setAllBooks}
                        isModalOpen={isModalOpen}
                        setIsModalOpen={setIsModalOpen} />}
      <Navigation allBooks={allBooks} setAllBooks={setAllBooks} isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
      <MainSection allBooks={allBooks} setAllBooks={setAllBooks} isModalOpen={isModalOpen}
        setIsModalOpen={setIsModalOpen} />
      <Footer />
    </div>
  );
}

export default App;
