import React, { useState } from 'react';
import homeGirl from "../Assests/homeGirl.png";
import homeBackGroundRing from "../Assests/homeBackGroundRing.jpg";
import dividerMiniImage from "../Assests/divider-min.webp";
import MainResearchCrop from "../Assests/MainResearchCrop.png";
import BottomContact from "../BottomContactAs/BottomContact"
import homesection2headimage from "../Assests/homesection2headimage.jpg"
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
        image: homeRowImg2, // Replace with actual image URL
        rating: 5,
    },
    {
        name: "John Doe",
        role: "Customer",
        text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
        image: homeRowImg2, // Replace with actual image URL
        rating: 4,
    },
    {
        name: "Alice Smith",
        role: "Customer",
        text: "Amet consectetur adipiscing elit. Nunc eget lorem dolor sed viverra ipsum nunc aliquet bibendum enim.",
        image: homeRowImg2, // Replace with actual image URL
        rating: 5,
    },
    {
        name: "Michael Johnson",
        role: "Customer",
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
        image: homeRowImg2, // Replace with actual image URL
        rating: 3,
    },
];



const HomeCustom = () => {

    const images = [homeRowImg1, homeRowImg2, homeRowImg3, homeRowImg4, homeRowImg5];

    return (
        <>
            {/* First Section: Full Screen Background with Text */}
            <div
                style={{
                    height: '100vh', // Full viewport height
                    width: '100vw',  // Makes the content wider than the screen (adjust as needed)
                    backgroundImage: `url(${homeBackGroundRing})`,
                    backgroundSize: 'cover', // Ensures it covers full width
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'flex-start',
                    // padding: '100px',
                    // padding: '0 100px',
                    color: 'white',
                    textAlign: 'left',
                    position: 'relative',
                    overflowX: 'auto', // Enables horizontal scrolling
                    overflowY: 'hidden' // Prevents vertical scrolling
                }}
            >

                {/* Title Text */}
                <div style={{ padding: '100px' }}>

                    <div className='text-box-animation' style={{ fontSize: '100px' }}>
                        Bespoke Solid <br /> Gold Jewellery
                    </div>

                    {/* Divider Image */}
                    <img
                        src={dividerMiniImage}
                        alt="Divider"
                        className="fade-in"
                        style={{
                            width: '100px',
                            height: 'auto',
                            marginTop: '20px',
                        }}
                    />

                    {/* Description Text */}
                    <div
                        className="fade-in"
                        style={{ fontSize: '20px', marginTop: '20px', lineHeight: '1.5' }}
                    >
                        Invest in a customized and exclusive piece of jewelry by <br />
                        visiting our online store where we offer personalized jewelry.
                    </div>

                    {/* Buttons */}
                    <div className='text-box-animation' style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                        <button
                            className="quote-button"
                            style={{
                                padding: '20px 35px',
                                border: '2px solid white',
                                backgroundColor: 'transparent',
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#b88649';
                                e.target.style.borderColor = 'transparent';
                                e.target.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.borderColor = 'white';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            Go To Shop
                        </button>

                        <button
                            className="quote-button"
                            style={{
                                padding: '20px 35px',
                                border: '2px solid white',
                                backgroundColor: 'transparent',
                                color: 'white',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                transform: 'translateY(0)',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#b88649';
                                e.target.style.borderColor = 'transparent';
                                e.target.style.transform = 'translateY(-5px)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = 'transparent';
                                e.target.style.borderColor = 'white';
                                e.target.style.transform = 'translateY(0)';
                            }}
                        >
                            About Us
                        </button>
                    </div>

                </div>
            </div>

            {/* Section 2 */}
            <>
                <div
                    style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "50px 10%",
                        gap: "30px",
                    }}
                >
                    {/* Left Side: Text */}
                    <div style={{ flex: 1, textAlign: "left" }}>
                        {/* Icon or Decorative Element */}


                        {/* Title */}
                        <h2
                            style={{
                                fontSize: "28px",
                                fontWeight: "bold",
                                color: "#333",
                                lineHeight: "1.4",
                                marginBottom: "20px",
                            }}
                        >
                            Beautiful 18kt Solid Gold & Precious Stones, Exquisitely Crafted By
                            Hand
                        </h2>

                        {/* Divider */}
                        <div
                            style={{
                                marginBottom: "20px",
                            }}
                        >
                            <img
                                src={dividerMiniImage}
                                alt="Divider"
                                className="fade-in"
                                style={{
                                    width: '100px',
                                    height: 'auto',
                                    marginTop: '20px',
                                }}
                            />
                        </div>

                        {/* Subtitle */}
                        <p
                            style={{
                                fontSize: "16px",
                                color: "#555",
                                lineHeight: "1.6",
                                marginBottom: "30px",
                            }}
                        >
                            Tempor id eu nisl nunc mi ipsum faucibus. Eget velit aliquet sagittis id
                            consectetur purus ut faucibus. Congue nisi vitae suscipit tellus mauris
                            a diam maecenas. Ridiculus mus mauris vitae ultricies leo integer.
                        </p>

                        {/* Button */}
                        <button
                            style={{
                                backgroundColor: "#333",
                                color: "#fff",
                                padding: "10px 20px",
                                fontSize: "14px",
                                borderRadius: "5px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            READ MORE
                        </button>
                    </div>

                    {/* Right Side: Image */}
                    <div
                        style={{
                            flex: 1,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                        }}
                    >
                        <img
                            src={MainResearchCrop}
                            alt="Main Research"
                            style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} // Ensures image fits properly
                        />
                    </div>
                </div>
            </>

            {/* section 3 */}

            <>
                <div
                    style={{
                        position: 'relative', // Needed for absolute positioning of overlay
                        height: '400px',
                        width: '100vw',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        color: 'white',
                        overflow: 'hidden', // Ensures the overlay doesn't exceed the container
                    }}
                >
                    {/* Background Image */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundImage: `url(${homeSection2imgNew})`,
                            backgroundSize: 'cover',
                            backgroundPosition: 'center',
                            filter: 'brightness(50%)', // Reduces brightness (alternative to opacity)
                            zIndex: -1, // Places it behind content
                        }}
                    ></div>

                    {/* Overlay with Color */}
                    <div
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            backgroundColor: '#2e2a47', // Overlay color
                            opacity: 0.5, // Adjust opacity to control transparency
                            zIndex: -1, // Places it behind content
                        }}
                    ></div>

                    {/* Main Heading */}
                    <div style={{ fontSize: '24px', fontWeight: 'bold' }}>
                        Our Collection of Real Moments Real Jewellery
                    </div>

                    {/* Divider Image */}
                    <img
                        src={dividerMiniImage}
                        alt="Divider"
                        className="fade-in"
                        style={{
                            width: '80px',
                            height: 'auto',
                            margin: '15px 0',
                        }}
                    />

                    {/* Subtitle */}
                    <p
                        style={{
                            fontSize: '16px',
                            lineHeight: '1.6',
                            maxWidth: '80%',
                        }}
                    >
                        "Each piece in our collection tells a unique story - crafted with passion, <br />
                        designed to reflect the personal style and cherished moments of our customers. <br />
                        From custom engagement rings to heirloom gold necklaces, explore the creations <br />
                        that have become part of life’s most precious memories"
                    </p>
                </div>
            </>

            <>
                <div className="image-row">
                    {images.map((img, index) => (
                        <div key={index} className="image-box">
                            <img src={img} alt={`Image ${index + 1}`} className="image" />
                        </div>
                    ))}
                </div>
            </>

            <div style={{ marginBottom: '20px', marginTop: '50px', gap: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }}>
                <div style={{ fontSize: '24px', fontWeight: 'bold', color: '#2c2c44' }}>
                    "Explore Our Custom Collection" or "See the Stories Behind Every Piece"
                </div>

                <div style={{ fontSize: '32px', fontWeight: 'bold', color: '#a3743e' }}>
                    Testimonials
                </div>

                <div>
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

            <BottomContact>

            </BottomContact>


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
                    <img src={testimonial.image} alt={testimonial.name} className="avatar" />
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
