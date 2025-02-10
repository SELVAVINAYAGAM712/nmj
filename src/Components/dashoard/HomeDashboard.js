import React, { useState } from 'react';
import './HomeDashboard.css';
import npjPNGLogo from "../Assests/npj_Png_Logo.png";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import HomeCustom from '../homeCustom/HomeCustom';

const HomeDashboard = () => {
  const navigate = useNavigate()
  const [isHomeDropdownOpen, setIsHomeDropdownOpen] = useState(false);

  return (
    <>
      <motion.nav
        className="homebar"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >

        <div className="home-center">

          {/* Logo */}
          <motion.div
            className="logo-container"
          // initial={{ opacity: 0, y: -5 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={npjPNGLogo} alt="Logo" className="navbar-logo" />
          </motion.div>


          {/* Navbar List */}
          <ul className="home-links">
            {/* Home Dropdown */}
            <li
              className="dropdown"
              onMouseEnter={() => setIsHomeDropdownOpen(true)}
              onMouseLeave={() => setIsHomeDropdownOpen(false)}
            >
              HOME
              {isHomeDropdownOpen && (
                <ul className="dropdown-menu">
                  <li className="menu-item">Home Custom</li>
                  <li className="menu-item">Home Shop</li>
                </ul>
              )}
            </li>

            <li onClick={() => navigate('/widgets', { state: { label: 'About Us' } })}>ABOUT US</li>
            <li onClick={() => navigate('/widgets', { state: { label: 'Page Service' } })}>CUSTOMIZED JEWELLERY</li>
            <li>SHOP</li>
            <li>CONTACT US</li>
          </ul>



          {/* Right Section */}
          {/* <motion.div
          className="right-section"
          // initial={{ opacity: 0, y: -50 }}
          // animate={{ opacity: 1, y: 0 }}
          // transition={{ duration: 0.8, delay: 0.6 }}
        >
          <motion.button
            className="quote-button"
            // initial={{ opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, delay: 0.8 }}
          >
            I WANT A QUOTE
          </motion.button>

          <motion.span
            className="auth-links"
            // initial={{ opacity: 0, y: -50 }}
            // animate={{ opacity: 1, y: 0 }}
            // transition={{ duration: 0.8, delay: 1 }}
          >
            REGISTER | SIGN UP
          </motion.span>
        </motion.div> */}

        </div>

      </motion.nav>

      <>

        <div className="homecustom-container">
          <HomeCustom></HomeCustom>
        </div>


      </>







    </>
  );
}

export default HomeDashboard;