import React, { useState } from 'react'
import AddTodos from './components/AddTodos'
import ListTodos from './components/ListTodos'
import Stats from './components/Stats'

const App = () => {

  const initialTodos = [{
    id: 1,
    task: "Learn React",
    description: "You have to learn React Daily.!",
    completed: true
  },
  {
    id: 2,
    task: "Do yoga",
    description: "Do meditation at least 10 minute Daily..",
    completed: false
  }
  ]

  const [todos, setTodos] = useState(initialTodos)


  console.log("todos", todos)

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
        description: input.description,
        completed: false
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


  const handleToggleTodo = (id) => {

    setTodos((prev) => prev.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))

  }


  const totalTodos = todos.length

  const completedTodos = todos.filter((t) => t.completed === true).length

  const pendingTodos = totalTodos - completedTodos


  return (

    <>
      <AddTodos handleAdd={handleAdd} editVal={editVal} />
      <br />
      <br />

      <Stats totalTodos={totalTodos} completedTodos={completedTodos} pendingTodos={pendingTodos} />
      <br />
      <br />
      <ListTodos todos={todos} handleDelete={handleDelete} handleEdit={handleEdit} handleToggleTodo={handleToggleTodo} />
    </>
  )
}

export default App