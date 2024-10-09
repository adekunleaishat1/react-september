import React from 'react'
import { useLocation } from 'react-router-dom'

const Navbar = () => {
    const location = useLocation()
    console.log(location.pathname);
    
  return (
    <>
      <nav className='d-flex justify-content-between items-center px-3 py-3'>
        <h1>Sqi</h1>
         <ul className='w-50 d-flex justify-content-between items-center nav-item'>
            <li>Home</li>
            <li>Shops</li>
            <li>About</li>
            <li>Contact</li>
            {location.pathname == '/http' ? "" :  <li><button className='btn btn-dark'>Login</button></li>}
           
         </ul>
      </nav>
    </>
  )
}

export default Navbar