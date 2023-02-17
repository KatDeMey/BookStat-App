import { useEffect, useRef, useState } from "react"

const initialState = {
    title: "",
    authorFirstName: "",
    authorLastName: "",
    cover_url: "",
    numPages: "",
    status: ""
}

const Form = ({ allBooks, setAllBooks, setIsModalOpen }) => {
    const [formState, setFormState] = useState(initialState)

    const handleSubmit = async event => {
        event.preventDefault();

        const res = await fetch('http://localhost:4010/books', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                "title": formState.title,
                "authorFirstName": formState.authorFirstName,
                "authorLastName": formState.authorLastName,
                "cover_url": formState.cover_url,
                "numPages": formState.numPages,
                "status": formState.status
            })
        })
        const data = await res.json()
        setAllBooks([...allBooks, data])

        setIsModalOpen(false)
    }

    const handleChange = (event) => {
        const name = event.target.name
        const value = event.target.value

        if (name === "title") {
            setFormState({ ...formState, title: value })
        }
        if (name === "authorFirstName") {
            setFormState({ ...formState, authorFirstName: value })
        }
        if (name === "authorLastName") {
            setFormState({ ...formState, authorLastName: value })
        }
        if (name === "cover_url") {
            setFormState({ ...formState, cover_url: value })
        }
        if (name === "numPages") {
            setFormState({ ...formState, numPages: value })
        }
        if (name === "status") {
            setFormState({ ...formState, status: value })
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="bookTitle">Book Title *</label>
            <input id="title"
                name="title"
                type="text"
                value={formState.title}
                required
                onChange={handleChange} />

            <br />

            <label htmlFor="authorFirstName">Author's First Name</label>
            <input id="authorFirstName"
                name="authorFirstName"
                type="text"
                value={formState.authorFirstName}
                onChange={handleChange} />

            <br />

            <label htmlFor="authorLastName"> Author's Last Name</label>
            <input id="authorLastName"
                name="authorLastName"
                type="text"
                value={formState.authorLastName}
                required
                onChange={handleChange} />

            <br />

            <label htmlFor="cover_url"> Cover Image URL</label>
            <input id="cover_url"
                name="cover_url"
                type="text"
                value={formState.cover_url}
                onChange={handleChange} />

            <br />

            <label htmlFor="numPages"> Number of Pages *</label>
            <input id="numPages"
                name="numPages"
                type="text"
                value={formState.numPages}
                required
                onChange={handleChange} />

            <br />

            {/* TODO:
            change below to a selection rather than text input*/}
            <label htmlFor="status"> Please Select Reading Status</label>
            <input id="status"
                name="status"
                type="text"
                value={formState.status}
                required
                onChange={handleChange} />
            <br />
            <br />
            <div className="formFooter">
                <button onClick={(() => setIsModalOpen(false))}>Cancel</button>
                <button type="submit" className="formSubmit">
                    Add book
                </button>
            </div>
        </form>
    )
}

export default Form