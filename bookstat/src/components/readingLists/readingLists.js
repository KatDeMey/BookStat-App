import { useState } from "react"
import style from "./style.css"


const ReadingList = ({ allBooks }) => {

    return (
        <ul className="current-reads">
            {allBooks.map((book, index) => {
                return (
                    <li key={index} className="bookCard">
                        <img className="book-card-img" src={book.cover_url} alt={book.title} />
                        <h4 className="readingListP">{book.title}</h4>
                        <h5 className="readingListhP">{book.authorFirstName} {book.authorLastName}</h5>
                    </li>
                )
            })}
        </ul>
    )


}

export default ReadingList;