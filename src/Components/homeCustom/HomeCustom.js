import React, { useState, useEffect, useRef } from 'react';
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
import { FaStar } from "react-icons/fa";
import './HomeCustom.css';
import npjPNGLogo from "../Assests/npj_Png_Logo.png";


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
    name: "Selvavinayagam Manickam",
    role: "Customer",
    place: "Chennai, Tamil Nadu",
    text: "Excellent quality gold jewelry with beautiful designs! Great customer service and fair pricing. Highly recommend!",
    rating: 4,
  },
];

const HomeCustom = () => {

  const images = [homeRowImg1, homeRowImg2, homeRowImg3, homeRowImg4, homeRowImg5];

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

  return (
    <>
      {/* First Section: Full Screen Background with Text */}
      {/* Section 1 */}
      <div className="home-container" style={{
        backgroundImage: `url(${homeBackGroundRing})`,
      }}>
        {/* Title Text */}
        <div className="home-container" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>

          {/* Left Content */}
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

          {/* Right Side - Image and Text */}
          <div className="logo-image-new-container">
            {/* Logo Image with Fade-in Animation */}
            <img src={npjPNGLogo} alt="New Meenakshi Jewellery" className="logo-image-new" />

            {/* Overlay Text with Slide-in Animation */}
            <div className="logo-image-new-text">
              New Meenakshi Jewellery
            </div>
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
              Crafting Your Story in Gold – Exquisite, Personalized Jewelry Tailored to
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
        <div ref={containerRef} className="image-row">
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

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) observer.unobserve(cardRef.current);
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
