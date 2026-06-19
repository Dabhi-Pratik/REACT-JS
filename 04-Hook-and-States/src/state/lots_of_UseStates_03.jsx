import React, { useState } from 'react'

const Lots_of_UseStates_03 = () => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [address, setAddress] = useState("")
    const [person, setPerson] = useState([])

    const handleAdd = () => {
        setPerson((prev) => [...prev, { name, email, address }])

        setName("")
        setEmail("")
        setAddress("")
    }
    return (
        <>

            <input type="text" placeholder="Enter Your Name" value={name} onChange={(e) => setName(e.target.value)} />
            <br />
            <br />
            <br />
            <input type="email" placeholder="Enter Your Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <br />
            <br />
            <br />
            <input type="text" placeholder="Enter Your Address" value={address} onChange={(e) => setAddress(e.target.value)} />
            <br />
            <br />
            <br />

            <button onClick={handleAdd}>Submit</button>

        </>
    )
}

export default Lots_of_UseStates_03