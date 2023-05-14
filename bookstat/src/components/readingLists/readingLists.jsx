// import { useState } from "react"
import DeleteBookIcon from "../../assets/deleteBookIcon"
import style from "./style.css"


const ReadingList = ({ allBooks, setAllBooks }) => {


    const handleDelete = async id => {
        console.log("delete")
        // const res = await fetch(`http://localhost:4000/books/${id}`, {
        //   method: "DELETE",
        // });
        // const data = await res.json()
        // const filteredBooks = allBooks.filter(book => book.id !== id)
        // setAllBooks(filteredBooks)
      }

    return (
        <ul className="current-reads">
            {allBooks.map((book, index) => {
                return (
                    <li key={index} className="bookCard">
                        <img className="book-card-img" src={book.coverUrl} alt={book.title} />
                        <button class="overlay-delete"
                            onClick={() => {
                                handleDelete(book.id)
                                // console.log("book id book is arr vs obj:",  book)
                                // fetch(`http://localhost:4010/books/${book.id}`, {
                                //     method: 'DELETE'
                                // })
                                //     .then((res) => res.json())
                                //     .then((data) => {
                                //         setAllBooks(...allBooks, data)
                                //     })


                                // fetch("http://localhost:4010/books")
                                //     .then(res => res.json())
                                //     .then(data => {
                                //         setAllBooks(data)
                                //     })
                            }}
                        >
                            <DeleteBookIcon />
                        </button>
                        <h4 className="readingListP">{book.title}</h4>
                        <h5 className="readingListhP">{book.authorFirstName} {book.authorLastName}</h5>
                    </li>
                )
            })}
        </ul>
    )


}

export default ReadingList;