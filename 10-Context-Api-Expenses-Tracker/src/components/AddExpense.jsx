import React, { useState } from 'react'

const AddExpense = () => {

    const [input, setInput] = useState({
        title: "",
        category: "",
        description: "",
        amount: 0,
        type: "",
        date: "",
    })

    const [expenseList, setExpenseList] = useState([])

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

        setExpenseList((prev) => [...prev, input])

        setInput({
            title: "",
            category: "",
            description: "",
            amount: 0,
            type: "",
            date: "",

        })
    }

    console.log("data", expenseList)

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
                <label htmlFor="amount" >Amount:</label>
                <input type="number" value={input.amount} onChange={(e) => handleChange("amount", e)} />
                <br />
                <br />
                <label htmlFor="date" >Date:</label>
                <input type="date" value={input.date} onChange={(e) => handleChange("date", e)} />
                <br />
                <br />
                <select name="" id="" onChange={(e) => handleChange("category", e)}>
                    <option value="food">Food</option>
                    <option value="general">general</option>
                    <option value="travel">travel</option>
                    <option value="hospital">hospital</option>
                    <option value="school">school</option>
                    <option value="other">other</option>

                </select>
                <select name="" id="" onChange={(e) => handleChange("type", e)}>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                </select>
                <button type='submit'>Add</button>
            </form>
        </>
    )
}

export default AddExpense