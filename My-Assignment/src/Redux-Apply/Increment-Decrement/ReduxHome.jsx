import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './Action';

export default function ReduxHome() {

    const b = useSelector(state=>state.xyz)
    const dispatch = useDispatch();

    

  return (
    <div className='counter'>
        <h1>Hello Redux</h1>
        <br />
        <h2>Count :{b}</h2>
        <br />
        <button onClick={()=>{dispatch(increment())}}>Increment</button>
        
        <button onClick={()=>{dispatch(decrement())}}>Decrement</button>


      
    </div>
  )
}
