import React, { useRef } from 'react'

const Uncontrolled_01 = () => {

    const inputRef = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()

        const name = inputRef.current.value
        console.log(name)
        inputRef.current.value = "";

    }

    return (
        <>

            <h1 style={{ color: "red" }}>Uncontrolled Form</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Enter your Name' ref={inputRef} />
                <br />
                <br />
                <button type='submit'>Submit</button>

            </form>


        </>
    )
}

export default Uncontrolled_01