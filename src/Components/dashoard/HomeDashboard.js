import React, { useState, useEffect } from 'react';
import './HomeDashboard.css';
import nmjName from "../Assests/nmj_name.png";
import { useNavigate } from 'react-router-dom';
import HomeCustom from '../homeCustom/HomeCustom';
import { FiMenu, FiX } from "react-icons/fi";
import { useMediaQuery } from "react-responsive";
import '../widgets/HeaderPage.css'


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

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      <nav className="navbar">

        <div className="navbar-container">

          {/* left side more icon */}
          {/* Mobile Menu Icon (Only visible on mobile) */}
          <div
            className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
            onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FiX /> : <FiMenu />}
          </div>

          {/* Desktop Navigation */}
          <div>
            {
              !isMobileMenuOpen &&
              <ul className={'nav-menu'}>
                <li className="nav-item" onClick={() => { window.scrollTo(0, 0) }}>Home</li>
                <li className="nav-item" onClick={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}>About Us</li>
                <li className="nav-item" onClick={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}>Customized Jewellery</li>
                <li className="nav-item" onClick={() => navigate('/blog', { state: { label: 'Blog' } })}>Blog</li>
                <li className="nav-item" onClick={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}>Contact Us</li>
              </ul>
            }
          </div>

          <img src={nmjName} alt="Logo"
            className='nmjName'
          />
        </div>

        {
          isMobileMenuOpen
          &&
          <ul className={`homeHeader-nav-menu ${isMobileMenuOpen ? "open" : "close"}`}>
            <li className="homeHeader-nav-item" onClick={() => { window.scrollTo(0, 0) }}>Home</li>
            <li className="homeHeader-nav-item" onClick={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}>About Us</li>
            <li className="homeHeader-nav-item" onClick={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}>Customized Jewellery</li>
            <li className="homeHeader-nav-item" onClick={() => navigate('/blog', { state: { label: 'Blog' } })}>Blog</li>
            <li className="homeHeader-nav-item" onClick={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}>Contact Us</li>
          </ul>
        } 
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
