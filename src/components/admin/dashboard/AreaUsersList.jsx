import React, { useEffect, useState } from 'react';

async function getUsers() {
    const res = await fetch('http://localhost:3001/api/users/', {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
        },
    });
    const data = await res.json();
    console.log("API Response:", data); // Log the response to check its structure
    return data.user; // Return the array of users
}

export default function AreaUsersList() {
    const [users, setUsers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const usersData = await getUsers();
                if (Array.isArray(usersData)) {
                    setUsers(usersData);
                } else {
                    throw new Error('API did not return an array');
                }
            } catch (err) {
                setError(err.message);
            }
        };

        fetchUsers();
    }, []); // Empty dependency array means this effect runs once after the initial render

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div className="card">
            <table className="table table-striped">
                <thead>
                    <tr>
                        {/* <th>Avatar</th> */}
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => (
                        <tr key={user._id}>
                            {/* <td>
                                <img src={user.avatar} width="40" height="40" style={{ borderRadius: "50%" }} alt={`${user.firstname} ${user.lastname}'s Avatar`} />
                            </td> */}
                            <td>{`${user.firstname} ${user.lastname}`}</td>
                            <td>{user.email}</td>
                            <td>
                                <span className={`badge bg-${user.role === "admin" ? 'pink' : 'green'}-500 text-black`}>
                                    {user.role}
                                </span>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
