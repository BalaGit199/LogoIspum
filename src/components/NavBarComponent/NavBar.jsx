import React from 'react'
import './navbar.css'
import logoImg from '../../assets/Logo.png'
function NavBar() {
  return (
    <div className='nav-bar-mainContainer'>
       <div className="nav-container">
       <div className="logocontainer">
           <img src={logoImg} alt="LOGO" />
        </div>
        <div className="nav-list">
            <div className='list'>Home</div>
            <div className='list'>Start Helping</div>
            <div className='list'>About Us</div>
        </div>
        <div className="contact">
            <button>Contact Us</button>
        </div>
       </div>
    </div>
  )
}

export default NavBar