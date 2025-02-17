// import React from 'react'
import React, { useEffect, useRef, useState } from 'react';
import research2 from '../Assests/research2.jpg'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
import customized1 from "../Assests/customized1.jpeg";
import customized2 from "../Assests/Customized2.jpeg";
import combineImage from "../Assests/combineImage.jpeg";
import Footer from '../footer/Footer';
import './CustomizedJewl.css'





const CustomizedJewl = () => {
    const navigate = useNavigate()

    const sectionTextRef = useRef(null);
    const sectionImageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (entry.isIntersecting) {
                    setIsVisible(true); // Trigger the animation when the section is in view
                }
            },
            { threshold: 0.5 } // 50% of the element must be visible
        );

        if (sectionTextRef.current && sectionImageRef.current) {
            observer.observe(sectionTextRef.current);
            observer.observe(sectionImageRef.current);
        }

        return () => {
            if (sectionTextRef.current && sectionImageRef.current) {
                observer.unobserve(sectionTextRef.current);
                observer.unobserve(sectionImageRef.current);
            }
        };
    }, []);


    const leftSectionRef = useRef(null);
    const rightSectionRef = useRef(null);
    const [inViewLeft, setInViewLeft] = useState(false);
    const [inViewRight, setInViewRight] = useState(false);

    useEffect(() => {
        const options = {
            root: null, // defaults to viewport
            threshold: 0.5, // 50% of the element should be in view
        };

        const observerLeft = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInViewLeft(true);
            }
        }, options);

        const observerRight = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setInViewRight(true);
            }
        }, options);

        if (leftSectionRef.current) {
            observerLeft.observe(leftSectionRef.current);
        }

        if (rightSectionRef.current) {
            observerRight.observe(rightSectionRef.current);
        }

        return () => {
            if (leftSectionRef.current) {
                observerLeft.unobserve(leftSectionRef.current);
            }
            if (rightSectionRef.current) {
                observerRight.unobserve(rightSectionRef.current);
            }
        };
    }, []);


    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const [leftVisible, setLeftVisible] = useState(false);
    const [rightVisible, setRightVisible] = useState(false);

    useEffect(() => {
        const options = {
            rootMargin: '0px',
            threshold: 0.5,
        };

        const leftObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setLeftVisible(true);
                leftObserver.disconnect(); // Stop observing after the animation has been triggered
            }
        }, options);

        const rightObserver = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setRightVisible(true);
                rightObserver.disconnect(); // Stop observing after the animation has been triggered
            }
        }, options);

        if (leftRef.current) {
            leftObserver.observe(leftRef.current);
        }

        if (rightRef.current) {
            rightObserver.observe(rightRef.current);
        }

        // Cleanup observers on component unmount
        return () => {
            leftObserver.disconnect();
            rightObserver.disconnect();
        };
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
                <div className="section1-container">
                    <div className="section1-main">
                        {/* Left Section - Text Content */}
                        <div
                            ref={sectionTextRef}
                            className={`section1-text ${isVisible ? 'animate-text' : ''}`}
                        >
                            <div className="section1-title">The Art of Customization</div>
                            <img src={divider} alt="divider" className="section1-divider" />
                            <div className="section1-description">
                                At New Meenakshi Jewellery, customization isn’t just a service—it’s the soul of our craft. We believe that every piece of jewelry should tell a story as unique as the person wearing it. From the first sketch to the final polish, our artisans work closely with you to bring your dream designs to life.
                                <br />
                                <br />
                                Our dream is simple: to create jewelry that transforms your dreams into reality, placing your unique designs directly into your hands. Whether it’s transforming a family heirloom into a modern masterpiece or creating a one-of-a-kind piece for a special occasion, we focus on blending your vision with our craftsmanship. Our custom jewelry process ensures that every detail—from gemstone selection to design intricacy—is tailored to reflect your personal style and story.
                            </div>
                            <button className="section1-button">Contact Us</button>
                        </div>

                        {/* Right Section - Image */}
                        <div
                            ref={sectionImageRef}
                            className={`section1-image-container ${isVisible ? 'animate-image' : ''}`}
                        >
                            <img src={customized1} alt="customized jewelry" className="section1-image" />
                        </div>
                    </div>
                </div>



                {/* 2nd Card  */}
                <div className="section2-container">
                    {/* Left Section - Image */}
                    <div
                        className={`section2-left ${inViewLeft ? 'animate' : ''}`}
                        ref={leftSectionRef}
                    >
                        <img src={customized2} alt="research2" />
                    </div>

                    {/* Right Section - Text Content */}
                    <div
                        className={`section2-right ${inViewRight ? 'animate' : ''}`}
                        ref={rightSectionRef}
                    >
                        <div className="section2-title">
                            Crafting Your Vision: The Heart of NMJ Customization
                        </div>

                        {/* Divider */}
                        <img src={divider} alt="divider" className="section2-divider" />

                        {/* Paragraph Text */}
                        <div className="section2-paragraph">
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
                <div className="section3-container">
                    <div className="section3-card">
                        {/* Left Section (Text) */}
                        <div
                            ref={leftRef}
                            className={`section3-left ${leftVisible ? 'animate-left' : ''}`}
                        >
                            <div className="section3-left-title">
                                Turn Your Savings into Timeless Jewelry with NMJ Customized
                            </div>
                            <img src={divider} alt="divider" className="section3-divider" />
                            <div className="section3-left-text">
                                At NMJ Customized, we believe that your dream jewelry should be within reach, not just a wish. That’s why we’ve introduced a unique Six-Jar Savings Scheme—a simple and rewarding way to save smart and buy big.
                                <div>
                                    ✔ Save for 11 months consistently.<br />
                                    ✔ In the 12th month, enjoy a 9% bonus on your total savings!<br />
                                    ✔ Use your savings + bonus to purchase custom-designed gold or silver jewelry.<br />
                                    ✔ Choose from ₹1,000 to ₹25,000 per month—designed to suit every budget.<br />
                                    ✔ Exclusive gifts on your first deposit!<br />
                                    With NMJ Customized, your savings turn into handcrafted elegance, ensuring you own a jewelry piece that tells your unique story. Start your savings journey today and create your dream jewelry with us!
                                </div>
                            </div>
                        </div>

                        {/* Right Section (Image) */}
                        <div
                            ref={rightRef}
                            className={`section3-right ${rightVisible ? 'animate-right' : ''}`}
                        >
                            <img src={combineImage} alt="research2" />
                        </div>
                    </div>
                </div>



            </div>

            <Footer />

        </div>
    )
}

export default CustomizedJewl
