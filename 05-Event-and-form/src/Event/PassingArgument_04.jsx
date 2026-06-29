import React from 'react'

const PassingArgument_04 = ({ name }) => {

    const handleClick = () => {
        alert(`Hii There is ${name}`)

    }

    return (
        <>
            <h1>Passing Argument Event</h1>
            <button onClick={() => handleClick(name)}>Click</button>
        </>
    )
}

export default PassingArgument_04