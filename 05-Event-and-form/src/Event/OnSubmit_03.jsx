import React, { useState } from 'react'

const OnSubmit_03 = () => {
    const [input, setInput] = useState({
        name: "",
        email: ""
    })

    const [person, setPerson] = useState([])

    const handleSubmit = (e) => {
        e.preventDefault();

        setPerson((prev) => [...prev, input]);

        setInput({
            name: "",
            email: "",
        });

        alert(`Your From is Submited`)
    };

    const handleInput = (field, e) => {
        setInput((prev) => {
            return {
                ...prev, [field]: e.target.value
            }
            setInput({ name: "", email: "" })

        }


        )
    }
    return (
        <>
            <h1>OnSubmit Event</h1>
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder='Enter your name' value={input.name} onChange={(e) => handleInput("name", e)} />
                <br />
                <br />
                <input type="email" placeholder='Enter your email' value={input.email} onChange={(e) => handleInput("email", e)} />
                <br />
                <br />  
                <button type='submit'>Submit</button>
            </form>
        </>
    )
}

export default OnSubmit_03