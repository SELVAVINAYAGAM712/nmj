import React, { useEffect } from "react";
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
import bg from "../Assests/diamond2.png";
import diamond from "../Assests/diamondfull.png";
import ring from "../Assests/Engagement-Ring.png";
import Footer from '../footer/Footer';
// import blog1 from "../Assests/blog1.jpg";
// import blog2 from "../Assests/blog2.jpg";
import { motion } from "framer-motion";
import "../customized_jewl/CustomizedJewl.css"
import '../aboutUs-page/AboutUs.css';
import '../dashoard/HomeDashboard.css'

import blog_img_1 from "../Assests/blog_img_1.jpeg";
import blog_img_2 from "../Assests/blog_img_2.jpg";
// import nature_tree from "../Assests/nature_tree.webp";
import nature_tree from "../Assests/nature_tree_new.webp";

const Blog = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
      <div>
        <div className="about-as-s1-wrapper">

          {/* 1st Card  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Starts from the left
            whileInView={{ opacity: 1, x: 0 }} // Moves to original position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-as-s1-container"
          >
            <div className="customization-s2-wrapper">
              <div className="customization-s2-container">
                <div className="customization-s2-inner">


                  {/* Left Section - Image */}
                  <div className="customization-s2-left">
                    <img src={blog_img_1} alt="combineImage1" className="customization-s2-image" />
                  </div>

                  {/* Right Section - Text Content */}
                  <div className="customization-s2-right">

                    <div className="customization-s2-heading">
                      NMJ Customiz – Crafting Personalized Jewellery with a Timeless Legacy                        </div>

                    <img src={divider} alt="divider" className="customization-s2-divider" />

                    <div className="customization-s2-paragraph">
                      At New Meenakshi Jewellery (NMJ Customiz), we believe that every piece of jewelry should
                      be as unique as the person wearing it. With a timeless legacy of trust and craftsmanship, we
                      specialize in creating custom-made jewelry that transforms your vision into reality.<br />
                      <br />
                      From the first sketch to the final masterpiece, our expert artisans meticulously craft jewelry
                      that tells your story. Whether it’s a modern engagement ring, a redesigned family heirloom,
                      or a completely new vision, we ensure that each piece is a perfect blend of your imagination and
                      our expertise.
                    </div>


                  </div>

                </div>
              </div>
            </div>
          </motion.div>
          {/* 2nd card section  */}

          {/* 2nd Card  */}
          <motion.div
            initial={{ opacity: 0, y: -100 }} // Starts from the left
            whileInView={{ opacity: 1, y: 0 }} // Moves to original position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-as-s1-container"
          >
            <div className="about-as-s1-wrapper">
              {/* Left Section - Text Content */}
              <div className='about-as-s1-container' >
                <div className='about-as-s1-inner'>

                  {/* Right Section - Text Content */}
                  <div className="about-as-s1-left">

                    <div className="about-as-s1-title">
                      Are You Interested in Custom Jewellery? Let’s Create Something Special Together!                        </div>

                    <img src={divider} alt="divider" className="about-as-s1-divider" />


                    <div className="about-as-s1-paragraph">
                      At NMJ Customiz, we turn your ideas into breathtaking jewelry that reflects your unique
                      story. Whether you're dreaming of a one-of-a-kind engagement ring, a modern take on
                      traditional jewelry, or a completely original design, we’re here to make it happen.<br />
                      <br />
                      Our expert artisans work closely with you from concept to completion, ensuring that every
                      detail aligns with your vision. Let’s craft something truly special together!
                    </div>
                  </div>


                  {/* Left Section - Image */}
                  <div className="about-as-s1-right">
                    <img src={blog_img_2} alt="combineImage2" className="about-as-s1-image" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3st Card  */}
          <motion.div
            initial={{ opacity: 0, x: -100 }} // Starts from the left
            whileInView={{ opacity: 1, x: 0 }} // Moves to original position
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="about-as-s1-container"
          >
            <div className="customization-s2-wrapper">
              <div className="customization-s2-container">
                <div className="customization-s2-inner">


                  {/* Left Section - Image */}
                  <div className="customization-s2-left">
                    <img src={nature_tree} alt="combineImage1" className="customization-s2-image" />
                  </div>

                  {/* Right Section - Text Content */}
                  <div className="customization-s2-right">

                    <div className="customization-s2-heading">
                      Iyarkai Pathukappu Amaipipu                       </div>

                    <img src={divider} alt="divider" className="customization-s2-divider" />

                    <div className="customization-s2-paragraph">
                      At New Meenakshi Jewellery, we believe beauty is not just in what we create, but in what we give back.

                      Inspired by our founder Shri G. Karthikeyan, who plants over 1000+ trees every year with his friends, we proudly support a culture of caring for nature.

                      Though it’s a personal effort, this green spirit reflects the values that guide everything we do — respect, tradition, and responsibility.

                      Gold is timeless. So is our connection to the Earth. </div>


                  </div>

                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>




      {/* 3rd section  */}
      <div className="Interested-cstm-jel-banner">
        {/* Background Image */}
        <img src={bg} alt="Logo" className="Interested-cstm-jel-bg-img" />

        {/* Overlay */}
        <div className="Interested-cstm-jel-overlay"></div>

        {/* Diamond Image */}
        <img src={diamond} alt="diamond" className="Interested-cstm-jel-diamond" />

        {/* Centered Content */}
        <div className="Interested-cstm-jel-content">
          <div className="Interested-cstm-jel-heading">Interested in customized jewelry</div>
          <img src={divider} alt="divider" className="Interested-cstm-jel-divider" />
          <div className="Interested-cstm-jel-subheading">
            Visit Our Store for a personal consultation.
          </div>
          <button
            className="Interested-cstm-jel-button"
            onClick={() => navigate("/contact_us_pages", { state: { label: "Contact Us" } })}
          >
            CONTACT US
          </button>
        </div>

        {/* Ring Image */}
        <img src={ring} alt="ring" className="Interested-cstm-jel-ring" />
      </div>


      <Footer />


    </div>
  )
}

export default Blog
