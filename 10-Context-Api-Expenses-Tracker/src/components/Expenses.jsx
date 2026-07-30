import React, { useContext } from 'react'
import { ExpenseContext } from '../context/ExpenseContext'

const Expenses = () => {

    const { credit, debit, balance } = useContext(ExpenseContext)

    return (
        <>
            <h1>Credite:{credit}</h1>
            <h1>Debite: {debit}</h1>
            <h1>Balance: {balance}</h1>
        </>
    )
}

export default Expenses