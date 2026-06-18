import { useEffect, useState } from "react";

const LifeCycle_02 = () => {
    const [name, setName] = useState("")

    //  dependency
    // useEffect(() => {
    //     console.log("component mount")
    // },[])

    //updated

    // useEffect(() => {
    //     console.log("component update")
    // }, [name])

    //unmount

    useEffect(() => {
        return () => {
            console.log("This will unmount")
        }
    })

    return (
        <>
            <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} />

            <h1>You have Typed {name}</h1>
        </>
    )
}

export default LifeCycle_02