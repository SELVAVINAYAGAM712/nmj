import React from 'react';
import diamondLogo from "../Assests/bg.png";
import npj_Png_Logo from "../Assests/sample2.png";
import diamondScroll from "../Assests/diamondscroll.png";
import divider from "../Assests/divider.png";
import { Outlet,useLocation } from 'react-router-dom'
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
          position: 'relative'
        }} 
      />
      
      {/* NPC Logo */}
      <img 
        src={npj_Png_Logo} 
        alt="npjLogo" 
        style={{
          height: '80px',
          width: '100px',
          marginTop: '20px',
          zIndex: 1, 
          position: 'absolute',
          top: '20px',   
          left: '150px',  
        }} 
      />


      
    
      <div 
        style={{
          position: 'absolute', 
          top: '50px',    
          right: '80px',  
          zIndex: 2,      
          display: 'flex', 
          alignItems: 'center',
          fontWeight:400,
          fontFamily:'serif', 
        }}
      >
        <ul className="home-links" style={{ padding: 0, marginLeft: 0, listStyle: 'none', display: 'flex',gap:'30px', }}>
          <li style={{ marginRight: '20px' }}>HOME PAGES ▼</li>
          <li style={{ marginRight: '20px' }}>ABOUT US</li>
          <li style={{ marginRight: '20px' }}>PAGES ▼</li>
          <li style={{ marginRight: '20px' }}>SHOP ▼</li>
          <li style={{ marginRight: '20px' }}>CONTACT US</li>
          <li style={{ marginRight: '20px' ,color: '#b98d58'}}>REGISTER | SIGN UP ▼</li>
        </ul>
      </div>

      <div 
        style={{
          position: 'absolute',
          top: '250px',   
          left: '750px',  
          fontSize: '52px', 
          textAlign: 'center',
          fontFamily:'serif', 
          
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
          zIndex: 1, 
          position: 'absolute',
          top: '300px',   
          left: '810px', 
        }} 
      />


       <img 
        src={diamondScroll} 
        alt="diamond" 
        style={{
          height: '90px',
          width: '100px',
          marginTop: '20px',
          zIndex: 1, 
          position: 'absolute',
          top: '400px',   
          left: '790px', 
          

        }} 
      />

      {/* Page Content */}
      <div style={{ marginTop: '30px', padding: '20px' }}>
        <Outlet />
      </div>

      





      
      
      
    </div>
  );
};

export default HeaderPage;
