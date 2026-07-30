import { createContext, useEffect, useState } from "react";
import AddExpense from "../components/AddExpense";

// creating context
export const ExpenseContext = createContext({
    expenseList: [],
    AddExpense: () => { },
    deleteExpense: () => { },
    handleExpenseEdit: () => { },
    editValue: null,
    credit: 0,
    debit: 0,
    balance: 0,
})


// context provider
const ExpenseContextProvider = ({ children }) => {

    const initialState = [{
        id: 1,
        title: "Pizza",
        category: "Food",
        description: "food",
        amount: 600,
        type: "debit",
        date: "2026-07-30",
    }]

    const [expenseList, setExpenseList] = useState(() => {
        const saved = localStorage.getItem("expense")

        return saved ? JSON.parse(saved) : initialState
    })

    useEffect(() => {
        localStorage.setItem("expense", JSON.stringify(expenseList))
    }, [expenseList])

    const [editValue, setEditeValue] = useState(null)

    const AddExpense = (input) => {
        if (!input) {
            alert("Fill the All the Detailed")
        } else if (editValue) {
            setExpenseList((prev) => prev.map((d) => d.id === editValue.id ? {
                ...d, title: input.title,
                description: input.description,
                category: input.category,
                amount: input.amount,
                type: input.type,
                date: input.date,
            } : d))

            setEditeValue(null)
        } else {
            const newExpense = {
                id: new Date().getTime(),
                title: input.title,
                description: input.description,
                category: input.category,
                amount: input.amount,
                type: input.type,
                date: input.date
            }

            setExpenseList((prev) => [...prev, newExpense])
        }


    }

    const deleteExpense = (id) => {

        const remainExpenseList = expenseList.filter((expense) => expense.id !== id)

        setExpenseList(remainExpenseList)

        alert("Expense Delete Successfully..!")
    }

    const handleExpenseEdit = (id) => {
        const editExpense = expenseList.find((expense) => expense.id === id)

        setEditeValue(editExpense)

    }

    const credit = expenseList.filter((l) => l.type === "credit").reduce((acc, crr) => {
        return acc += Number(crr.amount)
    }, 0)

    const debit = expenseList.filter((l) => l.type === "debit").reduce((acc, crr) => {
        return acc += Number(crr.amount)
    }, 0)

    const balance = credit - debit



    const values = {
        expenseList,
        AddExpense,
        deleteExpense,
        handleExpenseEdit,
        editValue,
        credit,
        debit,
        balance
    }

    return (
        <ExpenseContext.Provider value={values}>{children}</ExpenseContext.Provider>
    );

}

export default ExpenseContextProvider