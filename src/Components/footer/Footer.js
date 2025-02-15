import React from "react";
import "./Footer.css";
import homeSection2imgNew from "../Assests/homeSection2imgNew.jpg";
import npjPNGLogo from "../Assests/npj_Png_Logo.png";

const Footer = () => {
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
            <h2 className="product-title">18kt White Gold</h2>
            <p className="product-subtitle">Wedding Ring For</p>
            <p className="product-price">$2,000</p>
            <button className="buy-button">Contact Us</button>
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
    </>
  );
};

export default Footer;
