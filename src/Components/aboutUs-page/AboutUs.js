
import React, { useEffect, useState, useRef } from "react";
import divider from "../Assests/divider.png";
import cardsNew from "../Assests/cards.png";
import whiteScreen from "../Assests/whitebg1.jpg";
import lady from "../Assests/ladygoldabt.jpg";
import nmj_Logo from "../Assests/nmj_Logo.jpg";
import { useNavigate } from 'react-router-dom';
import rathnaswami from "../Assests/rathnaswami.jpeg";
import ganeshan from "../Assests/ganeshan.jpg";
import karthikeyan from "../Assests/karthikeyan.jpeg";
import maheswaran from "../Assests/meheswaran.jpeg";
import HeaderPage from '../widgets/HeaderPage';
import Footer from "../footer/Footer";
import './AboutUs.css'; // Import the CSS file
import { motion } from "framer-motion";

const AboutUs = () => {
  const navigate = useNavigate()
  const [dotPosition, setDotPosition] = useState(0);
  const [isOnclickReadMore, setReadMore] = useState(false)
  const sectionRef = useRef(null);


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

  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 } // Adjust threshold as needed
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);


  return (

    <>
      <HeaderPage
        labelName="About Us"
        onClickBlog={() => navigate('/blog', { state: { label: 'Blog' } })}
        onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
        onClickHome={() => navigate('/')}
        onClickCustom={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}

      />

      <div ref={sectionRef}>

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          backgroundColor: '#f9f8f4',
          margin: '0',
          padding: '0',
          marginTop: '-5%'
        }}>
          {/* 1st Card Section */}
          {/* ============= section 1============== */}
          <div className="container">
            {/* Left Section - Text Content */}
            <div className="left-section">
              <div className="legacy-title">OUR LEGACY</div>

              <div className="legacy-heading">
                A Timeless Journey of Trust and Craftsmanship Since 1903
              </div>

              <img src={divider} alt="divider" className="divider-image" />

              <div className="legacy-description">
                Our story began in 1903 with <span className="bold-text">Thiru Chelam Swami Chettiar,</span>
                <br />
                who laid the foundation of our jewelry business in Thiru.
                <br />
                His commitment to honesty, tradition, and fine craftsmanship
                <br />
                quickly earned the trust of the local community.

                {isOnclickReadMore && (
                  <>
                    <br />
                    <br />
                    Our vision at NMJ is to make personalized jewelry accessible and meaningful for everyone.
                    We believe that jewelry should not only adorn but also tell a story—your story.
                    With our expertise in gemology and a passion for craftsmanship, we bring your ideas to life,
                    creating pieces that reflect your unique personality and milestones.
                    Whether it’s a modern twist on a family heirloom, a bespoke engagement ring, or a piece
                    designed from scratch, we are dedicated to making your dream jewelry a reality.
                  </>
                )}
              </div>

              <button className="read-more-button" onClick={() => setReadMore(!isOnclickReadMore)}>
                Read More
              </button>
            </div>

            {/* Right Section - Image */}
            <div className="right-section">
              <img src={nmj_Logo} alt="research2" className="nmj-logo" />
            </div>
          </div>
          {/* ====================================== */}



          {/* ================cart 1====================== */}

          {/* 2nd Card Section (No Top Gap) */}
          <div className="card1-container">
            <div className="card1-inner-container">
              {/* Card 1 */}
              <div className="card1-box">
                <img src={cardsNew} alt="card1" className="card1-image" />
                <img src={whiteScreen} alt="overlay" className="card1-overlay" />
                <img src={rathnaswami} alt="craft" className="card1-craft-image" />
                <div className="card1-title">Thiru Rathina Swami Chettiar</div>
                <img src={divider} alt="divider" className="card1-divider" />
                <div className="card1-description">
                  This dedication was passed on to Thiru Rathina Swami<br />
                  Chettiar, who expanded the business with integrity,<br />
                  ensuring that each piece of jewelry reflected the values of our family.
                </div>
              </div>

              {/* Card 2 */}
              <div className="card1-box">
                <img src={cardsNew} alt="card2" className="card1-image" />
                <img src={whiteScreen} alt="overlay" className="card1-overlay" />
                <img src={ganeshan} alt="research" className="card1-craft-image" />
                <div className="card1-title">Thiru Ganesan Chettiar</div>
                <img src={divider} alt="divider" className="card1-divider" />
                <div className="card1-description">
                  In 1977, Thiru Ganesan Chettiar founded Sri Meenakshi Jewellery, continuing the legacy and
                  bringing a new era of excellence.<br />
                  • 115 years of tradition, trust, and unmatched craftsmanship.<br />
                  • Generations dedicated to preserving the art of jewelry making.
                </div>
              </div>
            </div>
          </div>


          {/* ================cart 2====================== */}

          {/* 3rd Card Section (No Top Gap) */}
          <div className="card2-container">
            <div className="card2-wrapper">
              {/* Card 1 */}
              <div className="card2-card">
                <img src={cardsNew} alt="card1" className="card2-bg" />
                <img src={whiteScreen} alt="overlay" className="card2-overlay" />
                <img src={karthikeyan} alt="craft" className="card2-image" />
                <div className="card2-title">Thiru G. Karthikeyan</div>
                <img src={divider} alt="divider" className="card2-divider" />
                <div className="card2-description">
                  In 1996, Thiru G. Karthikeyan took the helm, blending traditional craftsmanship with modern
                  techniques. Under his leadership, New Meenakshi Jewellery continued to grow, becoming a
                  symbol of trust and quality in the jewelry industry. His passion for innovation and attention to
                  detail ensured that NMJ stayed ahead of trends while maintaining its rich heritage.
                </div>
              </div>

              {/* Card 2 */}
              <div className="card2-card">
                <img src={cardsNew} alt="card2" className="card2-bg" />
                <img src={whiteScreen} alt="overlay" className="card2-overlay-small" />
                <img src={maheswaran} alt="research" className="card2-image-small" />
                <div className="card2-title">G.K. Mageshwaran</div>
                <img src={divider} alt="divider" className="card2-divider-small" />
                <div className="card2-description">
                  Under the leadership of G.K. Mageshwaran, NMJ is set to redefine personalized jewelry. His
                  vision is simple yet powerful, to transform people’s dream jewelry into reality, placing their
                  unique designs directly in their hands. Mageshwaran is passionate about making customized
                  jewelry accessible, ensuring every piece reflects the personal stories and aspirations of our
                  customers.
                </div>
              </div>
            </div>
          </div>

          {/* ================cart 3====================== */}

          {/* 4th Title Section  */}
          <>
            <div className="section3-title">Our Vision</div>
            <div className="section3-divider">
              <img src={divider} alt="divider" className="section3-divider-img" />
            </div>
            <div className="section3-subtitle">
              Empowering You with Customized Jewelry
            </div>
          </>

          {/* ================cart 4====================== */}

          {/* 5th Card Section  */}
          <div className="section4-container">
            {/* Left Section - Image */}
            <div className="section4-left-section">
              <img src={lady} alt="research2" className="section4-lady-image" />
            </div>

            {/* Middle Section - Vertical Line & Moving Dot */}
            <div className="section4-middle-section">
              <div className="section4-divider">
                <div className="section4-moving-dot" style={{ top: `${dotPosition}px` }}></div>
              </div>
            </div>

            {/* Right Section - Text Content */}
            <div className="section4-right-section">
              <div className="section4-title">Serving Our Community with Heart and Heritage</div>
              <div className="section4-description">
                For over a century, NMJ has been more than just a jewelry store—we’re a part of your special moments. From
                marriages and milestones to festivals and family traditions, we’ve had the honor of crafting pieces that bring
                joy to generations of customers. We proudly serve our local community and customers worldwide, offering
                personalized experiences and trustworthy service.
                <br />
                <br />• 115 years of serving customers with integrity and care.
                <br />• Join our NMJ family and let us be a part of your story.
              </div>
            </div>
          </div>


          {/* 6th Card Section  */}
          <div className="section5-container">
            {/* Left Section - Text Content */}
            <div className="section5-left">
              <h1 className="section5-left-title">
                G.K. Mageshwaran’s Vision: Turning Your Dreams into Gold
              </h1>
              <p className="section5-left-text">
                At NMJ, we believe that jewelry should be as unique as the person wearing it. Under G.K.
                Mageshwaran’s leadership, we’re not just making jewelry—we’re bringing your dreams to life.
                His vision is simple yet profound: to take the designs you’ve always imagined and turn them into
                stunning, tangible pieces you can cherish forever.
                <br /><br />
                Whether it’s a custom engagement ring, a revamped heirloom, or a one-of-a-kind necklace,
                Mageshwaran blends his expertise in gemology with an eye for detail, ensuring every piece tells
                a personal story. With NMJ Customized, we’re putting creativity and craftsmanship in your
                hands—because your jewelry should be a reflection of you. 
              </p>
            </div>

            {/* Middle Section - Scrollable Line */}
            <div className="section5-middle">
              <div className="section5-scroll-line">
                <div className="section5-scroll-dot" style={{ top: `${dotPosition}px` }}></div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div className="section5-right">
              <img src={maheswaran} alt="research2" />
            </div>
          </div>



        </div>
      </div>


      <Footer />
    </>








  )
}

export default AboutUs
