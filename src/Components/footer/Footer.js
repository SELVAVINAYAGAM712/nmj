import React from "react";
import "./Footer.css";
import homeSection2imgNew from "../Assests/homeSection2imgNew.jpg";
import npjPNGLogo from "../Assests/npj_Png_Logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      {/* Background Overlay */}
      <div className="footer-background"></div>
      <div className="footer-overlay"></div>

      {/* "India" - Positioned at the Top Center of the Image */}
      <div className="footer-title">India</div>

      {/* Content Grid */}
      <div className="footer-content">
        {/* Product Card */}
        <div className="product-container">
          <div className="product-card">
            <img src={npjPNGLogo} alt="18kt White Gold Wedding Ring" className="product-image" />
            <h2 className="product-title">18kt White Gold</h2>
            <p className="product-subtitle">Wedding Ring For</p>
            <p className="product-price">$2,000</p>
            <button className="buy-button">Contact Us</button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="contact-container">
          <div className="contact-info">
            {/* Address Section */}
            <div className="contact-section">
              <span className="contact-label">Address:</span>
              <div className="contact-details">
                <div>A3, Kothava Station Street</div>
                <div>Chidambaram - 608 001</div>
              </div>
            </div>

            {/* Phone Section */}
            <div className="contact-section">
              <span className="contact-label">Phone:</span>
              <div className="contact-details">
                <div>+91 9500514558</div>
                <div>+91 04144 220612</div>
              </div>
            </div>

            {/* Email Section */}
            <div className="contact-section">
              <span className="contact-label">E-mail:</span>
              <div className="contact-details">newmeenkashijwy@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
