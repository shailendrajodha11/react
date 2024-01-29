import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='container'>
        <div className='logo'>
            <img src='https://pngimg.com/d/bmw_logo_PNG19712.png' alt='Porsche_logo'/>
        </div>
        <div className='right_part'>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Performance</a></li>
                <li><a href="#">Culture</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar