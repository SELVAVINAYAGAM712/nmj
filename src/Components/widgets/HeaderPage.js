import React from 'react';
import diamondLogo from "../Assests/bg.png";
import npj_Png_Logo from "../Assests/sample2.png";
import diamondScroll from "../Assests/diamondscroll.png";
import divider from "../Assests/divider.png";
import { Outlet, useLocation } from 'react-router-dom'
import { motion } from "framer-motion";

const HeaderPage = () => {
  const location = useLocation();
  const label = location.state?.label || 'Default Label';

  return (
    <div style={{ position: 'relative' }}>

      {/* Diamond Logo */}
      <img 
        src={diamondLogo} 
        alt="Logo" 
        style={{
          height: '450px', 
          width: '100%', 
          zIndex: 0, 
          objectFit: 'cover',
        }} 
      />
      
      {/* Main Container */}
      <div 
        style={{
          position: 'absolute', 
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          display: 'flex',
          flexDirection: 'column', 
          justifyContent: 'flex-start', 
          alignItems: 'center', 
          zIndex: 2,
        }}
      >

        {/* Container for Logo and Nav Items in the same line */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between', // Ensures space between logo and nav items
          width: '100%',
          padding: '20px 50px', // Adds some padding to space out the items
        }}>
          {/* NPC Logo */}
          <img 
            src={npj_Png_Logo} 
            alt="npjLogo" 
            style={{
              height: '80px',
              width: '100px',
              marginLeft:'10%'
            }} 
          />

          {/* Navigation Links */}
          <div 
            style={{
              display: 'flex', 
              gap: '30px', 
              fontWeight: 400, 
              fontFamily: 'serif', 
              fontSize: '16px',
              alignItems: 'center',
            }}
          >
            <ul className="home-links" style={{ padding: 40, marginLeft: 0, listStyle: 'none', display: 'flex', gap: '30px' }}>
              <li>HOME</li>
              <li>ABOUT US</li>
              <li>CUSTOMIZED JEWELLERY</li>
              <li>BLOG</li>
              <li>CONTACT US</li>
              {/* <li style={{ color: '#b98d58' }}>REGISTER | SIGN UP ▼</li> */}
            </ul>
          </div>
        </div>

        {/* Page Title */}
        <div 
          style={{
            fontSize: '52px', 
            textAlign: 'center', 
            fontFamily: 'serif', 
            marginTop: '30px',
          }}
        >
          {label}
        </div>

        {/* Divider Logo */}
        <img 
          src={divider} 
          alt="divider" 
          style={{
            height: '30px',
            width: '70px',
            marginTop: '20px',
          }} 
        />

        {/* Diamond Scroll Logo */}
        <img 
          src={diamondScroll} 
          alt="diamond" 
          style={{
            height: '90px',
            width: '100px',
            marginTop: '10%',
          }} 
        />
      </div>

      {/* Page Content */}
      <div style={{ marginTop: '30px', padding: '20px' }}>
        <Outlet />
      </div>
    </div>
  );
};

export default HeaderPage;
