import React, { useEffect, useState } from "react";
import research2 from '../Assests/research2.jpg'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
import bg from "../Assests/diamond2.png";
import diamond from "../Assests/diamondfull.png";
import ring from "../Assests/Engagement-Ring.png";
import Footer from '../footer/Footer';
import combineImage1 from "../Assests/combineImage1.jpeg";
import combineImage2 from "../Assests/combineImage2.jpeg";
import { motion } from "framer-motion";







const Blog = () => {
  const navigate = useNavigate()
    const [isOnclickReadMore, setReadMore] = useState(false)

  return (
    <div>

      <HeaderPage
        labelName="Blog"
        onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
        onClickHome={() => navigate('/')}
        onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
        onClickCustom={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}
      />
      {/* 1st card section  */}
      <div>

        {/* 1st Card  */}
        <motion.div
  initial={{ opacity: 0, x: -100 }} // Starts from the left
  whileInView={{ opacity: 1, x: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    height: '100vh',
    width: '100%',
    backgroundColor: '#f9f8f4',
    marginTop:'50px'
  }}
>  
        <div style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          backgroundColor: '#f9f8f4',
          marginTop: '-9%'
        }}>


          {/* Left Section - Image */}
          <div style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'flext-start',
            alignItems: 'center',
            marginLeft: '6%'

          }}>
            <img src={combineImage1} alt="combineImage1" style={{ height: '80%', maxWidth: '120%' }} />
          </div>

          {/* Right Section - Text Content */}
          <div style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '5%',
            gap: '25px',
            paddingLeft: '15%',
            marginBottom: '6%'

          }}>
            <div style={{ fontSize: '30px', fontFamily: 'serif', color: '#b98d58', marginTop: '10px' }}>
              NMJ Customiz – Crafting Personalized Jewelry with a Timeless Legacy                        </div>

            <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />


            <div style={{ fontSize: '21px', fontFamily: 'serif', color: 'black', marginTop: '10px',lineHeight:'1.5' }}>
              At New Meenakshi Jewellery (NMJ Customiz), we believe that every piece of jewelry should
              be as unique as the person wearing it. With a timeless legacy of trust and craftsmanship, we
              specialize in creating custom-made jewelry that transforms your vision into reality.<br />
              <br />
              From the first sketch to the final masterpiece, our expert artisans meticulously craft jewelry
              that tells your story. Whether it’s a modern engagement ring, a redesigned family heirloom,
              or a completely new vision, we ensure that each piece is a perfect blend of your imagination and
              our expertise.                       </div>

{/* {
  isOnclickReadMore && (

  
            <div style={{
              fontSize: '22px',
              fontFamily: 'serif',
              color: 'black',
              lineHeight: '1.5',
              marginTop: '20px'

            }}>
              Why Choose NMJ Customiz?<br/>
              ✔ A Legacy of Excellence <br/>
                Trusted craftsmanship passed through generations.<br/>
              ✔ Personalized Jewelry<br/>
                Designed exclusively to match your vision.<br/>
              ✔ Finest Materials <br/>
                Ethically sourced gemstones & premium metals.<br/>
              ✔ Expert Craftsmanship <br/>
                A perfect balance of tradition and modern artistry.<br/>
              ✔ Collaborative Design Process <br/>
                From consultation to creation, we bring your ideas to life.<br/><br/>
              At NMJ Customiz, we celebrate the art of storytelling through jewelry, ensuring that every
              piece we create is not just an ornament but a reflection of your unique story and legacy.            </div>

)
}

            <button className="section-2-button" 
              onClick={()=>setReadMore(!isOnclickReadMore)}
            style={{
              fontSize: '15px',
              marginTop: '20px',
              height: '60px',
              width: '190px'
            }}>READ MORE</button> */}
          </div>
        </div>
        </motion.div>

      </div>

      {/* 2nd card section  */}

        {/* 2nd Card  */}
        <motion.div
  initial={{ opacity: 0, y: -100 }} // Starts from the left
  whileInView={{ opacity: 1, y: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    height: '100vh',
    width: '100%',
    backgroundColor: '#f9f8f4',
    marginTop:'-4%'
  }}
