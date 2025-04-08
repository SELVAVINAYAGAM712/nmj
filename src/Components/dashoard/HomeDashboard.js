import React, { useState, useEffect } from 'react';
import './HomeDashboard.css';
// import npjPNGLogo from "../Assests/npj_Png_Logo.png";
import nmjName from "../Assests/nmj_name.png";
import { useNavigate } from 'react-router-dom';
import HomeCustom from '../homeCustom/HomeCustom';
import { FiMenu, FiX } from "react-icons/fi"; // Import menu icons
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

   useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  return (
    <>
      {/* <div className='dummy-content'></div> */}
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


          {/* Logo main */}
          {/* <img src={npjPNGLogo} alt="Logo" className="navbar-logo" /> */}


          {/* <div className='nmjNameDiv'  > */}

          <img src={nmjName} alt="Logo"
            className='nmjName'
          />

          {/* </div> */}


        </div>

        {
          isMobileMenuOpen
          &&
          <ul className={`mobile-menu ${isMobileMenuOpen ? "open" : "close"}`}>
            <li className="mobile-text" onClick={() => { window.scrollTo(0, 0) }}>Home</li>
            <li className="mobile-text" onClick={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}>About Us</li>
            <li className="mobile-text" onClick={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}>Customized Jewellery</li>
            <li className="mobile-text" onClick={() => navigate('/blog', { state: { label: 'Blog' } })}>Blog</li>
            <li className="mobile-text" onClick={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}>Contact Us</li>
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

// navigate('/aboutUs-page', { state: { label: 'About Us' } })
// navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}>CUSTOMIZED JEWELLERY</li>