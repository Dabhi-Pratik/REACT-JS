import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const ExpenseList = () => {

    const { expenseList, deleteExpense, handleExpenseEdit } = useContext(ExpenseContext)

    return (
        <>
            <table border={1} cellPadding={5} cellSpacing={5}>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                        <th>Category</th>
                        <th>description</th>
                        <th>Amount</th>
                        <th>type</th>
                        <th>date</th>
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        expenseList.map((data, index) => {
                            return (
                                <tr key={data.id}>
                                    <td>{index + 1}</td>
                                    <td>{data.title}</td>
                                    <td>{data.category}</td>
                                    <td>{data.description}</td>
                                    <td>{data.amount}</td>
                                    <td>{data.type}</td>
                                    <td>{data.date}</td>
                                    <td><button onClick={() => handleExpenseEdit(data.id)}>Edit</button></td>
                                    <td><button onClick={() => deleteExpense(data.id)}>Delete</button></td>

                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )
}

export default ExpenseList