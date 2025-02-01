import React from 'react';
import diamondLogo from "../Assests/bg.png";
import npj_Png_Logo from "../Assests/sample2.png";
import divider from "../Assests/divider.png";
import { useLocation } from 'react-router-dom'

const HeaderPage = () => {
  const location = useLocation();
  const label = location.state?.label || 'Default Label';
  return (
    <div style={{ position: 'relative', width: '1500px', height: '530px' }}>

      {/* Diamond Logo */}
      <img 
        src={diamondLogo} 
        alt="Logo" 
        style={{
          height: '450px', 
          width: '1500px', 
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
          // gap:'60px',
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
          top: '250px',   // Adjust this value to position below logo
          left: '620px',  // Align with the logo
          fontSize: '52px', 
          textAlign: 'center',
          fontFamily:'serif', 
          
        }}
      >
        {label}
      </div>

       {/* NPC Logo */}
       <img 
        src={divider} 
        alt="npjLogo" 
        style={{
          height: '30px',
          width: '70px',
          marginTop: '20px',
          zIndex: 1, 
          position: 'absolute',
          top: '300px',   
          left: '680px',  
        }} 
      />

      
      
      
    </div>
  );
};

export default HeaderPage;
