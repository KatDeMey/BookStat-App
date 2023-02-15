import { useState } from "react"

import style from "./style.css"


const ReadingList = ({ bookList }) => {

    return (
        <div className="bookCard" >
            <img className="book-card-img" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.zOfVx3YBe-N6tLUM6DKLwAHaLW%26pid%3DApi&f=1&ipt=21cfcc2adda96c3805815429332a093ddc5b34344a05b479e80dbdb0ae15a475&ipo=images" alt="cover" />
            <h4 className="readingListP">bookList.title</h4>
            <h5 className="readingListhP">bookList.authorFirstName bookList.authorLastName</h5>
        </div>
    )


}       
 
export default ReadingList;