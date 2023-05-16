import { useState } from "react";
import Form from "../pages/form";
import "./modal.css";

const Modal = ({ allBooks, setAllBooks, setIsModalOpen, isModalOpen }) => {
  // const handleClose = () => {
  //   setIsModalOpen(false);
  //   console.log("Handled click in modal.jsx");
  //   console.log("openModal should be false:", isModalOpen);
  // };

  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button className="close" onClick={() => setIsModalOpen(false)}>
          {/* <button
            className="close"
            onClick={() => handleClose()}
          > */}
            {" "}
            X{" "}
          </button>
        </div>
        <div className="title">
          <h1>Add a New Book</h1>
        </div>
        <div className="body">
          <Form
            allBooks={allBooks}
            setAllBooks={setAllBooks}
            setIsModalOpen={setIsModalOpen}
          />
        </div>
        <div className="footer">
          {/* <button onClick={(()=> setIsModalOpen(false))}>cancel</button> */}
          <button onClick={() => console.log("clicked cancel")}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
