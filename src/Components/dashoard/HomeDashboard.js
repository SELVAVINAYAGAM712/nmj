import React from 'react'
import './HomeDashboard.css'
import npjPNGLogo from "../Assests/npj_Png_Logo.png"


const HomeDashboard = () => {
  return (
    <nav className="homebar">
      <div className="home-center">
        <ul className="home-links">
          <li>HOME ▼</li>
          <li>ABOUT US</li>
          <li>PAGES ▼</li>
          <li>SHOP ▼</li>
          <li>CONTACT US</li>
        </ul>
        <img src={npjPNGLogo} alt="Logo" className="navbar-logo" />
        <button className="quote-button">I WANT A QUOTE</button>
        <span className="auth-links">REGISTER | SIGN UP</span>
      </div>
    </nav>
  )
}

export default HomeDashboard