import React from 'react'

const OnClick_01 = () => {

    const handleClick = () => {
        alert(`Button Clicked..!`)
    }

    return (
        <>
            <h1 >OnClick Event</h1>
            <button onClick={handleClick}>Alert</button>

        </>
    )
}

export default OnClick_01