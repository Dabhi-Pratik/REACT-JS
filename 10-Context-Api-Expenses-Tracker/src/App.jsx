import React from 'react'
import AddExpense from './components/AddExpense'
import ExpenseList from './components/ExpenseList'
import Expenses from './components/Expenses'

const App = () => {
  return (
    <>
      <AddExpense />
      <br />
      <br />
      <Expenses />
      <br />
      <br />
      <ExpenseList />
    </>
  )
}

export default App