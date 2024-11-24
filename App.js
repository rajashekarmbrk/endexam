import React from 'react'
// import Register from './singlereg/Register'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Profile from './navigation/Profile'
import Home from './navigation/Home'
import About from './navigation/About'
import Login from './navigation/Login'
import Reg from './navigation/Reg'

export default function App() {
  return (
    <div>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Profile/>}>
      <Route path='/Home' element={<Home/>}></Route>
      <Route path='/About' element={<About/>}></Route>
      <Route path='/Login' element={<Login/>}></Route>
      <Route path='/Reg' element={<Reg/>}></Route>
      </Route>


    </Routes>
    </BrowserRouter>
    </div>
  )
}
