import React, { useState, useEffect, } from "react";
import HeaderPage from '../widgets/HeaderPage';
import { useNavigate } from 'react-router-dom';
import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faUserTie, faGlobe, } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";
import { motion } from "framer-motion";



const ContactUsPage = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqData = [
    { question: "How do I care for my jewellery long-term?", answer: "To maintain your jewellery's brilliance, store it in a dry, soft-lined box to prevent scratches. Clean it gently with a soft cloth or a jewellery cleaning solution, and avoid exposure to harsh chemicals, perfumes, and extreme moisture." },
    { question: "What are my customization options?", answer: "Yes! We specialize in custom-made jewellery that reflects your personality and vision. Choose from custom engraving for names, initials, or special messages, personalized designs crafted from scratch with our expert jewelers, and a selection of certified Gold Hallmark-certified and Diamond-certified materials." },
    { question: "How do I find the correct size for my jewellery?", answer: "Finding the perfect size is important. We offer a size guide to help you measure your rings and bracelets, as well as professional assistance in-store to ensure the perfect fit." },
    { question: "Can I pay in installments with a credit card?", answer: "  Yes! We offer easy installment options through major credit cards and financing partnersmaking it convenient for you to own your dream jewellery." },
    { question: "What is your return policy?", answer: "We stand by the quality of our jewellery. Our return policy includes exchanges for manufacturing defects within a specific period. Custom orders are non-returnable due to their personalized nature. All returns and exchanges must be in their original condition with receipts." },
  ];

  const animationVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  return (
    <div>

      <HeaderPage
        labelName="Contact Us"
        onClickBlog={() => navigate('/blog', { state: { label: 'Blog' } })}
        onClickHome={() => navigate('/')}
        onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
        onClickCustom={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}
      />

      <>

        <div className="contact-container">
          <motion.div className="contact-item" initial="hidden" animate="visible" variants={animationVariants}>
            <FontAwesomeIcon icon={faGlobe} className="contact-icon" />
            <h1>Visit Our Online Store</h1>
            {/* <p className="contact-in-text">Logo for Website</p> */}
            <p className="contact-in-text">Your favorite jewellery is just a click away</p>
            <a href="https://www.shopnmj.com/"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer">
              shopnmj.com
            </a>
          </motion.div>

          <motion.div className="contact-item" initial="hidden" animate="visible" variants={animationVariants}>
            <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
            <h1>Shop Location</h1>
            <p className="contact-in-text">A3, Kothava Station Street</p>
            <p className="contact-in-text">Chidambaram - 608 001</p>
            <a href="https://maps.app.goo.gl/C8EmVJ5fYLS1qYr89?g_st=aw"
              className="contact-link"
              target="_blank"
              rel="noopener noreferrer">
              SEE LOCATION
            </a>
          </motion.div>

          <motion.div className="contact-item" initial="hidden" animate="visible" variants={animationVariants}>
            <FontAwesomeIcon icon={faUserTie} className="contact-icon" />
            <h1>Contact Expert</h1>
            <a href="tel:+919500514558" className="contact-link">
              +91 950-051-4558
            </a>
            <br />
            <a href="tel:+914144220612" className="contact-link">041-442-20612</a>
            <br />
            <p className="contact-link">CONTACT US</p>
          </motion.div>
        </div>


      </>

      <div className="Send-Mail-container">
        {/* Right Side - Text Section */}
        <div className="Send-Mail-info">
          <div className="Send-Mail-highlight">Welcome Back in Store</div>
          <div className="Send-Mail-title">Complete The Form Below <br /> With Your Inquiry</div>
          {/* <div className="Send-Mail-divider"></div> */}
          <div className="Send-Mail-text">
            Thank you for your interest in contacting us. We are here to assist
            you in any way we can, and in order for us to do so, we kindly ask
            that you please fill out the form below with your inquiry.
          </div>
        </div>
      </div>


      <div className="faq-container">

        <div className="faq-row-container">
          <div className="Send-Mail-highlight" >Questions & answers</div>
          <h2 className="faq-title">Frequently Asked Questions</h2>
          <div className="Send-Mail-text">
            Your Custom jewellery Journey – Questions Answered
          </div>
          <br ></br>
          <div className="Send-Mail-text2">
            We understand that customizing jewellery is a deeply personal experience, and you might have a
            few questions
            along the way. At New Meenakshi Jewellery, we’re here to make the process
            smooth and enjoyable. Whether you're curious about design options, materials, or the timeline,
            our FAQ section is designed to give you all the answers you need.
          </div>
        </div>

        <div className="faq-list">
          {faqData.map((item, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? "open" : ""}`}>
              <div className={`faq-question ${openIndex === index ? "active" : ""}`} onClick={() => toggleFAQ(index)}>
                <span>{item.question}</span>
                <span className="faq-icon">{openIndex === index ? "−" : "+"}</span>
              </div>
              <div className={`faq-answer-container ${openIndex === index ? "expanded" : ""}`}>
                <div className="faq-answer">{item.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default ContactUsPage;
