import React from 'react';
import homeGirl from "../Assests/homeGirl.png";
import homeBackGroundRing from "../Assests/homeBackGroundRing.jpg";
import dividerMiniImage from "../Assests/divider-min.webp";
import MainResearchCrop from "../Assests/MainResearchCrop.png";
import './HomeCustom.css';

const HomeCustom = () => {
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


            {
                // {/* Second Section: Scroll to MainResearchCrop */}

                // <>
                //     <div style={{
                //         display: 'flex',
                //         alignItems: 'center',
                //         padding: '0 10%',
                //         justifyContent: 'space-between', // Ensures both elements take their space
                //         width: '100%', // Ensures full width usage
                //         paddingTop: '50px'
                //     }}>
                //         {/* Left Side: Text */}
                //         <div style={{ flex: 1, textAlign: 'left' }}>
                //             <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', lineHeight: '1.4' }}>
                //                 Crafting Your Story in Gold – <br />
                //                 Exquisite, Personalized Jewelry Tailored to You
                //             </h2>

                //             <h2 style={{ fontSize: '24px', color: '#333', lineHeight: '1.4' }}>
                //                 Bring your vision to life with our master artisans. From the first sketch to
                //                 the final sparkle, we create bespoke gold and gemstone jewelry, reflecting your style,
                //                 story, and tradition
                //             </h2>
                //         </div>

                //         {/* Right Side: Image */}
                //         <div
                //             style={{
                //                 flex: 1, // Takes up equal space
                //                 display: 'flex',
                //                 justifyContent: 'flex-end', // Moves the image to the right
                //                 backgroundColor: '#f8f8f8',
                //                 position: 'relative',
                //                 zIndex: 1,
                //             }}
                //         >
                //             <img
                //                 src={MainResearchCrop}
                //                 alt="Main Research"
                //                 style={{ maxWidth: '100%', height: 'auto', objectFit: 'contain' }} // Ensures image fits properly
                //             />
                //         </div>
                //     </div>
                // </>
            }


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
                        {/* <div
                                style={{
                                marginBottom: "20px",
                                }}
                            >
                                <img
                                src="path/to/icon.png"
                                alt="Decorative Icon"
                                style={{ maxWidth: "80px" }}
                                />
                            </div> */}

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
                        <hr
                            style={{
                                width: "60px",
                                border: "1px solid #ccc",
                                marginBottom: "20px",
                            }}
                        />

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

            {/* Second Section: Scroll to MainResearchCrop */}
            {/* <div
    style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#f8f8f8',
        padding: '0 10%',
    }}
>
    Left Side - Text (Centered Vertically)
    <div style={{ flex: 1, textAlign: 'left' }}>
        <h2 style={{ fontSize: '32px', fontWeight: 'bold', color: '#333', lineHeight: '1.4' }}>
            Crafting Your Story in Gold – <br />
            Exquisite, Personalized Jewelry Tailored to You
        </h2>
    </div>

    Right Side - Image (Unchanged)
    <div style={{ flex: 1, display: 'flex', justifyContent: 'flex-end' }}>
        <img
            src={MainResearchCrop}
            alt="Main Research"
            style={{ maxWidth: '90%', maxHeight: '80vh' }}
        />
    </div>
</div> */}

        </>
    );
};

export default HomeCustom;
