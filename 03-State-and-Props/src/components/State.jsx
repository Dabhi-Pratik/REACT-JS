import { useState } from "react";

const State = () => {

    const [count, setCount] = useState(0)

    const handelIncrement = () => {
        setCount(count + 1)
    }


    return (
        <>
            <h1>{count}</h1>
            <button onClick={handelIncrement}>Increment</button >
        </>
    )
}

export default State