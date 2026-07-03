import React, { useState } from 'react'
import AddTodos from './components/AddTodos'
import ListTodos from './components/ListTodos'

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

  const [editVal, setEditVal] = useState(null)

  const handleAdd = ((input) => {
    if (!input.task || !input.description) {
      alert("Task data Required")
      return
    } else if (editVal) {
      setTodos((todos) => todos.map((t) => t.id === editVal.id ? { ...t, task: input.task, description: input.description } : t))

      setEditVal(null)
    } else {
      const newTodos = {
        id: new Date().getTime(),
        task: input.task,
        description: input.description
      }

      setTodos((prev) => [...prev, newTodos])

      alert("Todo Add SuccessFully...!")
    }
  })



  const handleDelete = (id) => {
    setTodos(todos.filter((t) => t.id !== id))
  }

  const handleEdit = (id) => {
    const todo = todos.find((t) => t.id === id)

    setEditVal(todo)
  }

  return (

    <>
      <AddTodos handleAdd={handleAdd} editVal={editVal} />
      <br />
      <ListTodos todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  )
}

export default App