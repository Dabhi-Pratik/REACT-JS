import React, { useContext, useEffect, useState } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const AddExpense = () => {

    const { AddExpense, editValue } = useContext(ExpenseContext)

    const [input, setInput] = useState({
        title: "",
        category: "",
        description: "",
        amount: 0,
        type: "",
        date: "",
    })

    useEffect(() => {
        editValue ? setInput(editValue) : null
    }, [editValue])

    const handleChange = (field, e) => {
        setInput((prev) => {
            return {
                ...prev,
                [field]: e.target.value
            }
        })
    }

    const hnadleSubmit = (e) => {
        e.preventDefault();

        AddExpense(input)

        setInput({
            title: "",
            category: "",
            description: "",
            amount: 0,
            type: "",
            date: "",

        })
    }

    // console.log("data", expenseList)

    return (
        <>
            <form action="" onSubmit={hnadleSubmit}>
                <label htmlFor="title" >Title:</label>
                <input type="text" placeholder='enter title' value={input.title} onChange={(e) => handleChange("title", e)} />
                <br />
                <br />
                <label htmlFor="description" >Description:</label>
                <input type="text" placeholder='enter description' value={input.description} onChange={(e) => handleChange("description", e)} />
                <br />
                <br />
                <label htmlFor="category" >Category:</label>
                <select
                    value={input.category}
                    onChange={(e) => handleChange("category", e)}
                >
                    <option value="">Select Category</option>
                    <option value="food">Food</option>
                    <option value="general">General</option>
                    <option value="travel">Travel</option>
                    <option value="hospital">Hospital</option>
                    <option value="school">School</option>
                    <option value="other">Other</option>
                </select>
                <br />
                <br />
                <label htmlFor="amount" >Amount:</label>
                <input type="number" value={input.amount} onChange={(e) => handleChange("amount", e)} />
                <br />
                <br />
                <label htmlFor="date" >Date:</label>
                <input type="date" value={input.date} onChange={(e) => handleChange("date", e)} />
                <br />
                <br />
                <label htmlFor="type">Type</label>
                <select value={input.type} onChange={(e) => handleChange("type", e)}>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                </select>
                <br />
                <br />
                <button type='submit'>{editValue ? "update" : "add"}</button>
            </form>
        </>
    )
}

export default AddExpense