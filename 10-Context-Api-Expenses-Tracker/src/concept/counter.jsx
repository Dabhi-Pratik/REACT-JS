import React, { useReducer, useState } from 'react'

const initialValue = {
    counter: 0
}

const reducer = (state, action) => {

    switch (action.type) {
        case "increment":
            return {
                counter: state.counter + 1

            }
        case "decrement":
            return {
                counter: state.counter - 1
            }

        case "custome":
            return {
                counter: state.counter + Number(action.payload)
            }
    }

}

const Counter = () => {

    const [state, dispatch] = useReducer(reducer, initialValue)

    const [input, setInput] = useState(0)



    return (

        <>
            <h1>counter:{state.counter}</h1>
            <button onClick={() => { dispatch({ type: "increment" }) }} >+1</button>
            <br />
            <br />
            <button onClick={() => { dispatch({ type: "decrement" }) }} >-1</button>
            <br />
            <br />
            <input type="text" value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={() => dispatch({ type: "custome", payload: input })}>Add</button>

        </>
    )
}

export default Counter