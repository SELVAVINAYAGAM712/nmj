import React, { useState, useEffect, useRef } from 'react';
import homeBackGroundRing from "../Assests/homeBackGroundRing.jpg";
import dividerMiniImage from "../Assests/divider-min.webp";
import home_section_2 from "../Assests/home_section_2.png"
// import MainResearchCrop from "../Assests/MainResearchCrop.png";
import Footer from "../footer/Footer"
import homeSection2imgNew from "../Assests/homeSection2imgNew.jpg"
// import homeRowImg1 from "../Assests/homeRowImg_1.JPG";
// import homeRowImg2 from "../Assests/homeRowImg_2.JPG";
// import homeRowImg3 from "../Assests/homeRowImg_3.PNG";
// import homeRowImg4 from "../Assests/homeRowImg_4.JPG";
// import homeRowImg5 from "../Assests/homeRowImg_5.jpg";
import { FaStar } from "react-icons/fa";
import './HomeCustom.css';
import npjPNGLogo from "../Assests/npj_Png_Logo.png";
import { useNavigate } from 'react-router-dom';

import product_gallery_1 from "../Assests/product_gallery_1.png";
import product_gallery_2 from "../Assests/product_gallery_2.png";
import product_gallery_3 from "../Assests/product_gallery_3.png";
import product_gallery_4 from "../Assests/product_gallery_4.png";
import product_gallery_5 from "../Assests/product_gallery_5.png";


const testimonials = [
  {
    name: "Priya Ramesh",
    role: "Customer",
    place: "Chennai, Tamil Nadu",
    text: "I wanted a ring inspired by my grandmother’s jewelry, and they crafted the perfect design with a modern touch! Truly one- of - a - kind.The attention to detail was exceptional, and it felt like wearing a piece of my family history",
    rating: 5,
  },
  {
    name: "Anitha Balasubramanian",
    role: "Customer",
    text: "I designed a custom gold necklace for my wedding, and it turned out even more beautiful than I imagined. The team listened to every detail and brought my vision to life with such elegance!",
    place: "Coimbatore, Tamil Nadu",
    rating: 4,
  },
  {
    name: "Meena Karthik",
    role: "Customer",
    place: "Madurai, Tamil Nadu",
    text: "I joined their savings scheme to buy a special anniversary gift, and the process was seamless. The custom bangle I ordered was crafted perfectly to my style and budget",
    rating: 5,
  },
  {
    name: "Karthi Velu",
    role: "Customer",
    place: "Chennai, Tamil Nadu",
    text: "Excellent quality gold jewelry with beautiful designs! Great customer service and fair pricing. Highly recommend!",
    rating: 4,
  },
];

