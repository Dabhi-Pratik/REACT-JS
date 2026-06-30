import React, { useState } from 'react'

const Validation_03 = () => {
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: "",
        address: ""
    })
    const [error, setError] = useState({})

    const validate = () => {
        const newErrors = {}

        if (input.name === "") {
            newErrors.name = "Name is Required"
        }
        if (!input.email.includes("@")) {
            newErrors.email = "Invalid Email"
        }
        if (input.password.length < 6) {
            newErrors.password = "Min 6 character is required"
        }
        if (input.address === "") {
            newErrors.address = "Address is required"
        }
        return newErrors
    }


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


        const errors = validate();

        if (Object.keys(errors).length > 0) {
            return setError(errors)
        }
        alert("Form is Submited Successfully...!")


        setInput({ name: "", email: "", password: "", address: "" })

    }


    return (
        <>
            <h1 style={{ color: "red" }}>Validation Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter Your Name' value={input.name} onChange={(e) => handleChange("name", e)} />
                {error.name && <p style={{ color: "red" }}>{error.name}</p>}
                <br />
                <br />
                <input type="email" placeholder='Enter Your Email' value={input.email} onChange={(e) => handleChange("email", e)} />
                {error.email && <p style={{ color: "red" }}>{error.email}</p>}
                <br />
                <br />
                <input type="password" placeholder='Enter Your Password' value={input.password} onChange={(e) => handleChange("password", e)} />
                {error.password && <p style={{ color: "red" }}>{error.password}</p>}
                <br />
                <br />
                <input type="text" placeholder='Enter Your Address' value={input.address} onChange={(e) => handleChange("address", e)} />
                {error.address && <p style={{ color: "red" }}>{error.address}</p>}
                <br />
                <br />
                <button type='submit'>Submit</button>



            </form>
        </>
    )
}

export default Validation_03