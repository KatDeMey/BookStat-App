import { useState } from "react"

import style from "./style.css"


const ReadingList = ({ allBooks }) => {

    //if books.reading-> return to Current reads list
    //if books.tbr --> return to tbr list
    //if books.finnished --> return to completed reads

    return (
        <ul className="current-reads">
            {allBooks.map((book, index) => {
                return (
                    <li key={index} className="bookCard">
                        <img className="book-card-img" src={book.cover_url} alt="`{book.title} cover`" />
                        <h4 className="readingListP">{book.title}</h4>
                        <h5 className="readingListhP">{book.authorFirstName} {book.authorLastName}</h5>
                    </li>
                )
            })}
        </ul>
    )


}

export default ReadingList;