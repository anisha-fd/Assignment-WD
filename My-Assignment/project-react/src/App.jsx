import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.css'
import '../node_modules/font-awesome/css/font-awesome.css'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import { BrowserRouter, Route, Router } from 'react-router-dom'
import Product from './Components/Product'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar/>
      <Home/>

     {/* <BrowserRouter>
     <Router>
      {/* <Route path='/' element={<Home/>}></Route> */}
      {/* <Route path='/product' element={<Product/>}></Route> */}
     {/* </Router> */}

     {/* </BrowserRouter> */} 
        
      
      
   
    
       
   

      
    </div>

    
  )
}

export default App
