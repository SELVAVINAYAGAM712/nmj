import React, { useState, useEffect } from 'react';
import bg from "../Assests/bg.png";
// import npj_Png_Logo from "../Assests/sample2.png";
import diamondScroll from "../Assests/diamondscroll.png";
import divider from "../Assests/divider.png";
import { Outlet } from 'react-router-dom';
import './HeaderPage.css';
import npjPNGLogo from "../Assests/npj_Png_Logo.png";

const HeaderPage = ({ labelName, onClickAbout, onClickCustom, onClickBlog, onClickContact, onClickHome }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isShrunk, setIsShrunk] = useState(false);

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
            <div className="homeHeader-menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
              ☰
            </div>

            <ul className={`homeHeader-nav-menu ${menuOpen ? 'open' : ''}`}>
              <li className="homeHeader-nav-item" onClick={onClickHome}>Home</li>
              <li className="homeHeader-nav-item" onClick={onClickAbout}>About Us</li>
              <li className="homeHeader-nav-item" onClick={onClickCustom}>Customized Jewellery</li>
              <li className="homeHeader-nav-item" onClick={onClickBlog}>Blog</li>
              <li className="homeHeader-nav-item" onClick={onClickContact}>Contact Us</li>
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
