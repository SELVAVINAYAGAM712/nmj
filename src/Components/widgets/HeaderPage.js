import React, { useState, useEffect } from 'react';
import bg from "../Assests/bg.png";
// import npj_Png_Logo from "../Assests/sample2.png";
import diamondScroll from "../Assests/diamondscroll.png";
import divider from "../Assests/divider.png";
import { Outlet } from 'react-router-dom';
import './HeaderPage.css';
import npjPNGLogo from "../Assests/npj_Png_Logo.png";
import { FiMenu, FiX } from "react-icons/fi";
import '../dashoard/HomeDashboard.css';





const HeaderPage = ({ labelName, onClickAbout, onClickCustom, onClickBlog, onClickContact, onClickHome }) => {
  const [isShrunk, setIsShrunk] = useState(false);

  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      const shouldShrink = window.scrollY > 50;
      setIsShrunk(shouldShrink);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const getClassName = (itemName) => {
    return labelName === itemName ? 'active' : '';
  };

  return (
    <>
      {/* Fixed Header */}
      <div className={`header-container ${isShrunk ? 'shrink' : ''}`}>
        {/* Background Image */}
        <img src={bg} alt="Logo" className="header-bg" />

        {/* Overlay Container */}
        <div className="header-overlay">
          {/* Nav Container */}
          <div className="header-nav">


            {/* Sticky labelName */}
            <div className={`header-labelName ${isShrunk ? 'visible' : ''}`}>
              {labelName}
            </div>

            <div className="header-right">
              {/* <div className="homeHeader-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
                ☰
              </div> */}

              <div
                className={`menu-icon ${isMobileMenuOpen ? "open" : ""}`}
                onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
                {isMobileMenuOpen ? <FiX /> : <FiMenu />}
              </div>

              <ul className={`homeHeader-nav-menu ${isMobileMenuOpen ? 'open' : ''}`}>
                <li
                  className={`homeHeader-nav-item ${getClassName('Home')}`}
                  onClick={onClickHome}
                >
                  Home
                </li>
                <li
                  className={`homeHeader-nav-item ${getClassName('About Us')}`}
                  onClick={onClickAbout}
                >
                  About Us
                </li>
                <li
                  className={`homeHeader-nav-item ${getClassName('Customized Jewellery')}`}
                  onClick={onClickCustom}
                >
                  Customized Jewellery
                </li>
                <li
                  className={`homeHeader-nav-item ${getClassName('Blog')}`}
                  onClick={onClickBlog}
                >
                  Blog
                </li>
                <li
                  className={`homeHeader-nav-item ${getClassName('Contact Us')}`}
                  onClick={onClickContact}
                >
                  Contact Us
                </li>
              </ul>
            </div>



            <img onClick={onClickHome}
              src={npjPNGLogo} alt="npjLogo" className="header-logo" />

          </div>

          {/* Center Title & Divider */}
          {!isShrunk && (
            <>
              <div className="header-title">{labelName}</div>
              <img src={divider} alt="divider" className="header-divider" />
              <img src={diamondScroll} alt="diamond" className="header-scroll-logo" />
            </>
          )}
        </div>

        {/* Page Content */}
        {/* <div className="header-content">
        <Outlet />
      </div> */}
      </div>

      {/* Page Content */}
      <div className="header-content">
        <Outlet />
      </div>
    </>
  );
};

export default HeaderPage;
