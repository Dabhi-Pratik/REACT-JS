import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const ExpenseList = () => {

    const { expenseList, deleteExpense, handleExpenseEdit } = useContext(ExpenseContext)

    const [expenseQuery, setExpenseQuery] = useState({
        title: "",
        type: "all",
        category: "all",
        sort: ""
    })

    const handleChange = (field, e) => {
        setExpenseQuery((prev) => ({
            ...prev,
            [field]: e.target.value
        }))
    }

    // ✅ FILTER + SORT LOGIC
    const filterList = expenseList.filter((l) =>
        l.title.toLowerCase().includes(expenseQuery.title.toLowerCase())
    ).filter((l) =>
        expenseQuery.type === "all" ? true : l.type === expenseQuery.type
    ).filter((l) =>
        expenseQuery.category === "all" ? true : l.category === expenseQuery.category
    )

    const sortedList = [...filterList].sort((a, b) => {
        if (expenseQuery.sort === "asc") {
            return b.id - a.id
        }
        if (expenseQuery.sort === "desc") {
            return a.id - b.id
        }
        if (expenseQuery.sort === "moneyAsc") {
            return Number(a.amount) - Number(b.amount)
        }
        if (expenseQuery.sort === "moneyDsc") {
            return Number(b.amount) - Number(a.amount)
        }
    }
    )


    return (
        <>
            <form>
                <label>Title:</label>
                <input
                    type="text"
                    placeholder='Enter Title'
                    value={expenseQuery.title}
                    onChange={(e) => handleChange("title", e)}
                />

                <label>Type:</label>
                <select
                    value={expenseQuery.type}
                    onChange={(e) => handleChange("type", e)}
                >
                    <option value="all">All</option>
                    <option value="debit">Debit</option>
                    <option value="credit">Credit</option>
                </select>

                <label>Category:</label>
                <select
                    value={expenseQuery.category}
                    onChange={(e) => handleChange("category", e)}
                >
                    <option value="all">All</option>
                    <option value="food">Food</option>
                    <option value="general">General</option>
                    <option value="travel">Travel</option>
                    <option value="hospital">Hospital</option>
                    <option value="school">School</option>
                    <option value="other">Other</option>
                </select>

                <label>Sort:</label>
                <select
                    value={expenseQuery.sort}
                    onChange={(e) => handleChange("sort", e)}
                >
                    <option value="">Sort By</option>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                    <option value="moneyAsc">Money Ascending</option>
                    <option value="moneyDsc">Money Descending</option>
                </select>
            </form>

            <br /><br />

            {
                sortedList.length > 0 ? (
                    <table border={1} cellPadding={5}>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Title</th>
                                <th>Category</th>
                                <th>Description</th>
                                <th>Amount</th>
                                <th>Type</th>
                                <th>Date</th>
                                <th colSpan={2}>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                sortedList.map((data, index) => (
                                    <tr key={data.id}>
                                        <td>{index + 1}</td>
                                        <td>{data.title}</td>
                                        <td>{data.category}</td>
                                        <td>{data.description}</td>
                                        <td>{data.amount}</td>
                                        <td>{data.type}</td>
                                        <td>{data.date}</td>
                                        <td>
                                            <button onClick={() => handleExpenseEdit(data.id)}>Edit</button>
                                        </td>
                                        <td>
                                            <button onClick={() => deleteExpense(data.id)}>Delete</button>
                                        </td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                ) : <h1>No Data Found</h1>
            }
        </>
    )
}

export default ExpenseList