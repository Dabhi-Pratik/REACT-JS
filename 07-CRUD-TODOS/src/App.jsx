import React, { useState } from 'react'
import AddTodos from './components/AddTodos'

const App = () => {

  const initialTodos = [{
    id: 1,
    task: "Learn React",
    description: "You have to learn React Daily.!"
  },
  {
    id: 2,
    task: "Do yoga",
    description: "Do meditation at least 10 minute Daily.."
  }
  ]
  const [todos, setTodos] = useState(initialTodos)

  const handleAdd = ((input) => {
    setTodos((prev) => [...prev, input])
  })
  return (

    <>
      <AddTodos handleAdd={handleAdd} />
    </>
  )
}

export default App