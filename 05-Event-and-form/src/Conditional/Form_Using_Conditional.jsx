import React, { useState } from 'react'

const Form_Using_Conditional = () => {

    const [form, setForm] = useState(false)
    const [name, setName] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()
        alert("Welcome", name)
        setName("")

    }

    return (
        <>
            <button onClick={() => setForm(!form)}>
                {form ? "hide form" : "Show form"}
            </button>
            {
                form && (
                    <form onSubmit={handleSubmit}>
                        <input type="text" placeholder='Enter your Name' value={name} onChange={(e) => setName(e.target.value)} />
                        <br />
                        <br />
                        <br />
                        <button type='submit'>Submit</button>
                    </form>
                )
            }

        </>
    )
}

export default Form_Using_Conditional