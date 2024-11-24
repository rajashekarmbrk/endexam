import React from 'react'
import { Link , Outlet} from 'react-router-dom'
import './Pro.css'

export default function Profile() {
  return (
    <>
        <div id='div2'>
      <h1>WELCOME TO NAVIGATION</h1>
      <img src='https://tse1.mm.bing.net/th?id=OIP.K-4RqDC6zFrpAG31ayDDOgHaHa&pid=Api&P=0&h=220' alt='react' width='100px'></img>
      </div>
      <div id='div1'>
      <nav>
        <ul>
            <li><Link to='/Home' id='k1'>Home</Link></li>
        </ul>
        <ul>
            <li><Link to='/About' id='k1'>About</Link></li>
        </ul>
        <ul>
            <li><Link to='/Login' id='k2'>Login</Link></li>
        </ul>
        <ul>
            <li><Link to='/Reg' id='k2'>Register</Link></li>
        </ul>
      </nav>
      
    </div>
    <Outlet/>
    </>
  )
}
