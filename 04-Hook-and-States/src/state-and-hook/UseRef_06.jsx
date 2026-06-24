import { useRef } from "react"

const UseRef_06 = () => {

    const inputRef = useRef(null)

    const handleFocus = () => {
        inputRef.current.focus()

    }
    console.log("Input value", inputRef)
    return (
        <>

            <input type="text" ref={inputRef} placeholder="Enter your Name" />
            <br />
            <br />
            <br />

            <button onClick={handleFocus}>Focus</button>
        </>
    )
}

export default UseRef_06