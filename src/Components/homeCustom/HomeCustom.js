import React from 'react';
import homeGirl from "../Assests/homeGirl.png";
import homeBackGroundRing from "../Assests/homeBackGroundRing.jpg";
import dividerMiniImage from "../Assests/divider-min.webp";
import './HomeCustom.css'; // Import the CSS file

const HomeCustom = () => {
    return (
        <>
            <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative' }}>
                <img
                    src={homeBackGroundRing}
                    alt="Background Ring"
                    style={{ width: '100%', height: '900px', position: 'absolute', zIndex: 0 }}
                />
                <img
                    src={homeGirl}
                    alt="Home Girl"
                    style={{ height: '900px', position: 'absolute', zIndex: 1 }}
                />
            </div>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    left: '100px',
                    top: '200px',
                    position: 'relative',
                    zIndex: 2,
                    color: 'white',
                    padding: '20px',
                    alignItems: 'flex-start',
                }}
            >
                <div className='text-box-animation' style={{ fontSize: '100px' }}>
                    Bespoke Solid <br /> Gold Jewellery
                </div>

                {/* Image Divider with Animation */}
                <img
                    src={dividerMiniImage}
                    alt="Divider"
                    className="fade-in"  // Apply animation to this image
                    style={{
                        width: '100px',
                        height: 'auto',
                        marginTop: '20px',
                    }}
                />

                {/* This is the text box with animation */}
                <div
                    className="fade-in"  // Apply animation to this text
                    style={{ fontSize: '20px', marginTop: '20px', lineHeight: '1.5' }}
                >
                    Invest in a customized and exclusive piece of jewelry by <br /> visiting our online store where we offer personalized jewelry.
                </div>

                <div className='text-box-animation' style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
                    <div
                        className="quote-button"
                        style={{
                            marginTop: '20px',
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
                    </div>

                    <div
                        className="quote-button"
                        style={{
                            marginTop: '20px',
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
                    </div>
                </div>
            </div>
        </>
    );
}

export default HomeCustom;
