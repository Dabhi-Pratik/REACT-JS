
import React, { useState } from "react"

const ObjectUseState_04 = () => {

    const [input, setInput] = useState({
        name: "",
        email: "",
        address: ""
    })

    const [person, setPerson] = useState([])

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev, [field]: e.target.value
            }


        })
    }

    const handleClick = () => {
        setPerson((prev) => [...prev, input])
        setInput({ name: "", email: "", address: "" })
    }

    return (
        <>

            <input type="text" placeholder="Enter Your Name" value={input.name} onChange={(e) => handleChange("name", e)} />
            <br />
            <br />
            <br />
            <input type="email" placeholder="Enter Your Email" value={input.email} onChange={(e) => handleChange("email", e)} />
            <br />
            <br />
            <br />
            <input type="text" placeholder="Enter Your address" value={input.address} onChange={(e) => handleChange("address", e)} />

            <br />
            <br />
            <br />

            <button onClick={handleClick}>ADD</button>
        </>
    )
}

export default ObjectUseState_04