>  
        <div style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          backgroundColor: '#f9f8f4',
          marginTop: '-5%'
        }}>

          {/* Right Section - Text Content */}
          <div style={{
            flex: '1',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-end',
            padding: '5%',
            gap: '25px',
            paddingLeft: '5%',
            marginBottom: '6%'

          }}>
            <div style={{ fontSize: '30px', fontFamily: 'serif', color: '#b98d58', marginTop: '10px' }}>
              Are You Interested in Custom Jewelry? Let’s Create Something Special Together!                        </div>

            <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />


            <div style={{ fontSize: '21px', fontFamily: 'serif', color: 'black', marginTop: '10px',lineHeight:'1.5' }}>
              At NMJ Customiz, we turn your ideas into breathtaking jewelry that reflects your unique
              story. Whether you're dreaming of a one-of-a-kind engagement ring, a modern take on
              traditional jewelry, or a completely original design, we’re here to make it happen.<br />
              <br />
              Our expert artisans work closely with you from concept to completion, ensuring that every
              detail aligns with your vision. Let’s craft something truly special together!               </div>


            {/* <button className="quote-button-aboutUs" style={{
      fontSize: '15px',
      marginTop: '20px',
      height: '60px',
      width: '190px'
    }}>I'M INTERESTED</button> */}
          </div>


          {/* Left Section - Image */}
          <div style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'flext-start',
            alignItems: 'center',
            marginRight: '5%'

          }}>
            <img src={combineImage2} alt="combineImage2" style={{ height: '80%', maxWidth: '120%' }} />
          </div>


        </div>
        </motion.div>



      {/* 3rd section  */}
      <div style={{ position: "relative", width: "100%", height: "400px" }}>
        {/* Background Image */}
        <img
          src={bg}
          alt="Logo"
          style={{
            height: "400px",
            width: "100%",
            objectFit: "cover",
            opacity: 1,
          }}
        />

        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            backgroundColor: "#f3ece3",
            opacity: 0.6,
            zIndex: 1,
          }}
        ></div>

        {/* Diamond Image - Positioned on the Left */}
        <img
          src={diamond}
          alt="diamond"
          style={{
            position: "absolute",
            top: "50%",
            left: "2%", // Adjust to position it more to the left
            transform: "translateY(-50%)",
            height: "120px",
            width: "30%",
            objectFit: "contain",
            opacity: 1,
            zIndex: 2, // Higher z-index to appear above the overlay
          }}
        />

        {/* Centered Content */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: "60%", // Adjust width if needed
            maxWidth: "800px",
            textAlign: "center",
            zIndex: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            padding: "5%",
          }}
        >
          <div style={{ fontSize: "38px", fontFamily: "serif", color: "black" }}>
            Interested In Our Course?
          </div>

          <img src={divider} alt="divider" style={{ height: "25px", width: "70px", marginTop: "20px" }} />

          <div
            style={{
              fontSize: "22px",
              fontFamily: "serif",
              color: "black",
              lineHeight: "1.5",
              marginTop: "20px",
            }}
          >
Visit Our Store for a personal consultation.          </div>

          <button
            className="section-2-button"
            onClick={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
            style={{
              fontSize: "15px",
              marginTop: "20px",
              height: "60px",
              width: "190px",
            }}
          >
            CONTACT US
          </button>
        </div>

        {/* Ring Image - Positioned on the Left */}
        <img
          src={ring}
          alt="ring"
          style={{
            position: "absolute",
            top: "85%",
            right: "2%", // Adjust to position it more to the left
            transform: "translateY(-50%)",
            height: "120px",
            width: "30%",
            objectFit: "contain",
            opacity: 1,
            zIndex: 2, // Higher z-index to appear above the overlay
          }}
        />
      </div>

      <Footer />


    </div>
  )
}

export default Blog
