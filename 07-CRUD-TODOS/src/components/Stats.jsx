

import React from 'react'

const Stats = ({ pendingTodos, totalTodos, completedTodos }) => {
    return (

        <table border="2px">
            <thead>
                <tr>
                    <th>Pending Task</th>
                    <th>Completed Task</th>
                    <th>Total Task</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{pendingTodos}</td>
                    <td>{completedTodos}</td>
                    <td>{totalTodos}</td>
                </tr>
            </tbody>
        </table>
    )
}

export default Stats