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

    const mystyle = {
        backgroundColor: "blue",
        color:"white",
        margin:"10px 10px",
        padding:"10px",
        borderRadius:"10px",
        maxWidht:"150px",
 
    },
    btn = {
        backgroundColor: "black",
        color:"white",
        margin:"10px 10px",
        padding:"10px",
        borderRadius:"10px",
        maxWidht:"150px",
        marginLeft:"80px",
    },
    num = {
        marginLeft:"100px",
    }
  return (
    <div>
    <div>
        <h2>React Web</h2>
        <h1 style={num}>{number}</h1>
        <button onClick={handelDecrement} style={mystyle} >Decrement</button>
        <button onClick={handelIncrement} style={mystyle}>Increment</button>
        <br />
        <button onClick={handelReset} style={btn}>Reset</button>
      
    </div>
    </div>
  )
}
