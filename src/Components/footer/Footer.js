import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import npjPNGLogo from "../Assests/npj_Png_Logo.png";
import xtwitter from "../Assests/xtwitter.png";
import { useNavigate } from 'react-router-dom';







const Footer = () => {
  const navigate = useNavigate()

  return (
    <>
      <div className="footer-container">
        {/* Background overlay */}
        <div className="footer-bg"></div>
        <div className="footer-overlay"></div>

        {/* "India" - Positioned at the Top Center */}
        <div className="footer-title">India</div>

        {/* Content Grid */}
        <div className="footer-content">
          {/* Product Card */}
          <div className="product-card-container">
            <div className="product-card">
              <img
                src={npjPNGLogo}
                alt="18kt White Gold Wedding Ring"
                className="product-image"
              />
              {/* <h2 className="product-title">18kt White Gold</h2>
            <p className="product-subtitle">Wedding Ring For</p>
            <p className="product-price">$2,000</p> */}
              <div onClick={()=> {
                navigate('/contact_us_pages', { state: { label: 'Contact Us' } })
                window.scrollTo(0, 0); // Scroll to top
                
                }} className="buy-button">Contact Us</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="contact-info">
            {/* Contact Details */}
            <div className="contact-details">
              {/* Address Section */}
              <div className="contact-item">
                <span className="label">Address:</span>
                <div className="smallLabel">
                  <div>A3, Kothava Station Street</div>
                  <div>Chidambaram - 608 001</div>
                </div>
              </div>

              {/* Phone Section */}
              <div className="contact-item">
                <span className="label">Phone:</span>
                <div className="smallLabel">
                  <div>+91 9500514558</div>
                  <div>+91 04144 220612</div>
                </div>
              </div>

              {/* Email Section */}
              <div className="contact-item">
                <span className="label">E-mail:</span>
                <div className="smallLabel">newmeenkashijwy@gmail.com</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="social-media-bar">
      <div className="social-icons">
        <div
          className="icon-container"
          onClick={() =>
            window.open("https://www.facebook.com/share/1A5GBhEsW5/", "_blank")
          }
        >
          <FaFacebook className="icon" />
          <span className="text">Facebook</span>
        </div>

        <div
          className="icon-container"
          onClick={() =>
            window.open(
              "https://www.instagram.com/new_meenakshi_jewellery?igsh=MXY1bmF6NTlvaXJ2aw==",
              "_blank"
            )
          }
        >
          <FaInstagram className="icon" />
          <span className="text">Instagram</span>
        </div>

        <div
          className="icon-container"
          onClick={() =>
            window.open(
              "https://x.com/NMJJEWELRY1?t=hxanhuaspXV6SYttH97vAw&s=09",
              "_blank"
            )
          }
        >
          <img src={xtwitter} className="icon xtwitter-icon" alt="X" />
          <span className="text">X (Twitter)</span>
        </div>

        <div
          className="icon-container"
          onClick={() => window.open("https://wa.me/9500514558", "_blank")}
        >
          <FaWhatsapp className="icon" />
          <span className="text">WhatsApp</span>
        </div>

        <div
          className="icon-container"
          onClick={() =>
            window.open(
              "https://youtube.com/@newmeenakshijewellery9551?si=kFFzfAqmwoFCIy-z",
              "_blank"
            )
          }
        >
          <FaYoutube className="icon" />
          <span className="text">YouTube</span>
        </div>
      </div>
    </div>

    </>
  );
};

export default Footer;
