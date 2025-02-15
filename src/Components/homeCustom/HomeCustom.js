import React, { useState } from 'react';
import homeBackGroundRing from "../Assests/homeBackGroundRing.jpg";
import dividerMiniImage from "../Assests/divider-min.webp";
import MainResearchCrop from "../Assests/MainResearchCrop.png";
import Footer from "../footer/Footer"
import homeSection2imgNew from "../Assests/homeSection2imgNew.jpg"
import homeRowImg1 from "../Assests/homeRowImg_1.JPG";
import homeRowImg2 from "../Assests/homeRowImg_2.JPG";
import homeRowImg3 from "../Assests/homeRowImg_3.PNG";
import homeRowImg4 from "../Assests/homeRowImg_4.JPG";
import homeRowImg5 from "../Assests/homeRowImg_5.jpg";

import './HomeCustom.css';

const testimonials = [
    {
        name: "Marla B Kane",
        role: "Customer",
        text: "Turpis in eu mi bibendum. Vestibulum mattis ullamcorper velit sed ullamcorper morbi tincidunt ornare massa. Enim blandit volutpat maecenas volutpat.",
        rating: 5,
    },
    {
        name: "John Doe",
        role: "Customer",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        rating: 4,
    },
    {
        name: "Alice Smith",
        role: "Customer",
        text: "Amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim.",
        rating: 5,
    },
    {
        name: "Michael Johnson",
        role: "Customer",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        rating: 3,
    },
];

const HomeCustom = () => {

    const images = [homeRowImg1, homeRowImg2, homeRowImg3, homeRowImg4, homeRowImg5];

    return (
        <>
            {/* First Section: Full Screen Background with Text */}
            {/* Section 1 */}
            <div className="home-container" style={{
                backgroundImage: `url(${homeBackGroundRing})`,
            }}>
                {/* Title Text */}
                <div className="content-wrapper">
                    <div className="text-box-animation title-text">
                        Bespoke Solid <br /> Gold Jewellery
                    </div>

                    {/* Divider Image */}
                    <img src={dividerMiniImage} alt="Divider" className="fade-in divider-image" />

                    {/* Description Text */}
                    <div className="fade-in description-text">
                        Invest in a customized and exclusive piece of jewelry by <br />
                        visiting our online store where we offer personalized jewelry.
                    </div>

                    {/* Buttons */}
                    <div className="text-box-animation button-container">
                        <button className="quote-button">Go To Shop</button>
                        <button className="quote-button">About Us</button>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <>
                <div className="section-2-container">
                    {/* Left Side: Text */}
                    <div className="section-2-text-container">
                        {/* Title */}
                        <h2 className="section-2-title">
                            Beautiful 18kt Solid Gold & Precious Stones, Exquisitely Crafted By Hand
                        </h2>

                        {/* Divider */}
                        <div className="section-2-divider">
                            <img src={dividerMiniImage} alt="Divider" className="fade-in" />
                        </div>

                        {/* Subtitle */}
                        <p className="section-2-subtitle">
                            Tempor id eu nisl nunc mi ipsum faucibus. Eget velit aliquet sagittis id consectetur
                            purus ut faucibus. Congue nisi vitae suscipit tellus mauris a diam maecenas.
                            Ridiculus mus mauris vitae ultricies leo integer.
                        </p>

                        {/* Button */}
                        <button className="section-2-button">READ MORE</button>
                    </div>

                    {/* Right Side: Image */}
                    <div className="section-2-image-container">
                        <img src={MainResearchCrop} alt="Main Research" />
                    </div>
                </div>
            </>


            {/* section 3 */}

            <div className="home-section">
                {/* Background Image */}
                <div
                    className="background-image"
                    style={{ backgroundImage: `url(${homeSection2imgNew})` }}
                ></div>

                {/* Overlay */}
                <div className="overlay"></div>

                {/* Main Heading */}
                <div className="main-heading">
                    Our Collection of Real Moments Real Jewellery
                </div>

                {/* Divider Image */}
                <img src={dividerMiniImage} alt="Divider" className="divider fade-in" />

                {/* Subtitle */}
                <p className="subtitle">
                    "Each piece in our collection tells a unique story - crafted with passion, <br />
                    designed to reflect the personal style and cherished moments of our customers. <br />
                    From custom engagement rings to heirloom gold necklaces, explore the creations <br />
                    that have become part of life’s most precious memories."
                </p>
            </div>

            <>
                <div className="image-row">
                    {images.map((img, index) => (
                        <div key={index} className="image-box">
                            <img src={img} alt={`Image ${index + 1}`} className="image" />
                        </div>
                    ))}
                </div>
            </>

            <div className="custom-container">
                <div className="custom-heading">
                    "Explore Our Custom Collection" or "See the Stories Behind Every Piece"
                </div>

                <div className="custom-subheading">Testimonials</div>

                <div className="custom-description">
                    "What Our Customers Say About Their Custom Creations"
                </div>
            </div>

            <div className="testimonial-wrapper">
                <div className="testimonial-container">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </div>

            <Footer />
        </>
    );
};


const TestimonialCard = ({ testimonial }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="testimonial-card"
            style={{ backgroundColor: isHovered ? "#3a3a5c" : "#2c2c44" }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="stars">
                {"★".repeat(testimonial.rating)}{"☆".repeat(5 - testimonial.rating)}
            </div>
            <div className="testimonial-header">
                <div className="user-info">
                    {/* <img src={testimonial.image} alt={testimonial.name} className="avatar" /> */}
                    <div style={{ alignContent: "center" }}>
                        <h3>{testimonial.name}</h3>
                        <div style={{ marginTop: 5, fontSize: "16px" }}>{testimonial.role}</div>
                    </div>
                </div>
            </div>
            <p className="testimonial-text">{testimonial.text}</p>
        </div>
    );
};


export default HomeCustom;
