import React, { useState } from 'react'

export default function IncrementDecrement() {

    const [number,setnumber] = useState(0);

    const   handelDecrement=()=>{
        console.log("click");
        setnumber(number-1);

    }

    const   handelIncrement=()=>{
        console.log("click");
        setnumber(number+1);
        console.log(number);


    }

    const   handelReset=()=>{
        setnumber(0);

    }
  return (
    <div>
        <h2>React Web</h2>
        <h1>{number}</h1>
        <button onClick={handelDecrement}  >Decrement</button>
        <button onClick={handelIncrement}>Increment</button>
        <br />
        <button onClick={handelReset}>Reset</button>
      
    </div>
  )
}
