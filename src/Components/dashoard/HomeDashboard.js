import React, { useState, useEffect } from 'react';
import './HomeDashboard.css';
import npjPNGLogo from "../Assests/npj_Png_Logo.png";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import HomeCustom from '../homeCustom/HomeCustom';
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
// import { FiMenu } from "react-icons/fi"; // Import hamburger icon
import { useMediaQuery } from "react-responsive";



const HomeDashboard = () => {
  const navigate = useNavigate()
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 768 });

  // Automatically close the mobile menu when switching to web view
  useEffect(() => {
    if (!isMobile) {
      setMobileMenuOpen(false);
    }
  }, [isMobile]);


  return (
    <>

      <nav className="navbar">
        <div className="navbar-container">
          {/* Logo */}
          <img src={npjPNGLogo} alt="Logo" className="navbar-logo" />

          {/* Desktop Navigation */}
          <ul className={`nav-menu ${isMobileMenuOpen ? "mobile-active" : ""}`}>
            <li className="nav-item" onClick={() => { }}>Home</li>
            <li className="nav-item" onClick={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}>About Us</li>
            <li className="nav-item" onClick={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}>Customized Jewellery</li>
            <li className="nav-item" onClick={() => { }}>Blog</li>
            <li className="nav-item" onClick={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}>Contact Us</li>
          </ul>

          {/* Mobile Menu Icon (Only visible on mobile) */}
          <div className="menu-icon" onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <ul className="mobile-menu">
            <li className="nav-item" onClick={() => { }}>Home</li>
            <li className="nav-item" onClick={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}>About Us</li>
            <li className="nav-item" onClick={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}>Customized Jewellery</li>
            <li className="nav-item" onClick={() => { }}>Blog</li>
            <li className="nav-item" onClick={() => { }}>Contact Us</li>
          </ul>
        )}
      </nav>

      <>
        <div className="homecustom-container">
          <HomeCustom />
        </div>
      </>

    </>
  );
}

export default HomeDashboard;

// navigate('/aboutUs-page', { state: { label: 'About Us' } })
// navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}>CUSTOMIZED JEWELLERY</li>