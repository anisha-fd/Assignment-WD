import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';

function REdit() {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {editID}= useParams();
    const users = useSelector(state=>state.usersData);
    // console.log(users)

    const existingUser = users.filter((user)=>{return user.id==editID})
    // console.log(existingUser[0]);

    const {name} = existingUser[0];
    // console.log(name)
    const [uname,setuName] = useState(name);
    const handleSubmit =(e)=>{

        e.preventDefault();

        // console.log(name)


        dispatch(editUser({id:editID,name:uname}));
        navigate('/')

    }
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center text-start'>
                    <div className='col-xl-8'>
                        <div>
                            <h2>Edit users</h2>
                            <Link to='/' className='btn btn-warning my-3'>GO back</Link>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label>Name:</label>
                                    <input type="text" value={uname} onChange={(e) => { setuName(e.target.value) }} className='form-control' />
                                </div>
                                <div className='form-group'>

                                    <input type="submit" value="update" className='my-3 btn btn-primary' />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default REdit