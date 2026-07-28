import { createContext, useState } from "react";

export const ExpenseContext = createContext({
    expenseList: []
})

const ExpenseContextProvider = ({ children }) => {

    const initialState = [{
        category: "Food",
        expenseName: "Pizza",
        price: 600,
        type: "debit"
    }]

    const [expenseList, setExpenseList] = useState(initialState)

    const values = {
        expenseList
    }

    return (
        <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
    );

}

export default ExpenseContextProvider