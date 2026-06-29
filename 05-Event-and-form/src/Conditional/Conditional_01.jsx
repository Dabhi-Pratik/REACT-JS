import React, { useState } from 'react'

const Conditional_01 = () => {

    const [login, setLogin] = useState(false)
    const [user, setUser] = useState(true)

    return (
        <>
            <h1>Conditional-01</h1>
            <h1>{login ? "welcome" : "click to Login"}</h1>
            <button onClick={() => setLogin(!login)}>{login ? "logOut" : "login"}</button>
            {user && <h3>Welcome user</h3>}

        </>
    )
}

export default Conditional_01