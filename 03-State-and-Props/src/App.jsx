import React from "react"
import State from "./components/State"
import Prop from "./components/props"

const App = () => {
  return (
    <>
      <h1>Hello...!</h1>
      <State />

      <Prop msg={"Good Morning"} />
      <Prop msg={"Good Evening"} />

    </>
  )
}

export default App