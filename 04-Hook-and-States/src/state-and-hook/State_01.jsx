import { useState } from "react";

const State_01 = () => {

    const [count, setCount] = useState(0)

    const handleIncrement = () => {
        setCount((count) => count + 1)
    }

    return (
        <>
            <h1>Count Value {count}</h1>
            <button onClick={handleIncrement}>Increase +1</button>
            <br />
            <br />
            <br />
            <button onClick={() => {
                handleIncrement()
                handleIncrement()
                handleIncrement()
                handleIncrement()
                handleIncrement()
            }}>Increment +5</button >
        </>
    )
}

export default State_01