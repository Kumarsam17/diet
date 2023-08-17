import React from 'react'
import { Link } from 'react-router-dom'
import '../stylesheets/navbar.css'

import { BiAccessibility } from "react-icons/bi";

function Navbar() {
  return (
    <nav className="navbar">
        <BiAccessibility className='icon' size={50} color='red'/>
        <div className="link-tab">

     <Link className='link' to='Home' >Home</Link>
     <Link className='link' to='Contact' >Contact Us</Link>
     <Link className='link' to='Help' >Help</Link>
        </div>
    </nav>
  )
}

export default Navbar