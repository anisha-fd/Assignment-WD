import React from 'react'
import './App.css';

import CreateList from './MODULE_9/CreateList'
import IncrementDecrement from './MODULE_9/IncrementDecrement'
import HelloWorld from './MODULE_9/HelloWorld'
import Login from './MODULE_9/Login&Logout/Login'
import PublicView from './MODULE_9/Login&Logout/PublicView'
import FirstFooter from './MODULE_9/Login&Logout/FirstFooter'
import Navbar2 from './MODULE_9/Login&Logout/Navbar2'
import Private from './MODULE_9/Login&Logout/Private'
import Footer2 from './MODULE_9/Login&Logout/Footer2'
import List_Hooks from './Component_State_Props/List_Hooks'
import Todo_List from './MODULE_9/Todo_List'
import MouseEvent from './MODULE_9/MouseEvent'
import '../node_modules/bootstrap/dist/css/bootstrap.css'

import StyleMUI from './MODULE-11/Practical/StyleMUI';
import Crud from './MODULE-11/Practical/Curd';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './JSON-SERVER-Crud/Home';
import Adduser from './JSON-SERVER-Crud/Adduser';
import View from './JSON-SERVER-Crud/View';
import Edit from './JSON-SERVER-Crud/Edit';





export default function App() {
  return (
    <div>

      <div className='crud'>
        <BrowserRouter>
          <Link to='/'>Home Page</Link>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/add' element={<Adduser />}></Route>
            <Route path='/view/:viewId' element={<View />}></Route>
            <Route path='/edit/:editId' element={<Edit />}></Route>
          </Routes>
        </BrowserRouter>
        

      </div>







      {/* <Que_Ans/> */}

      {/* <CreateList/> */}
      {/* <IncrementDecrement/> */}
      {/* <HelloWorld/> */}


      {/* <Login/>
      <PublicView/>
      <FirstFooter/>
      <Navbar2/>
      <Private/>
      <Footer2/> 

      <List_Hooks/>

      {<Todo_List/> } */}

      {/* <MouseEvent/> */}

      {/* <Header/> */}

      {/* <StyleMUI/> */}

      {/* <Crud/> */}



    </div>
  )
}
