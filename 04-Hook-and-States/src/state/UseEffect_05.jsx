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
                    {user.map((u) => {
                        const { id, name, email, address: { city, street } } = u
                        return (
                            <tr key={id}>
                                <td>{id}</td>
                                <td>{name}</td>
                                <td>{email}</td>
                                <td>
                                    {city},{street}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
};

export default UseEffect_05;