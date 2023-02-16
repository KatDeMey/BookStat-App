import { useEffect, useRef, useState } from "react"

import { useNavigate } from "react-router-dom";

const initialState = {
    title: "",
    authorFirstName: "",
    authorLastName: "",
    cover_url: "",
    numPages: 0,
    status: ""
}

const Form = ({ allBooks, setAllBooks }) => {
    const [formState, setFormState] = useState(initialState)

    //send POST to json server on form submit
    const handleSubmit = (event) => {
        event.preventDefault();

        setAllBooks([...allBooks, formState])

        //POST request
        const opts = {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({
                "title": formState.title,
                "authorFirstName": formState.authorFirstName,
                "authorLastName": formState.authorLastName,
                "cover_url": formState.cover_url,
                "numPages": formState.numPages,
                "status": formState.status
            })
        }
        //Pass the URL we want to pass TO
        fetch("http://localhost:4010/books", opts)
            .then(res => res.json())
            .then(data => {
                formState
                // console.log("posted contacts:", contacts)
                console.log("posted books formState:", formState)
            })
        //reset the form. Timer to allow for post request to complete--> maybe implement await instead
        setTimeout(() => {
            setFormState(initialState);
        }, 500)

        //GET request to get teh data back with an ID
        fetch("http://localhost:4010/books")
            .then(res => res.json())
            .then(data => {
                setAllBooks(data)
            })

        //bring page back to contactlist: if creation is ok
        navigate("/")
    }

    // handleChane = (event)...
    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === "title") {
            setFormState({ ...formState, title: value })
        }
    }
    return (
        <form>
            <label htmlFor="bookTitle">Book Title *</label>
            <input id="title"
                name="title"
                type="text"
                value={formState.title}
                required
                onChange={handleChange} />

            <label htmlFor="authorFirstName">Author's First Name</label>
            <input id="authorFirstName"
                name="authorFirstName"
                type="text"
                value={formState.authorFirstName}
                onChange={handleChange} />

            <label htmlFor="authorLastName"> Author's Last Name</label>
            <input id="authorLastName"
                name="authorLastName"
                type="authorLastName"
                value={formState.authorLastName}
                onChange={handleChange} />

            <label htmlFor="cover_url"> Cover Image URL</label>
            <input id="cover_url"
                name="cover_url"
                type="cover_url"
                value={formState.cover_url}
                onChange={handleChange} />

            <label htmlFor="numPages"> Number of Pages *</label>
            <input id="numPages"
                name="numPages"
                type="numPages"
                value={formState.numPages}
                required
                onChange={handleChange} />

            {/* TODO:
            change below to a selection rather than text input*/}
            <label htmlFor="status"> Please Select Reading Status</label>
            <input id="status"
                name="status"
                type="status"
                value={formState.status}
                required
                onChange={handleChange} />


            <div className="add-new-book">
                <button className="add-button" type="submit">
                    Add Book
                </button>
            </div>
        </form>
    )
}

export default Form