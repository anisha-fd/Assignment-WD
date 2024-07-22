import React from 'react'

export default function HelloWorld() {

    const mystyle = {
        backgroundColor: "black",
        color:"#00d8ff",
        textAlign:"center",
        height:"400px",
        fontSize:"50px",
        width:"100%",
        // paddingTop:"25px",
        

        
    },
    hello = {
        backgroundColor: "#00d8ff",
        color:"black",
        textAlign:"center",
        height:"300px",
        fontSize:"30px",
        fontFamily:"sans-serif",
        paddingTop:"25px",
        

    }

  return (
    <div >
        <div style={mystyle}>
            <h1 >React JS</h1>
            <img src="https://1000logos.net/wp-content/uploads/2023/10/React-Logo-500x281.png" alt="" height={200} width={350} style={{ Color: "#00d8ff"}}/>
            

        
        </div>

         <div style={hello}>
            <h1>Hello World</h1>
        </div> 
      
    </div>
  )
}
