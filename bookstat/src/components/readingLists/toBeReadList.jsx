import { useState } from "react"

import style from "./style.css"


const ToBeReadList = ({ allBooks }) => {
//status === "tbr" "read" "reading"
return (
    // console.log("in tbr:", allBooks)
    <ul className="current-reads">
        {allBooks.filter(book => 
        book.ReadStatus === "tbr" ).map(filteredByReading => (
            <li key={filteredByReading.id} className="bookCard">
                <img className="book-card-img" src={filteredByReading.coverUrl} alt={filteredByReading.title}  />
                <h4 className="readingListP">{filteredByReading.title}</h4>
                <h5 className="readingListhP">{filteredByReading.authorFirstName} {filteredByReading.authorLastName}</h5>
            </li>
        ))
        }
    </ul>
)
}

export default ToBeReadList;