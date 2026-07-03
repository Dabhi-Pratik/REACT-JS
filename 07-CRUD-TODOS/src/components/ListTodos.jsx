import React from 'react'

const ListTodos = ({ todos, handleDelete, handleEdit }) => {
    return (
        <>

            <table border="1px">
                <thead>
                    <tr>
                        <th>id</th>
                        <th>Task</th>
                        <th>Description</th>
                        <th colSpan={2}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {todos.map((t, index) => {


                        return (
                            <tr key={t.id}>
                                <td>{index + 1}</td>
                                <td>{t.task}</td>
                                <td>{t.description}</td>
                                <td><button onClick={() => handleEdit(t.id)} >Edit</button></td>
                                <td><button onClick={() => handleDelete(t.id)}>Delete</button></td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>

        </>
    )
}

export default ListTodos