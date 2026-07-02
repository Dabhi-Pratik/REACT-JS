import React, { useState } from 'react'

const AddTodos = ({ handleAdd }) => {

    const [input, setInput] = useState({
        task: "",
        description: ""
    })

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }

    console.log("Input", input)

    const handleSubmit = (e) => {
        e.preventDefault()

        handleAdd(input)
        setInput({
            task: "",
            description: ""
        })
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={input.task} placeholder='Enter your Task' onChange={(e) => handleChange("task", e)} />
                <br />
                <br />
                <br />
                <input type="text" value={input.description} placeholder='Enter Task Description' onChange={(e) => handleChange("description", e)} />
                <br />
                <br />
                <br />
                <button type='submit'>Add</button>
            </form>

        </>
    )
}

export default AddTodos