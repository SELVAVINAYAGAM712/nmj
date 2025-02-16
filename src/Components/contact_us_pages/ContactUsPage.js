import React, { useState } from "react";
import HeaderPage from '../widgets/HeaderPage';
import { useNavigate } from 'react-router-dom';
import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";




const ContactUsPage = () => {
    const navigate = useNavigate()

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const validateForm = () => {
        let newErrors = {};
        if (!formData.name.trim()) newErrors.name = "Name is required";
        if (!formData.email.trim()) newErrors.email = "Email is required";
        if (!formData.message.trim()) newErrors.message = "Message is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            alert("Message Sent Successfully!");
            setFormData({ name: "", email: "", message: "" });
        }
    };

    const [openIndex, setOpenIndex] = useState(null);

    const toggleFAQ = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const faqData = [
        { question: "HOW TO CARE FOR JEWELRY LONG-TERM?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo." },
        { question: "CUSTOMIZABLE JEWELRY? OPTIONS?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "HOW DO I FIND THE CORRECT SIZE FOR MY JEWELRY?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "CAN I PAY IN INSTALLMENTS WITH A CREDIT CARD?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
        { question: "WHAT'S YOUR RETURN POLICY?", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
    ];


    return (
        <div>

            <HeaderPage
                labelName="Contact Us"
                onClickBlog={() => navigate('/blog', { state: { label: 'Blog' } })}
                onClickHome={() => navigate('/')}
                onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
                onClickCustom={()=> navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}                
            />

            <>

                <div className="contact-container">
                    <div className="contact-item">
                        <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
                        <h1>Contact Email</h1>
                        <p className="contact-in-text">newmeenkashijwy@gmail.com</p>
                        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=newmeenkashijwy@gmail.com"
                            className="contact-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            SEND EMAIL
                        </a>
                    </div>

                    <div className="contact-item">
                        <FontAwesomeIcon icon={faMapMarkerAlt} className="contact-icon" />
                        <h1>Shop Location</h1>
                        <p className="contact-in-text">A3, Kothava Station Street</p>
                        <p className="contact-in-text">Chidambaram - 608 001</p>
                        <a  href="https://maps.app.goo.gl/iZjoQbq9nbfDqnAb6?g_st=iw"
                            className="contact-link"
                            target="_blank"
                            rel="noopener noreferrer">
                            SEE LOCATION
                        </a>
                    </div>


                    <div className="contact-item">
                        <FontAwesomeIcon icon={faUserTie} className="contact-icon" />
                        <h1>Contact Expert</h1>
                        <a href="tel:+919500514558" className="contact-link">

                            +91 950-051-4558
                        </a>
                        <br />

                        <a href="tel:+914144220612" className="contact-link">041-442-20612</a>
                        <br />

                        <p href="tel:+919500514558" className="contact-link">
                            CONTACT US
                        </p>
                    </div>

                </div>


            </>

            <div className="Send-Mail-container">
                {/* Left Side - Form */}
                {/* <div className="Send-Mail-form">
                    <form onSubmit={handleSubmit}>
                        <input
                            type="text"
                            name="name"
                            placeholder="Name"
                            value={formData.name}
                            onChange={handleChange}
                            className="Send-Mail-input"
                        />
                        {errors.name && <p className="Send-Mail-error">{errors.name}</p>}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            className="Send-Mail-input"
                        />
                        {errors.email && <p className="Send-Mail-error">{errors.email}</p>}

                        <textarea
                            name="message"
                            placeholder="Message"
                            value={formData.message}
                            onChange={handleChange}
                            className="Send-Mail-input Send-Mail-textarea"
                        />
                        {errors.message && <p className="Send-Mail-error">{errors.message}</p>}

                        <button type="submit" className="Send-Mail-button">
                            SEND MESSAGE
                        </button>
                    </form>
                </div> */}

                {/* Right Side - Text Section */}
                <div className="Send-Mail-info">
                    <p className="Send-Mail-highlight">Welcome Back in Store</p>
                    <h2 className="Send-Mail-title">Complete The Form Below <br /> With Your Inquiry</h2>
                    <div className="Send-Mail-divider"></div>
                    <p className="Send-Mail-text">
                        Thank you for your interest in contacting us. We are here to assist
                        you in any way we can, and in order for us to do so, we kindly ask
                        that you please fill out the form below with your inquiry.
                    </p>
                </div>
            </div>


            <div className="faq-container">
               
                <div className="faq-row-container">
                    <p >Questions & answers</p>
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <div className="Send-Mail-text">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus,  <br />luctus nec ullamcorper mattis, pulvinar dapibus leo.
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


        </div>
    );
}

export default ContactUsPage;
