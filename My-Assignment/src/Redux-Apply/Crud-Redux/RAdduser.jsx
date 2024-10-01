import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate , Link} from 'react-router-dom';
import { addUser } from './reducer';

function RAdduser() {

    
    const [name,setName] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit =(e)=>{

        e.preventDefault();

        // console.log(name)


        dispatch(addUser({id:index++,name:name}));
        navigate('/')

    }
    return (
        <div>
            <div className='container'>
                <div className='row justify-content-center text-start'>
                    <div className='col-xl-8'>
                        <div>
                            <h2>Add users</h2>
                            <Link to='/' className='btn btn-warning my-3'>GO back</Link>
                        </div>
                        <div>
                            <form onSubmit={handleSubmit}>
                                <div className='form-group'>
                                    <label>Name:</label>
                                    <input type="text" value={name} onChange={(e) => { setName(e.target.value) }} className='form-control' />
                                </div>
                                <div className='form-group'>

                                    <input type="submit" value="Add" className='my-3 btn btn-primary' />
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RAdduser