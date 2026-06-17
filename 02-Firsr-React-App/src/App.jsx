import React from 'react'
import Fragments from './components/fragmentation'
import JSX from './JSX'
import ClassComponent from './components/class'

const App = () => {
  return (
    <>
      <h1>Hello....</h1>

      <JSX />
      <Fragments />
      <ClassComponent />
    </>
  )
}

export default App