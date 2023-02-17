import Form from '../../pages/form';
import './modal.css';

const Modal = ({ allBooks, setAllBooks, setIsModalOpen, isModalOpen, handleClose
  // , show, children 
}) => {

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className="titleCloseBtn">
        <button className='close' onClick={(()=> setIsModalOpen(false))}> X </button>
        </div>
        <div className='title'>
          <h1>Add a New Book</h1>
        </div>
        <div className='body'>
          <Form  allBooks={allBooks} setAllBooks={setAllBooks}/>
        </div>
        <div className='footer'>
          <button onClick={(()=> setIsModalOpen(false))}>cancel</button>
        </div>
      </div>
    </div>
  );
};

export default Modal