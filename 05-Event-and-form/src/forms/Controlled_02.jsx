import React, { useState } from 'react'

const Controlled_02 = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    })

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })

    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.name === "") {
            setError("Name is Required")
        }
        else if (input.email === "") {
            setError("Email is Required")
        }
        else if (input.password === "") {
            setError("Password is Required")
        }
        else if (input.address === "") {
            setError("Address is Required")
        } else {
            setError("")
            console.log(input)
        }

        setInput({ name: "", email: "", password: "", address: "" })

    }

    const [error, setError] = useState()
    return (
        <>
            <h1 style={{ color: "red" }}>Controlled Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name' value={input.name} onChange={(e) => handleChange("name", e)} />
                <br />
                <br />
                <input type="email" placeholder='Enter Your Email' value={input.email} onChange={(e) => handleChange("email", e)} />
                <br />
                <br />
                <input type="password" placeholder='Enter Your Password' value={input.password} onChange={(e) => handleChange("password", e)} />
                <br />
                <br />
                <input type="text" placeholder='Enter Your Address' value={input.address} onChange={(e) => handleChange("address", e)} />
                <br />
                <br />
                <button type='submit'>Submit</button>
                <p style={{ color: "red" }}>{error}</p>


            </form>
        </>
    )
}

export default Controlled_02