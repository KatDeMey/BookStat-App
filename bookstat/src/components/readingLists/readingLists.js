// import { useState, useEffect } from "react-dom"
import style from "./style.css"

const ReadingList = () => {
    // const [bookList, setBookList] = useState(["book"])

    return (
        <div className="bookCard">
            {/* {bookList.map(book => { */}
                {/* return ( */}
                    {/* <> */}
                    <img src="https://images.pexels.com/photos/7295655/pexels-photo-7295655.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" width="50px" height="70px" alt="cover"/>
                    <p className="readingListP">book.title</p>
                    <p className="readingListP">"book.author"</p>
                    {/* </> */}

                {/* // ) */}

            {/* // })} */}
        </div>
    )
}

export default ReadingList