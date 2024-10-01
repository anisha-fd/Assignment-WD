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



import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Home from './JSON-SERVER-Crud/Home';
import Adduser from './JSON-SERVER-Crud/Adduser';
import View from './JSON-SERVER-Crud/View';
import Edit from './JSON-SERVER-Crud/Edit';
import { useSelector } from 'react-redux';
import CrudHome from './Redux-Apply/Crud-Redux/CrudHome';
import RAdduser from './Redux-Apply/Crud-Redux/RAdduser';
import REdit from './Redux-Apply/Crud-Redux/REdit';





export default function App() {

  const x = useSelector(state=>state.usersData)

  // const a = useSelector(state=>state.xyz)
  return (
    <div>
      {/* <h1>Hello redux {a}</h1> */}

      {/* <ReduxHome/> */}



      

       {/* <div className='crud'>
        <BrowserRouter>
          <Link to='/'>Home Page</Link>
          <Routes>
            <Route path='/' element={<Home />} ></Route>
            <Route path='/add' element={<Adduser />}></Route>
            <Route path='/view/:viewId' element={<View />}></Route>
            <Route path='/edit/:editId' element={<Edit />}></Route>
          </Routes>
        </BrowserRouter>
        

      </div>  */}







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


      {/* -----------------REDUX -CRUD-------------------- */}

       <BrowserRouter>
      <Link to='/'>Home</Link>
      <Routes>
        <Route path='/' element={<CrudHome/>}></Route>
        <Route path='/add' element={<RAdduser/>}></Route>
        <Route path='/edit:editID' element={<REdit/>}></Route>
      </Routes>
      </BrowserRouter> 
      
      


    </div>
  )
}
