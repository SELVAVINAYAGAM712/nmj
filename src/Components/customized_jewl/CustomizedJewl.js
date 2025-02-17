import React, { useState } from "react";
import research2 from '../Assests/research2.jpg'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
import customized1 from "../Assests/customized1.jpeg";
import customized2 from "../Assests/Customized2.jpeg";
import combineImage from "../Assests/combineImage.jpeg";
import Footer from '../footer/Footer';






const CustomizedJewl = () => {
    const navigate = useNavigate()
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
                labelName="Customized Jewellery"
                onClickBlog={() => navigate('/blog', { state: { label: 'Blog' } })}
                onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
                onClickHome={() => navigate('/')}
                onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
            />

            <div>
                {/* 1st Card  */}
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
                    <div style={{
                        display: 'flex',
                        height: '100vh',
                        width: '100%',
                        backgroundColor: '#f9f8f4'
                    }}>
                        {/* Left Section - Text Content */}
                        <div style={{
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '5%',
                            gap: '25px'
                        }}>


                            <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
                                The Art of Customization
                            </div>

                            <img src={divider} alt="divider" style={{ height: '25px', width: '90px', marginTop: '20px' }} />

                            <div style={{
                                fontSize: '22px',
                                fontFamily: 'serif',
                                color: 'black',
                                lineHeight: '1.5',
                                marginTop: '20px'
                            }}>
                                At New Meenakshi Jewellery, customization isn’t just a service—it’s the soul of our craft. We
                                believe that every piece of jewelry should tell a story as unique as the person wearing it. From
                                the first sketch to the final polish, our artisans work closely with you to bring your dream designs
                                to life.
                                <br />
                                <br />
                                Our dream is simple: to create jewelry that transforms your dreams into reality, placing
                                your unique designs directly into your hands. Whether it’s transforming a family heirloom
                                into a modern masterpiece or creating a one-of-a-kind piece for a special occasion, we focus on
                                blending your vision with our craftsmanship. Our custom jewelry process ensures that every
                                detail—from gemstone selection to design intricacy—is tailored to reflect your personal style
                                and story.
                            </div>

                            <button className="section-2-button" style={{
                                fontSize: '15px',
                                marginTop: '20px',
                                height: '60px',
                                width: '190px'
                            }}>Contact Us</button>
                        </div>

                        {/* Right Section - Image */}
                        <div style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '50px'
                        }}>
                            <img src={customized1} alt="research2" style={{ height: '80%', maxWidth: '130%' }} />
                        </div>
                    </div>
                </div>
                {/* 2nd Card  */}
                <div style={{
                    display: 'flex',
                    height: '100vh',
                    width: '100%',
                    backgroundColor: '#f9f8f4',
                    alignItems: 'center',
                    gap: '20px' // Controls space between image and text
                }}>
                    {/* Left Section - Image */}
                    <div style={{
                        flex: '1',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                        <img src={customized2} alt="research2"
                            style={{ height: '80%', maxWidth: '70%', objectFit: 'contain' }} />
                    </div>

                    {/* Right Section - Text Content */}
                    <div style={{
                        flex: '1',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        padding: '5%',
                        paddingLeft: '2%' // Reduced from 10% to bring text closer
                    }}>
                        {/* <div style={{ fontSize: '38px', fontFamily: 'serif', color: '#b98d58', fontWeight: 'bold' }}>
            Our Services
        </div> */}

                        <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', fontWeight: 'bold', marginBottom: '10%' }}>
                            Crafting Your Vision: The Heart of NMJ Customization
                        </div>

                        {/* Divider */}
                        <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginBottom: '10%' }} />

                        {/* Paragraph Text */}
                        <div style={{
                            fontSize: '22px',
                            fontFamily: 'serif',
                            color: 'black',
                            lineHeight: '1.5',
                            marginBottom: '20%'
                        }}>
                            At New Meenakshi Jewellery, customization isn’t just a service—it’s the soul of our craft. We
                            believe that every piece of jewelry should tell a story as unique as the person wearing it. From
                            the first sketch to the final polish, our artisans work closely with you to bring your dream designs
                            to life.<br /><br />
                            Our dream is simple: to create jewelry that transforms your dreams into reality, placing
                            your unique designs directly into your hands. Whether it’s transforming a family heirloom
                            into a modern masterpiece or creating a one-of-a-kind piece for a special occasion, we focus on
                            blending your vision with our craftsmanship. Our custom jewelry process ensures that every
                            detail—from gemstone selection to design intricacy—is tailored to reflect your personal style
                            and story.
                        </div>
                    </div>
                </div>

                {/* 3rd Card  */}
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
                    <div style={{
                        display: 'flex',
                        height: '100vh',
                        width: '100%',
                        backgroundColor: '#f9f8f4'
                    }}>
                        {/* Left Section - Text Content */}
                        <div style={{
                            flex: '1',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            padding: '5%',
                            gap: '25px'
                        }}>




                            {/* <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#b98d58' }}>
                                Customized Savings for Your Dream Jewelry
                            </div> */}

                            <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
                                Turn Your Savings into Timeless Jewelry with NMJ Customized
                            </div>

                            <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />

                            <div style={{
                                fontSize: '22px',
                                fontFamily: 'serif',
                                color: 'black',
                                lineHeight: '1.5',
                                marginTop: '20px'
                            }}>
                                At NMJ Customized, we believe that your dream jewelry should be within reach, not just a
                                wish. That’s why we’ve introduced a unique Six-Jar Savings Scheme—a simple and rewarding
                                way to save smart and buy big.

                                <div>
                                    ✔ Save for 11 months consistently.<br />
                                    ✔ In the 12th month, enjoy a 9% bonus on your total savings!<br />
                                    ✔ Use your savings + bonus to purchase custom-designed gold or silver jewelry.<br />
                                    ✔ Choose from ₹1,000 to ₹25,000 per month—designed to suit every budget.<br />
                                    ✔ Exclusive gifts on your first deposit!<br />


                                    With NMJ Customized, your savings turn into handcrafted elegance, ensuring you own a
                                    jewelry piece that tells your unique story.
                                    Start your savings journey today and create your dream jewelry with us!
                                </div>
                            </div>

                            {/* <button className="quote-button-aboutUs" style={{
                                fontSize: '15px',
                                marginTop: '20px',
                                height: '60px',
                                width: '190px'
                            }}>Read More</button> */}


                        </div>

                        {/* Right Section - Image */}
                        <div style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '50px'
                        }}>
                            <img src={combineImage} alt="research2" style={{ height: '80%', maxWidth: '180%' }} />
                        </div>
                    </div>
                </div>

                {/* 4th Card  */}

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
            </div>

            <Footer />

        </div>
    )
}

export default CustomizedJewl
