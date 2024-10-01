import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

function Home() {

    // npm i rect-router-dom
    //npm i json-server
    //npm 
    const [students, setStudents] = useState(null);
    const nav = useNavigate()

    useEffect(() => {
        fetch('http://localhost:3000/students')
            .then((res) => { return res.json() })
            .then((data) => { setStudents(data) })
    },)

    const handleView = (id) => {
        console.log(id);
        nav('/view/' + id)


    }

    const handleDelete = (id) => {
        // console.log(id);
        fetch(`http://localhost:3000/students/` + id, {
            method: "delete",
            headers: { "content-type": "application/json" }
        })



    }

    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center'>
                    <div className='col-xl-8'>
                        <div>
                            <Link to='/add' className='btn btn-warning my-2'>Add new</Link>
                        </div>
                        <div>
                            <table className='table'>
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Handle</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {students && students.map((item, index) => (
                                        <tr key={index}>
                                            <th scope='row'>{index + 1}</th>
                                            <td>{item.name}</td>
                                            <td>{item.email}</td>
                                            <td>
                                                <button onClick={() => { handleView(item.id) }} className='btn btn-primary'>View</button>
                                                <button className='btn btn-success mx-2'>Edit</button>
                                                <button onClick={() => { handleDelete(item.id) }} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>

                            </table>
                        </div>
                    </div>

                </div>





            </div>

        </div>
    )
}

export default Home
