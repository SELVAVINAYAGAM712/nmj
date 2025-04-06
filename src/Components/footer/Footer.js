import React from "react";
import "./Footer.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaYoutube } from "react-icons/fa";
import npjPNGLogo from "../Assests/npj_Png_Logo.png";
import google_Play from "../Assests/google_Play.png";
import app_store_image from "../Assests/app_store.svg";
import xtwitter from "../Assests/xtwitter.png";
import { useNavigate } from 'react-router-dom';


const Footer = () => {
  const navigate = useNavigate()

  return (
    <>
      <div class="main-content">
        {/* <div className="footer-container"> */}
        {/* Background overlay */}
        {/* <div className="footer-bg"></div> */}
        {/* <div className="footer-overlay"></div> */}

        {/* Footer row */}
        <div className="footer-wrapper">
          <div className="footer-bg" />
          <div className="footer-overlay" />

          <div className="footer-content">
            {/* Column 1: NMJ Logo + Contact inside a centered box */}
            <div className="footer-column column-logo">
              <div className="logo-card">
                <img src={npjPNGLogo} alt="NMJ Logo" className="logo" />
                <div className="contact-box">
                  <h3>Need Help?</h3>
                  <button
                    className="contact-button"
                    onClick={() => {
                      navigate("/contact_us_pages", {
                        state: { label: "Contact Us" },
                      });
                      window.scrollTo(0, 0);
                    }}
                  >
                    Contact Us
                  </button>
                </div>
              </div>
            </div>

            {/* Column 2: Address, Phone, Email */}
            <div className="footer-column column-info">
              <div className="info-item">
                <h4>Address</h4>
                <p>
                  A3, Kothava Station Street<br />
                  Chidambaram - 608 001
                </p>
              </div>
              <div className="info-item">
                <h4>Phone</h4>
                <p>
                  +91 9500514558<br />
                  +91 04144 220612
                </p>
              </div>
              <div className="info-item">
                <h4>Email</h4>
                <p>newmeenkashijwy@gmail.com</p>
              </div>
            </div>

            {/* Column 3: App Store Links */}
            <div className="footer-column column-apps">
              <h4>Get Our App</h4>
              <div className="store-links">
                <a
                  href="https://play.google.com/store/apps/details?id=com.logiology.nmjdigigold"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={google_Play} alt="Google Play" className="store-badge" />
                </a>
                <a
                  href="https://apps.apple.com/in/app/nmj-digital-gold/id6743396347"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={app_store_image} alt="App Store" className="store-badge" />
                </a>
              </div>
            </div>
          </div>
        </div>


        {/* </div> */}


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
      </div>
    </>
  );
};

export default Footer;
