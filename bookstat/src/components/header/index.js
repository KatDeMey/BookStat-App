const Header = () => {
    return (
        <>
        <header>
        <img src="src\assets\BookIcon.svg"/>
        <h1>BookStat</h1>
        <form>
          <input type="text" placeholder="Search Your Books..." />
          <button type="submit">Search</button>
        </form> 
        </header>
        </>
    )
}

export default Header