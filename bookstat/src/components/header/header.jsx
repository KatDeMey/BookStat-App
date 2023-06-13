import { useState, useEffect } from "react";
import BookIcon from "../../assets/BookIcon";
import { Link } from "react-router-dom";
import "./style.css";

/** 
TODO:
search books form: save the value, convert spaces to + (" " === "+"), then google search term.

data response = total items e.g searched "the" returns 2830 items, search "daisy+jones+and+the+six" = 3506
search for isbn# (e.g https://www.googleapis.com/books/v1/volumes?q=0385692188) returns 1 item

implement dropdown so that user can eventually search by author, title, isbn, publisher, subject

filter so that results = ?language:english
*/

const Header = () => {
  const [searchResults, setSearchResults] = useState([]);
  const placeholderCover =
    "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fimg03.deviantart.net%2F323e%2Fi%2F2009%2F028%2F8%2F0%2Fclassic_red_book_cover_by_semireal_stock.jpg&f=1&nofb=1&ipt=c870a101338261a09c317afc76f9857273ebf466bb581e76ee56ab03420e13f1&ipo=images";

let searchedBook =

  // Start of implementation of search for new book/add book via search
  useEffect(() => {
    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${searchedBook}=&printType=books`
    )
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

const handleSubmit = () => {
  // preventdefault
  console.log("Hello, world")
}

  /**
   TODO: on submit
   let spaces in search input = +: converted=(" " => "+")
   searchedBook = converted
   
   TODO:
 on return of search: 
 filter books to remove results not in english (maybe eventually I can change it to a filter by language function) 
 
 allow user to add said book to their library so send a POST request to local db, to take the: title, authors[0], pg number, publisher, publishedDate, img_url= thumbnail, and description. (Will need to adjust author data collection to accommodate google's author data where authors have their full name in one, and multiple authors allowed)
 
other info: average rating

 TODO: (in backend)
 allow for multiple authors
 */

  return (
    <>
      <section className="header">
        <Link to="/">
          <div className="appTitle">
            <BookIcon />
            <h1>BookStat</h1>
          </div>
        </Link>

        <form>
          <input type="text" placeholder="Search New Books..." />
          <button type="submit" onSubmit={handleSubmit}>Search</button>
        </form>
      </section>
    </>
  );
};

export default Header;
