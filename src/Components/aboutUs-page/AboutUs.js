
import React, { useEffect, useState } from "react";
import divider from "../Assests/divider.png";
import cardsNew from "../Assests/cards.png";
import { useNavigate } from 'react-router-dom';
import ganeshan from "../Assests/ganeshan.jpg";
import HeaderPage from '../widgets/HeaderPage';
import { motion } from "framer-motion";
import Footer from "../footer/Footer";
import timeless_img from "../Assests/timeless_img.jpg";
import rathnaswami_new from "../Assests/rathnaswami_new.webp";
import karthikeyan from "../Assests/karthikeyan_new.JPG";
import serving_img from "../Assests/serving_img.jpg";
import meheswaran_new from "../Assests/meheswaran_new.webp";
import meheswaran_new1 from "../Assests/meheswaran_new1.webp";
import './AboutUs.css';
import '../dashoard/HomeDashboard.css';



const AboutUs = () => {
  const navigate = useNavigate()
  const [dotPositions, setDotPositions] = useState([0, 0]); // One for each line
  const [isOnclickReadMore, setReadMore] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const containers = document.querySelectorAll(".about-as-s4-line, .about-as-s5-line");

      const newPositions = Array.from(containers).map((container) => {
        const containerRect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if container is within viewport
        const isVisible = containerRect.top < windowHeight && containerRect.bottom > 0;

        if (!isVisible) return 0; // Don't animate if not visible

        const scrollProgress = Math.max(
          0,
          Math.min(1, 1 - containerRect.top / windowHeight)
        );

        const dotMaxOffset = container.offsetHeight - 20; // assuming 20px dot height
        return scrollProgress * dotMaxOffset;
      });

      setDotPositions(newPositions);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial trigger
    return () => window.removeEventListener("scroll", handleScroll);
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
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />

      <div>
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
                    <img src={timeless_img} alt="nmj logo" className="about-as-s1-image" />
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
                      <img src={rathnaswami_new} alt="face" className="overlay-face-img" />
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
                      <img src={meheswaran_new} alt="face" className="overlay-face-img" />
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
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-as-s4-wrapper"
          >
            <div className="about-as-s4-inner">

              {/* Left Section */}
              <div className="about-as-s4-left">
                <img src={serving_img} alt="research2" />
              </div>

              {/* Middle Section - Line and Dot */}
              <div className="about-as-s4-middle">
                <div className="about-as-s4-line">
                  <div
                    className="about-as-s4-dot"
                    // style={{ top: `${dotPosition}px` }}
                    style={{ top: `${dotPositions[0] || 0}px` }}
                  ></div>
                </div>
              </div>

              {/* Right Section */}
              <div className="about-as-s4-right">
                <div className="about-as-s4-title">
                  Serving Our Community with Heart and Heritage
                </div>
                <div className="about-as-s4-text">
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
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-as-s5-wrapper"
          >
            <div className="about-as-s5-inner">

              {/* Left Section - Text */}
              <div className="about-as-s5-left">
                <div className="about-as-s5-title">
                  G.K. Mageshwaran’s Vision: Turning Your Dreams into Gold
                </div>
                <div className="about-as-s5-text">
                  At NMJ, we believe that jewelry should be as unique as the person wearing it. Under G.K.
                  Mageshwaran’s leadership, we’re not just making jewelry—we’re bringing your dreams to life.
                  His vision is simple yet profound: to take the designs you’ve always imagined and turn them into
                  stunning, tangible pieces you can cherish forever.
                  <br /><br />
                  Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nec ultrices dui sapien eget mi.
                  Diam sit amet nisl suscipit. Porttitor eget dolor morbi non.
                </div>
              </div>

              {/* Middle Section - Line + Dot */}
              <div className="about-as-s5-middle">
                <div className="about-as-s5-line">
                  <div
                    className="about-as-s5-dot"
                    // style={{ top: `${dotPosition}px` }}
                    style={{ top: `${dotPositions[1]}px` }}
                  ></div>
                </div>
              </div>

              {/* Right Section - Image */}
              <div className="about-as-s5-right">
                <img src={meheswaran_new1} alt="research2" className="about-as-s5-img" />
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
