import Form from '../../pages/form';
import './modal.css';

const Modal = ({ allBooks, setAllBooks, setIsModalOpen, isModalOpen, handleClose
}) => {

  return (
    <div className='modalBackground'>
      <div className='modalContainer'>
        <div className="titleCloseBtn">
        <button className='close' onClick={(()=> setIsModalOpen(false))}> ❌ </button>
        </div>
        <div className='title'>
          <h1>Add a New Book</h1>
        </div>
        <div className='body'>
          <Form  allBooks={allBooks} setAllBooks={setAllBooks} setIsModalOpen={setIsModalOpen}/>
        </div>
        {/* <div className='footer'>
          <button onClick={(()=> setIsModalOpen(false))}>cancel</button>
        </div> */}
      </div>
    </div>
  );
};

export default Modal