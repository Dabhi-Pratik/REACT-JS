import React from "react";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import Expenses from "./components/Expenses";
import Counter from "./concept/counter";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Container className="mt-2">
        {/* <Counter/> */}
        <Expenses />

        <br />
        <br />
        <AddExpense />
        <br />
        <br />
        <ExpenseList />
      </Container>
    </>
  );
};

export default App;
