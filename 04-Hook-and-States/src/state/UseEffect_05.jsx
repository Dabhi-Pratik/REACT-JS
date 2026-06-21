import React, { useEffect, useState } from "react";

const UseEffect_05 = () => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        async function fetchUserData() {
            try {
                const res = await fetch(
                    "https://jsonplaceholder.typicode.com/users"
                );

                const data = await res.json();

                setUser(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchUserData();

    }, []);



    return (
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Address</th>
                    </tr>
                </thead>

                <tbody>
                    {user.map((u) => (
                        <tr key={u.id}>
                            <td>{u.id}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                            <td>
                                {u.address.street}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
};

export default UseEffect_05;