
import React, { useEffect, useState } from "react";
import divider from "../Assests/divider.png";
import cardsNew from "../Assests/cards.png";
// import whiteScreen from "../Assests/whitebg1.jpg";
import ringhd from "../Assests/ringhd.jpg";
import nmj_Logo from "../Assests/nmj_Logo.jpg";
import { useNavigate } from 'react-router-dom';
import rathnaswami from "../Assests/rathnaswami.jpeg";
import ganeshan from "../Assests/ganeshan.jpg";
import karthikeyan from "../Assests/karthikeyan.jpeg";
import maheswaran from "../Assests/meheswaran.jpeg";
import HeaderPage from '../widgets/HeaderPage';
import { motion } from "framer-motion";
import Footer from "../footer/Footer";
import './AboutUs.css';
import '../dashoard/HomeDashboard.css'

const AboutUs = () => {
  const navigate = useNavigate()
  const [dotPosition, setDotPosition] = useState(0);
  const [isOnclickReadMore, setReadMore] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleMouseMove = (event) => {
      let container = document.querySelector(".container");
      if (!container) return;

      let containerRect = container.getBoundingClientRect();
      let mouseY = event.clientY - containerRect.top; // Mouse position relative to container

      // Ensure dot stays within bounds
      let newTop = Math.max(0, Math.min(mouseY, containerRect.height - 80));

      setDotPosition(newTop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);


  return (

    <>
      <HeaderPage
        labelName="About Us"
        onClickBlog={() => navigate('/blog', { state: { label: 'Blog' } })}
        onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
        onClickHome={() => navigate('/')}
        onClickCustom={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}
        onClickAbout={() => {
          // navigate('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <div>

        {/* 
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          backgroundColor: '#f9f8f4',
          margin: '0',
          padding: '0',
          marginTop: '-5%'
        }}> */}

        <div className="about-as-s1-wrapper">

          {/* 1st Card Section */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-as-s1-container"
          >
            <div className="about-as-s1-wrapper">
              <div className="about-as-s1-container">
                <div className="about-as-s1-inner">
                  {/* Left Side */}
                  <div className="about-as-s1-left">
                    <div className="about-as-s1-title">OUR LEGACY</div>

                    <div className="about-as-s1-heading">
                      A Timeless Journey of Trust and Craftsmanship Since 1903
                    </div>

                    <img src={divider} alt="divider" className="about-as-s1-divider" />

                    <div className="about-as-s1-paragraph">
                      Our story began in 1903 with
                      <span style={{ fontWeight: "bold", color: '#b88649' }}> Thiru Chelam Swami Chettiar,</span><br />
                      who laid the foundation of our jewelry business in Thiru.<br />
                      His commitment to honesty, tradition, and fine craftsmanship<br />
                      quickly earned the trust of the local community.

                      {isOnclickReadMore && (
                        <>
                          <br /><br />
                          Our vision at NMJ is to make personalized jewelry accessible and meaningful for everyone. We believe that jewelry should not only adorn but also tell a story—your story...
                        </>
                      )}
                    </div>

                    <button
                      className="section-2-button"
                      onClick={() => setReadMore(!isOnclickReadMore)}
                    >
                      {isOnclickReadMore ? 'Read Less' : 'Read More'}
                    </button>
                  </div>

                  {/* Right Side */}
                  <div className="about-as-s1-right">
                    <img src={nmj_Logo} alt="nmj logo" className="about-as-s1-image" />
                  </div>
                </div>
              </div>
            </div>

          </motion.div>


          {/* 2nd Card Section (No Top Gap) */}
          <div className="about-as-s2">
            <div className="about-as-s2-wrapper">

              {/* Card 1 */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="about-card"
              >
                <div className="about-card">
                  <div className="about-card-inner">
                    <img src={cardsNew} alt="card-bg" className="card-bg-img" />
                    <div className="card-content">
                      <img src={rathnaswami} alt="face" className="overlay-face-img" />
                      <div className="card-title">Thiru Rathina Swami Chettiar</div>
                      <img src={divider} alt="divider" className="divider-img" />
                      <div className="card-description">
                        This dedication was passed on to Thiru Rathina Swami Chettiar, who expanded the business with integrity, ensuring each jewelry piece reflected our family values.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="about-card"
              >
                <div className="about-card">
                  <div className="about-card-inner">
                    <img src={cardsNew} alt="card-bg" className="card-bg-img" />
                    <div className="card-content">
                      <img src={ganeshan} alt="face" className="overlay-face-img" />
                      <div className="card-title">Thiru Ganesan Chettiar</div>
                      <img src={divider} alt="divider" className="divider-img" />
                      <div className="card-description">
                        In 1977, Thiru Ganesan Chettiar founded Sri Meenakshi Jewellery,<br />
                        continuing the legacy with 115 years of tradition,<br />
                        trust, and unmatched craftsmanship.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="about-card"
              >
                <div className="about-card">
                  <div className="about-card-inner">
                    <img src={cardsNew} alt="card-bg" className="card-bg-img" />
                    <div className="card-content">
                      <img src={karthikeyan} alt="face" className="overlay-face-img" />
                      <div className="card-title">Thiru G. Karthikeyan</div>
                      <img src={divider} alt="divider" className="divider-img" />
                      <div className="card-description">
                        In 1996, Thiru G. Karthikeyan blended traditional craftsmanship<br />
                        with modern techniques, ensuring New Meenakshi Jewellery<br />
                        remained a symbol of trust and innovation.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Card 4 */}
              <motion.div
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="about-card"
              >
                <div className="about-card">
                  <div className="about-card-inner">
                    <img src={cardsNew} alt="card-bg" className="card-bg-img" />
                    <div className="card-content">
                      <img src={maheswaran} alt="face" className="overlay-face-img" />
                      <div className="card-title">G.K. Mageshwaran</div>
                      <img src={divider} alt="divider" className="divider-img" />
                      <div className="card-description">
                        Under G.K. Mageshwaran’s leadership, NMJ is redefining<br />
                        personalized jewelry — crafting pieces that reflect personal<br />
                        stories and aspirations of our customers.
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>


          {/* 3th Title Section  */}
          <div className="about-as-s3-wrapper">
            <div className="about-as-s3-heading">Our Vision</div>
            <div className="about-as-s3-divider">
              <img src={divider} alt="divider" className="about-as-s3-divider-img" />
            </div>
            <div className="about-as-s3-subtext">Empowering You with Customized Jewelry</div>
          </div>


          {/* 4th Card Section  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Starts from the left
            whileInView={{ opacity: 1, x: 0 }} // Moves to original position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              height: '100vh',
              width: '100%',
              backgroundColor: '#f9f8f4',
              marginTop: '50px'
            }}
          >
            <div style={{
              display: 'flex',
              height: '100vh',
              width: '100%',
              backgroundColor: '#f9f8f4',
            }}>

              {/* Left Section - Image */}
              <div style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginLeft: '5%',
                marginBottom: '10%' // Reduced from 15%
              }}>
                <img src={ringhd} alt="research2" style={{ height: '65%', maxWidth: '90%' }} />
              </div>

              {/* Middle Section - Vertical Line & Moving Dot */}
              <div
                style={{
                  flex: 0.05, // Adjusted to reduce space
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginLeft: "3px", // Reduced from 7px
                  marginBottom: "10%" // Reduced from 18%
                }}
              >
                <div
                  className="container"
                  style={{
                    position: "relative",
                    height: "50vh", // Reduced from 60vh
                    width: "5px",
                    backgroundColor: "#f3ece5",
                  }}
                >
                  <div
                    style={{
                      position: "absolute",
                      width: "20px",
                      height: "20px",
                      backgroundColor: "black",
                      borderRadius: "50%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      top: `${dotPosition}px`,
                    }}
                  ></div>
                </div>
              </div>

              {/* Right Section - Text Content */}
              <div style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                padding: '3%', // Reduced from 5%
                marginBottom: '10%', // Reduced from 15%
                marginRight: '30px' // Reduced from 50px
              }}>
                <div style={{ fontSize: '38px', fontFamily: 'serif', color: '#2c2c2c', fontWeight: 'bold' }}>
                  Serving Our Community with Heart and Heritage
                </div>

                <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#2c2c2c', marginTop: '10px', lineHeight: '1.5' }}>
                  For over a century, NMJ has been more than just a jewelry store—we’re a part of your special
                  moments. From marriages and milestones to festivals and family traditions, we’ve had the honor
                  of crafting pieces that bring joy to generations of customers. We proudly serve our local
                  community and customers worldwide, offering personalized experiences and trustworthy service.
                  <br /><br />

                  • 115 years of serving customers with integrity and care.<br />
                  • Join our NMJ family and let us be a part of your story
                </div>
              </div>
            </div>
          </motion.div>


          {/* 5th Card Section  */}
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Starts from the left
            whileInView={{ opacity: 1, y: 0 }} // Moves to original position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            style={{
              display: 'flex',
              // height: '100vh',
              width: '100%',
              backgroundColor: '#f9f8f4',
              marginTop: '50px'
            }}
          >
            <div style={{
              display: 'flex',
              height: '100vh',
              width: '100%',
              backgroundColor: '#f9f8f4',
              marginTop: '-20%', // Adjusted to maintain consistency
              marginLeft: '6%'
            }}>

              {/* Left Section - Text Content */}
              <div style={{
                flex: '1',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start', // Left-align content
                padding: '3%', // Reduced from 5% for better spacing
              }}>
                <div style={{ fontSize: '38px', fontFamily: 'serif', color: '#2c2c2c', fontWeight: 'bold' }}>
                  G.K. Mageshwaran’s Vision: Turning Your Dreams into Gold
                </div>

                <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#2c2c2c', marginTop: '28px', lineHeight: '1.5' }}>
                  At NMJ, we believe that jewelry should be as unique as the person wearing it. Under G.K.
                  Mageshwaran’s leadership, we’re not just making jewelry—we’re bringing your dreams to life.
                  His vision is simple yet profound: to take the designs you’ve always imagined and turn them into
                  stunning, tangible pieces you can cherish forever.
                  <br /><br />
                  Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nec ultrices dui sapien eget mi.
                  Diam sit amet nisl suscipit. Porttitor eget dolor morbi non.
                </div>
              </div>

              {/* Middle Section - Scrollable Line */}
              <div style={{
                flex: 0.05, // Reduce spacing
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginRight: "30px", // Reduced from 38px for better alignment
              }}>
                <div className="container" style={{
                  position: 'relative',
                  height: '50vh', // Reduced from 60vh
                  width: '5px',
                  backgroundColor: '#f3ece5',
                }}>
                  <div style={{
                    position: 'absolute',
                    width: '20px',
                    height: '20px',
                    backgroundColor: 'black',
                    borderRadius: '50%',
                    left: '50%',
                    transform: 'translateX(-50%)',
                    top: `${dotPosition}px`,
                  }}></div>
                </div>
              </div>

              {/* Right Section - Image */}
              <div style={{
                flex: '1',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginRight: '8%', // Reduced spacing from 10%
                height: '100%',
              }}>
                <img src={maheswaran} alt="research2" style={{ height: '65%', maxWidth: '120%' }} />
              </div>

            </div>
          </motion.div>


        </div>
        <Footer />

      </div>
    </>








  )
}

export default AboutUs