const HomeCustom = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const navigate = useNavigate()

  // const images = [homeRowImg1, homeRowImg2, homeRowImg3, homeRowImg4, homeRowImg5];
  const images = [product_gallery_1, product_gallery_2, product_gallery_3, product_gallery_4, product_gallery_5];

  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing once visible
          }
        });
      },
      { threshold: 0.2 }
    );

    const imageBoxes = containerRef.current?.querySelectorAll(".image-box");
    if (imageBoxes) {
      imageBoxes.forEach((box) => observer.observe(box));
    }

    return () => {
      if (imageBoxes) {
        imageBoxes.forEach((box) => observer.unobserve(box));
      }
    };
  }, []);

  const [isOnclickReadMore, setReadMore] = useState(false)

  // const isMobile = window.innerWidth <= 768;

  return (
    <>
      {/* First Section: Full Screen Background with Text */}

      {/* Section 1 */}
      <div className="home-container" style={{
        backgroundImage: `url(${homeBackGroundRing})`,
      }}>
        <div className="home-overlay" />
        {/* Title Text */}
        <div className="home-container imageLogo"
        >
          <div className="content-wrapper">
            
            <div className='logo-image-top-container' >
              <img src={npjPNGLogo} alt="New Meenakshi Jewellery" className="logo-image-top" />
            </div>

            <div className="text-box-animation title-text">
              Timeless Since 1903 <br />
              A New Chapter Since 1996
            </div>

            {/* Divider Image */}
            <img src={dividerMiniImage} alt="Divider" className="fade-in divider-image" />

            {/* Description Text */}
            <div className="fade-in description-text">
              Invest in a Customized and Exclusive Piece of Jewellery by Visiting Our Online Store Where We Offer Personalized Jewellery.
            </div>

            {/* Buttons */}
            <div className="text-box-animation button-container">
              <button onClick={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })} className="quote-button">Custom Gold Jewel</button>
              <button
                onClick={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })} className="quote-button">About Us</button>
            </div>
          </div>

          {/* Right Side - Image and Text */}
          <div className="logo-image-new-container">
            {/* Logo Image with Fade-in Animation */}
            <img src={npjPNGLogo} alt="New Meenakshi Jewellery" className="logo-image-new" />
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
              Crafting Your Story in Gold – Exquisite, Personalized Jewellery Tailored to
              You
            </h2>

            {/* Divider */}
            <div className="section-2-divider">
              <img src={dividerMiniImage} alt="Divider" className="fade-in" />
            </div>

            {/* Subtitle */}
            <p className="section-2-subtitle">
              Bring your vision to life with our master artisans. From the first sketch to
              the final sparkle, we create bespoke gold and gemstone jewelry, reflecting your style,
              story, and tradition.

              {
                isOnclickReadMore && (
                  <>
                    <br />
                    <br />
                    This keeps the focus on personalization but adds a bit more emotional connection with
                    words like "sparkle" and "tradition," which ties back to your brand's long heritage.
                  </>
                )
              }

            </p>

            {/* Button */}
            <button onClick={() => setReadMore(!isOnclickReadMore)} className="section-2-button">READ MORE</button>
          </div>

          {/* Right Side: Image */}
          <div className="text-box-animation section-2-image-container">
            {/* <img src={MainResearchCrop} alt="Main Research" /> */}
            <img src={home_section_2} alt="Main Research" />
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
          "Each piece in our collection tells a unique story - crafted with passion,
          {/* <br /> */}
          designed to reflect the personal style and cherished moments of our customers.
          {/* <br /> */}
          From custom engagement rings to heirloom gold necklaces, explore the creations
          {/* <br /> */}
          that have become part of life’s most precious memories."
        </p>
      </div>

      {/* section 4 Row Image */}
      <>
        <div ref={containerRef} className="image-row">
          {images.map((img, index) => (
            <div key={index} className="image-box">
              {/* <img src={img} alt={`Image ${index + 1}`} className="image" /> */}
              <img src={img} alt={`Home row ${index + 1}`} className="image" />
            </div>
          ))}
        </div>
      </>

      {/* section 5 */}
      <div className="custom-container">
        <div className="custom-heading">
          "Explore Our Custom Collection" or "See the Stories Behind Every Piece"
        </div>

        <div className="custom-subheading">Testimonials</div>

        {/* Divider Image */}
        <img src={dividerMiniImage} alt="Divider" className="fade-in custom-divider-image" />

        <div className="custom-description">
          "What Our Customers Say About Their Custom Creations"
        </div>
      </div>

      <div className="testimonial-wrapper">
        <div className="testimonial-container">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};


const TestimonialCard = ({ testimonial }) => {
  const cardRef = useRef(null);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target); // Stop observing after animation
          }
        });
      },
      { threshold: 0.2 }
    );

    const cardElement = cardRef.current; // Store reference in a variable

    if (cardElement) {
      observer.observe(cardElement);
    }

    return () => {
      if (cardElement) observer.unobserve(cardElement);
    };
  }, []);


  return (
    <div ref={cardRef} className="testimonial-card">
      <div className="testimonial-header">
        <div className="user-info">
          <div>
            <h1 style={{ color: "#d4af37" }}>{testimonial.name}</h1>
            <p className="role">{testimonial.role}</p>
            <p className="role">{testimonial.place}</p>
          </div>
        </div>
        <StarRating rating={testimonial.rating} />
      </div>
      <p className="testimonial-text">{testimonial.text}</p>
    </div>
  );
};

const StarRating = ({ rating }) => {
  return (
    <div className="stars">
      {[...Array(rating)].map((_, index) => (
        <FaStar key={index} />
      ))}
    </div>
  );
};



export default HomeCustom;
