import React, { useState } from 'react'

const OnChange_02 = () => {
  const [input, setInput] = useState("")

  return (
    <>
      <h1 >OnChange Event</h1>
      <input type="text" placeholder='Enter Your Name' value={input} onChange={(e) => setInput(e.target.value)} />
      <h2>You Typed {input}</h2>
    </>
  )
}

export default OnChange_02