import React, { useEffect } from 'react'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
import customized1 from "../Assests/customized1.jpeg";
import customized2 from "../Assests/Customized2.jpeg";
import combineImage from "../Assests/combineImage.jpeg";
import Footer from '../footer/Footer';
import { motion } from "framer-motion";
import './CustomizedJewl.css'






const CustomizedJewl = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

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
                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="cstm-s1-motion-wrapper"
                >
                    <div className="cstm-s1-wrapper">
                        {/* 1st Card Section */}
                        <div className="cstm-s1-section">
                            {/* Left Section - Text Content */}
                            <div className="cstm-s1-text-content">
                                <div className="cstm-s1-heading">
                                    The Art of Customization
                                </div>

                                <img src={divider} alt="divider" className="cstm-s1-divider" />

                                <div className="cstm-s1-description">
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

                                <button className="cstm-s1-button">Contact Us</button>
                            </div>

                            {/* Right Section - Image */}
                            <div className="cstm-s1-image-container">
                                <img src={customized1} alt="customized-jewelry" className="cstm-s1-image" />
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* 2nd Card  */}
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="cstm-s2-motion-wrapper"
                >
                    <div className="cstm-s2-container">
                        {/* Left Section - Image */}
                        <div className="cstm-s2-image-container">
                            <img src={customized2} alt="research2" className="cstm-s2-image" />
                        </div>

                        {/* Right Section - Text */}
                        <div className="cstm-s2-text-container">
                            <div className="cstm-s2-heading">
                                Crafting Your Vision: The Heart of NMJ Customization
                            </div>

                            <img src={divider} alt="divider" className="cstm-s2-divider" />

                            <div className="cstm-s2-paragraph">
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
                </motion.div>
                {/* 3rd Card  */}

                <motion.div
                    initial={{ opacity: 0, x: -100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="cstm-s3-motion-wrapper"
                >
                    <div className="cstm-s3-container">
                        {/* 1st Card Section */}
                        <div className="cstm-s3-card-section">
                            {/* Left Section - Text Content */}
                            <div className="cstm-s3-left">
                                <div className="cstm-s3-heading">
                                    Turn Your Savings into Timeless Jewelry with NMJ Customized
                                </div>

                                <img src={divider} alt="divider" className="cstm-s3-divider" />

                                <div className="cstm-s3-description">
                                    At NMJ Customized, we believe that your dream jewelry should be within reach, not just a wish. That’s why we’ve introduced a unique Six-Jar Savings Scheme—a simple and rewarding way to save smart and buy big.
                                    <div>
                                        ✔ Save for 11 months consistently.<br />
                                        ✔ In the 12th month, enjoy a 9% bonus on your total savings!<br />
                                        ✔ Use your savings + bonus to purchase custom-designed gold or silver jewelry.<br />
                                        ✔ Choose from ₹1,000 to ₹25,000 per month—designed to suit every budget.<br />
                                        ✔ Exclusive gifts on your first deposit!<br />
                                        <br />
                                        With NMJ Customized, your savings turn into handcrafted elegance, ensuring you own a jewelry piece that tells your unique story. Start your savings journey today and create your dream jewelry with us!
                                    </div>
                                </div>
                            </div>

                            {/* Right Section - Image */}
                            <div className="cstm-s3-right">
                                <img src={combineImage} alt="research2" className="cstm-s3-image" />
                            </div>
                        </div>
                    </div>
                </motion.div>


            </div>

            <Footer />

        </div>
    )
}

export default CustomizedJewl
