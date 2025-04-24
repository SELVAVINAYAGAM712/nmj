import React, { useEffect } from 'react'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
// import customized1 from "../Assests/customized1.jpeg";
// import customized2 from "../Assests/Customized2.jpeg";
import combineImage from "../Assests/combineImage.jpeg";
import Footer from '../footer/Footer';
import { motion } from "framer-motion";
import './CustomizedJewl.css'
import '../aboutUs-page/AboutUs.css';
import '../dashoard/HomeDashboard.css'


import art_customization_img from "../Assests/art_customization_img.png";
import crafting_your_vision_img from "../Assests/crafting_your_vision_img.png";



const CustomizedJewl = () => {
    const navigate = useNavigate()

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>

            <HeaderPage
                labelName="Customized Jewellery"
                onClickBlog={() => navigate('/blog', { state: { label: 'Blog' } })}
                onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
                onClickHome={() => navigate('/')}
                onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
            />
            <div>

                <div className="customization-s2-wrapper">

                    <motion.div
                        initial={{ opacity: 0, x: -100 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="about-as-s1-container"
                    >
                        <div className="about-as-s1-wrapper">
                            {/* Left Section - Text Content */}
                            <div className='about-as-s1-container' >
                                <div className='about-as-s1-inner'>

                                    <div className="about-as-s1-left">
                                        <div className="about-as-s1-title">The Art of Customization</div>
                                        <img src={divider} alt="divider" className="about-as-s1-divider" />
                                        <div className="about-as-s1-paragraph">
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

                                        <button onClick={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })} className="section-2-button">Contact Us</button>
                                    </div>

                                    {/* Right Section - Image */}
                                    <div className="about-as-s1-right">
                                        <img src={art_customization_img} alt="customized jewelry" className="about-as-s1-image" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>

                    {/* 2nd Card  */}
                    <motion.div
                        initial={{ opacity: 0, y: -100 }} // Starts from the left
                        whileInView={{ opacity: 1, y: 0 }} // Moves to original position
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="about-as-s1-container"
                    >

                        <div className="customization-s2-wrapper">
                            <div className="customization-s2-container">
                                <div className="customization-s2-inner">

                                    {/* Left Section - Image */}
                                    <div className="customization-s2-left">
                                        <img src={crafting_your_vision_img} alt="customization" className="customization-s2-image" />
                                    </div>

                                    {/* Right Section - Text */}
                                    <div className="customization-s2-right">
                                        <div className="customization-s2-heading">
                                            Crafting Your Vision: The Heart of NMJ Customization
                                        </div>

                                        <img src={divider} alt="divider" className="customization-s2-divider" />

                                        <div className="customization-s2-paragraph">
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
                            </div>
                        </div>


                    </motion.div>

                    {/* 3rd Card  */}
                    <motion.div
                        initial={{ opacity: 0, x: -100 }} // Starts from the left
                        whileInView={{ opacity: 1, x: 0 }} // Moves to original position
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="about-as-s1-container">
                        {/* 1st Card Section */}

                        <div className="about-as-s1-wrapper">

                            <div className="about-as-s1-container">
                                <div className="about-as-s1-inner">

                                    {/* Left Section - Text Content */}
                                    <div className="about-as-s1-left">

                                        <div className="about-as-s1-heading">
                                            Turn Your Savings into Timeless Jewellery with New Meenakshi Jewellery Customized
                                        </div>

                                        <img src={divider} alt="divider" className="about-as-s1-divider" />

                                        <div className="about-as-s1-paragraph">
                                            Your dream jewelry is now easier to own than ever. With our trusted Digital Gold Savings Plan, you can save monthly, earn rewards, and convert your savings into beautifully crafted gold or silver jewelry.
                                            <div>
                                                ✔ Save in digital gold every month for 11 months.<br />
                                                ✔ Get a 9% bonus in the 12th month — directly added to your gold savings.<br />
                                                ✔ Redeem your gold to create custom jewelry of your choice.<br />
                                                ✔ Start with as little as ₹1,000 per month — flexible plans up to ₹25,000.<br />
                                                ✔ Bonus: Enjoy an exclusive welcome gift when you start your savings!<br />
                                                Start your journey today — it’s safe, simple & secure.
                                                {/* <p> */}
                                                Download Now on{" "}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.logiology.nmjdigigold"
                                                    style={{ color: "#222C63", display: "inline-block", textDecoration: "none", fontWeight: '600' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Google Play
                                                </a>{" "}
                                                and {" "}
                                                <a
                                                    href="https://apps.apple.com/in/app/nmj-digital-gold/id6743396347"
                                                    style={{ color: "#222C63", display: "inline-block", textDecoration: "none", fontWeight: '600' }}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    App Store
                                                </a> {" "}
                                                {/* </p> */}
                                                With New Meenakshi Jewellery, your savings don’t just grow they grow with you
                                            </div>
                                        </div>
                                    </div>

                                    {/* Right Section - Image */}
                                    <div className="about-as-s1-right">
                                        <img src={combineImage} alt="research2" className="about-as-s1-image" />
                                    </div>
                                </div>


                            </div>

                        </div>
                    </motion.div>

                </div>

                <Footer />
            </div>


        </>
    )
}

export default CustomizedJewl
