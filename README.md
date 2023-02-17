# Intro to BookStat
A digital book journal.

This project was created as a nod to my love of reading and tracking books. The design has been inspired by an existing app: StoryGraph which allows users to search for books, add them to various reading lists, and to share their reviews. 

BookStat aims to do something similar, but will act more as a digital book-journal. This will allow users to log information in a way that suits them, and will allow for a level of creativity from the user. 

To add books to your reading list, the user will be able to add the book Title, Author Name, number of pages, a user review or thoughts on the book and more. The user will also be able to link an image of the book cover, thus allowing the user to select the cover they like best to be displayed on their profile.

# Features:
1. you can view a list of your books from the main page
2. you can add new books to your lists via "add new book" and "+" button
3. you can delete a book from your reading list in the "all books" section

## To run this app:

In the project directory, you can run:

 `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

1. npm ci
3. npm start
4. Start json-server: 
    -  In a new terminal: cd into ./bookstat, 
    -  `npx json-server -p 4010 db/db.json`
5. Visit `localhost:4010/books` to make sure your json-server is running

# Roadmap:
1. Let user add a review of their completed books
2. Allow user to see review pages
3. Allow users to edit book details and reviews
4. Implement pages for each reading list and for each review
