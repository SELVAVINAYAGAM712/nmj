import React from "react";
import "./Footer.css";
import sparkbg from "../Assests/sparkbg.jpg";
import homeSection2imgNew from "../Assests/homeSection2imgNew.jpg"
import npjPNGLogo from "../Assests/npj_Png_Logo.png";





const Footer = () => {
  return (
    <>

      <div
        style={{
          position: "relative", // Required for absolute positioning of pseudo-element
          color: "white",
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "70vh",
          overflow: "hidden",
        }}
      >
        {/* Background overlay with brightness effect */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundImage: `url(${homeSection2imgNew})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            filter: "brightness(20%)", // Applies only to the background
            zIndex: -1, // Places it behind the content
          }}
        ></div>

        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: '#2e2a47', // Overlay color
            opacity: 0.5, // Adjust opacity to control transparency
            zIndex: -1, // Places it behind content
          }}
        ></div>

        {/* Content */}
        <div
          style={{
            maxWidth: "1000px",
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "40px",
            alignItems: "center",
            position: "relative", // Ensures content stays above background
            zIndex: 1,
          }}
        >
          {/* Product Card */}
          <div className="product-card">
            <img src={npjPNGLogo} alt="18kt White Gold Wedding Ring" className="product-image" />
            <h2 className="product-title">18kt White Gold</h2>
            <p className="product-subtitle">Wedding Ring For</p>
            <p className="product-price">$2,000</p>
            <button className="buy-button">Contact Us</button>
          </div>

          {/* Los Angeles Address */}
          <div className="address">
            <h3 className="address-title">Los Angeles</h3>
            <p>
              <span className="label">Address:</span>
              <br /> 3119 Maxwell Street
              <br /> Bloomfield
            </p>
            <p>
              <span className="label">Phone:</span>
              <br /> 860-796-7230
              <br /> 860-912-2307
            </p>
            <p>
              <span className="label">E-mail:</span>
              <br /> noemail@nodomain.com
            </p>
          </div>

          {/* Texas Address */}
          <div className="address">
            <h3 className="address-title">Texas</h3>
            <p>
              <span className="label">Address:</span>
              <br /> 114 Colonial Drive
              <br /> Bryan
            </p>
            <p>
              <span className="label">Phone:</span>
              <br /> 979-731-5860
              <br /> 979-450-6929
            </p>
            <p>
              <span className="label">E-mail:</span>
              <br /> noemail@nodomain.com
            </p>
          </div>
        </div>
      </div>

    </>
  );
};

export default Footer;


