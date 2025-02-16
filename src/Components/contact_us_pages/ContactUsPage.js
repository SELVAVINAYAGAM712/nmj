import React, { useState } from "react";
import HeaderPage from '../widgets/HeaderPage';
import { useNavigate } from 'react-router-dom';
import "./ContactSection.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faMapMarkerAlt, faUserTie } from "@fortawesome/free-solid-svg-icons";
import Footer from "../footer/Footer";




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
        { question: "How does the custom jewelry process work at NMJ?", answer: "From the first consultation to the final polish, we walk you through every step of your custom piece's journey." },
        { question: "Can I redesign an old piece of jewelry?", answer: "Absolutely! We love breathing new life into family heirlooms while keeping their sentimental value intact." },
        { question: "What materials can I choose from?", answer: "We offer a wide range of high-quality metals and gemstones, all sourced with care to meet your design needs." },
        { question: "How long does it take to create a custom piece?", answer: "Depending on the complexity of the design, it can take anywhere from 2 to 6 weeks. We’ll keep you updated every step of the way!" },
        { question: "Do you offer virtual consultations for custom jewelry?", answer: "Yes, whether you're near or far, we can connect online to bring your dream design to life." },
    ];


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
                        <a href="https://maps.app.goo.gl/iZjoQbq9nbfDqnAb6?g_st=iw"
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
                    <div className="Send-Mail-highlight" >Questions & answers</div>
                    <h2 className="faq-title">Frequently Asked Questions</h2>
                    <div className="Send-Mail-text">
                        Your Custom Jewelry Journey – Questions Answered
                    </div>
                    <br ></br>
                    <div className="Send-Mail-text2">
                        We understand that customizing jewelry is a deeply personal experience, and you might have a
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
