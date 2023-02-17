import { useEffect, useRef, useState } from "react"
import './form.css'
const initialState = {
    title: "",
    authorFirstName: "",
    authorLastName: "",
    cover_url: "",
    numPages: "",
    status: [false, false, false]
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
        const checked = event.target.checked

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
            const newState = { ...formState }
            if (value === "tbr") {
                newState.status[0] = !newState.status[0]
                newState.status[1] = false
                newState.status[2] = false
                setFormState(newState)
            } else if (value === "reading") {
                newState.status[1] = !newState.status[1]
                newState.status[0] = false
                newState.status[2] = false
                setFormState(newState)
            } else if (value === "read") {
                newState.status[2] = !newState.status[2]
                newState.status[0] = false
                newState.status[1] = false
                setFormState(newState)
            }
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <ul>
                <li>
                    <label htmlFor="bookTitle">Book Title</label>
                    <input id="title"
                        name="title"
                        type="text"
                        value={formState.title}
                        required
                        onChange={handleChange} />
                </li>

                <li>
                    <label htmlFor="authorFirstName">Author's First Name</label>
                    <input id="authorFirstName"
                        name="authorFirstName"
                        type="text"
                        value={formState.authorFirstName}
                        required
                        onChange={handleChange} />
                </li>

                <li>
                    <label htmlFor="authorLastName"> Author's Last Name</label>
                    <input id="authorLastName"
                        name="authorLastName"
                        type="text"
                        value={formState.authorLastName}
                        required
                        onChange={handleChange} />
                </li>

                <li>
                    <label htmlFor="cover_url"> Cover Image URL</label>
                    <input id="cover_url"
                        name="cover_url"
                        type="text"
                        value={formState.cover_url}
                        onChange={handleChange} />
                </li>

                <li>
                    <label htmlFor="numPages"> Number of Pages</label>
                    <input id="numPages"
                        name="numPages"
                        type="text"
                        value={formState.numPages}
                        required
                        onChange={handleChange} />
                </li>

                <div className="form__group">
                    <p>Please Select Reading Status</p>
                    <ul>
                        <li>
                            <label >
                                <input
                                    name="status"
                                    type="checkbox"
                                    value="tbr"
                                    checked={formState.status[0]}
                                    onChange={handleChange} />To Be Read
                            </label>
                        </li>
                        <li>
                            <label >
                                <input
                                    name="status"
                                    type="checkbox"
                                    value="reading"
                                    checked={formState.status[1]}
                                    onChange={handleChange} />Reading
                            </label>
                        </li>
                        <li>
                            <label >
                                <input
                                    name="status"
                                    type="checkbox"
                                    value="read"
                                    checked={formState.status[2]}
                                    onChange={handleChange} />Read
                            </label>
                        </li>
                    </ul>
                </div>

                <input
                    type="submit"
                    value="Add Book" />
            </ul>
        </form >
    )
}

export default Form