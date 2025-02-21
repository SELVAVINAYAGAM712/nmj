import React, { useEffect, useState } from "react";
import research2 from '../Assests/research2.jpg'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
import bg from "../Assests/diamond2.png";
import diamond from "../Assests/diamondfull.png";
import ring from "../Assests/Engagement-Ring.png";
import Footer from '../footer/Footer';
import combineImage1 from "../Assests/combineImage1.jpeg";
import combineImage2 from "../Assests/combineImage2.jpeg";
import { motion } from 'framer-motion';


const Blog = () => {
  const navigate = useNavigate()
  const [isOnclickReadMore, setReadMore] = useState(false)

  return (
    <div>

      <HeaderPage
        labelName="Blog"
        onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
        onClickHome={() => navigate('/')}
        onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
        onClickCustom={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}
      />
      {/* 1st card section  */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          backgroundColor: '#f9f8f4',
          padding: '5%',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
          }}
        >
          {/* Left Section - Image */}
          <motion.div
            initial={{ x: '-100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '5%',
            }}
          >
            <img
              src={combineImage1}
              alt="combineImage1"
              style={{ width: '80%', maxWidth: '400px' }}
            />
          </motion.div>

          {/* Right Section - Text Content */}
          <motion.div
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              textAlign: 'left',
              padding: '5%',
            }}
          >
            <h2 style={{ fontSize: '30px', fontFamily: 'serif', color: '#b98d58' }}>
              NMJ Customiz – Crafting Personalized Jewelry with a Timeless Legacy
            </h2>

            <img src={divider} alt="divider" style={{ height: '25px', width: '70px', margin: '20px 0' }} />

            <p style={{ fontSize: '18px', fontFamily: 'serif', color: 'black', lineHeight: '1.5' }}>
              At New Meenakshi Jewellery (NMJ Customiz), we believe that every piece of jewelry should
              be as unique as the person wearing it. With a timeless legacy of trust and craftsmanship,
              we specialize in creating custom-made jewelry that transforms your vision into reality.
            </p>
          </motion.div>
        </div>

        {/* Media Queries */}
        <style>
          {`
          @media (max-width: 768px) {
            div {
              flex-direction: column;
              text-align: center;
            }
            img {
              width: 100%;
              max-width: 300px;
            }
          }
        `}
        </style>
      </div>

      {/* 2nd card section  */}
      <div>
        {/* 2nd Card  */}
        <div className="jewelry-section">
          <div className="content-wrapper">
            {/* Left Section - Text Content */}
            <motion.div
              initial={{ x: '-100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="text-content"
            >
              <h2>Are You Interested in Custom Jewelry? Let’s Create Something Special Together!</h2>
              <img src={divider} alt="divider" className="divider" />
              <p>
                At NMJ Customiz, we turn your ideas into breathtaking jewelry that reflects your unique
                story. Whether you're dreaming of a one-of-a-kind engagement ring, a modern take on
                traditional jewelry, or a completely original design, we’re here to make it happen.
              </p>
            </motion.div>

            {/* Right Section - Image */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 1 }}
              className="image-content"
            >
              <img src={combineImage2} alt="combineImage2" className="image" />
            </motion.div>
          </div>

          {/* Media Queries */}
          <style>
            {`
          .jewelry-section {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            width: 100%;
            background-color: #f9f8f4;
            padding: 5%;
          }
          .content-wrapper {
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: center;
            width: 100%;
          }
          .text-content {
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: left;
            padding: 5%;
          }
          .text-content h2 {
            font-size: 30px;
            font-family: serif;
            color: #b98d58;
          }
          .text-content p {
            font-size: 18px;
            font-family: serif;
            color: black;
            line-height: 1.5;
          }
          .divider {
            height: 25px;
            width: 70px;
            margin: 20px 0;
          }
          .image-content {
            flex: 1;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 5%;
          }
          .image {
            width: 80%;
            max-width: 400px;
          }
          
          @media (max-width: 1024px) {
            .content-wrapper {
              flex-direction: column;
              text-align: center;
            }
            .text-content, .image-content {
              flex: none;
              width: 100%;
              padding: 5%;
            }
            .image {
              max-width: 300px;
            }
          }
          
          @media (max-width: 768px) {
            .text-content h2 {
              font-size: 24px;
            }
            .text-content p {
              font-size: 16px;
            }
            .image {
              width: 100%;
              max-width: 250px;
            }
          }
        `}
          </style>
        </div>
      </div>


      {/* 3rd section  */}
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        {/* Background Image */}
        <img
          src={bg}
          alt="Logo"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
            opacity: 1,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f3ece3",
            opacity: 0.6,
            zIndex: 1,
          }}
        ></div>

        {/* Diamond Image - Positioned on the Left */}
        <img
          src={diamond}
          alt="diamond"
          style={{
            position: "absolute",
            top: "50%",
            left: "2%", // Adjust to position it more to the left
            transform: "translateY(-50%)",
            height: "120px",
            width: "30%",
            objectFit: "contain",
            opacity: 1,
            zIndex: 2, // Higher z-index to appear above the overlay
          }}
        />

        {/* Centered Content */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%", // Adjust width if needed
            maxWidth: "800px",
            textAlign: "center",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <div style={{ fontSize: "38px", fontFamily: "serif", color: "black" }}>
            Interested In Our Course?
          </div>

          <img src={divider} alt="divider" style={{ height: "25px", width: "70px", marginTop: "20px" }} />

          <div
            style={{
              fontSize: "22px",
              fontFamily: "serif",
              color: "black",
              lineHeight: "1.5",
              marginTop: "20px",
            }}
          >
            Visit Our Store for a personal consultation.          </div>

          <button
            className="section-2-button"
            onClick={() => {
              navigate('/contact_us_pages', { state: { label: 'Contact Us' } })
              window.scrollTo(0, 0); // Scroll to top
            }}
            style={{
              fontSize: "15px",
              marginTop: "20px",
              height: "60px",
              width: "190px",
            }}
          >
            CONTACT US
          </button>
        </div>

        {/* Ring Image - Positioned on the Left */}
        <img
          src={ring}
          alt="ring"
          style={{
            position: "absolute",
            top: "85%",
            right: "2%", // Adjust to position it more to the left
            transform: "translateY(-50%)",
            height: "120px",
            width: "30%",
            objectFit: "contain",
            opacity: 1,
            zIndex: 2, // Higher z-index to appear above the overlay
          }}
        />
      </div>

      <Footer />


    </div>
  )
}

export default Blog
