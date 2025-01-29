import React from 'react'
import './Navbar.css'
import nmjIcon from "../Assests/nmj_Logo.jpg"


const Navbar = () => {
  return (
    <nav className="navbar">
    <div className="navbar-left">
      <ul className="nav-links">
        <li>HOME ▼</li>
        <li>ABOUT US</li>
        <li>PAGES ▼</li>
        <li>SHOP ▼</li>
        <li>CONTACT US</li>
      </ul>
    </div>
    <div className="navbar-center">
      <img src={nmjIcon} alt="Logo" className="navbar-logo" />
    </div>
    <div className="navbar-right">
      <button className="quote-button">I WANT A QUOTE</button>
      <span className="auth-links">REGISTER | SIGN UP</span>
    </div>
  </nav>


  )
}

export default Navbar