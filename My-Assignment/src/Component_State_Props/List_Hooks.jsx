import React, { useState ,useEffect} from 'react'
// import axios from 'axios';




export default function List_Hooks() {

    const [user, setUser] = useState([]);
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("User Data");
    });

    useEffect(() => {
        // fetchUserdata();
        console.log("User Data");
    }, [count]);

    useEffect(() => {
        fetchUserData();
    }, []);




    const fetchUserData = async () => {
        try {
            const response = await fetch("https://fakestoreapi.com/users");
            setUser(response.data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    return (
        <div>
            <table border={2}>
                <thead>
                    <tr style={{ backgroundColor: "black", color: "white", fontFamily: "sans-serif" }}>
                        <th rowSpan={2}>Id</th>
                        <th rowSpan={2}>Email</th>
                        <th rowSpan={2}>Username</th>
                        <th rowSpan={2}>Password</th>
                        <th colSpan={2}>Name</th>
                        <th colSpan={3}>Address</th>
                    </tr>
                    <tr style={{ backgroundColor: "black", color: "white", fontFamily: "sans-serif" }}>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Street</th>
                        <th>City</th>
                        <th>Zipcode</th>
                    </tr>
                </thead>
                <tbody>
                    {user.length > 0 && user.map((user, index) => {
                        return (
                            <tr key={index} style={{ backgroundColor: "	 #ffffe6", fontFamily: "sans-serif" }}>
                                <td>{user.id}</td>
                                <td>{user.email}</td>
                                <td>{user.username}</td>
                                <td>{user.password}</td>
                                <td>{user.name.firstname}</td>
                                <td>{user.name.lastname}</td>
                                <td>{user.address.street}</td>
                                <td>{user.address.city}</td>
                                <td>{user.address.zipcode}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h2 style={{ marginLeft: "30%" }}>{count}</h2>
            <button onClick={() => setCount(count + 1)} style={{ backgroundColor: "black", width: "10%", height: "30px", borderRadius: "3px", color: "white", marginLeft: "25%" }}>Click</button>

        </div>
    )
}
