import React, { useState } from 'react'

const Conditional_02 = () => {

    const [color, setColo] = useState("green")

    let content

    if (color === "blue") {
        content = <h1 style={{ color: "blue" }}>You have Selected Blue Color</h1>
    } else if (color === "red") {
        content = <h1 style={{ color: "red" }}>You have Selected Red Color</h1>
    }
    else if (color === "green") {
        content = <h1 style={{ color: "green" }}>You have Selected Green Color</h1>
    }
    else if (color === "yellow") {
        content = <h1 style={{ color: "yellow" }}>You have Selected Yellow Color</h1>
    } else {
        content = <h1>You have not selected proper Color</h1>
    }
    return (
        <>
            {content}

        </>
    )
}

export default Conditional_02