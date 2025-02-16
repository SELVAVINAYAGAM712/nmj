import React from 'react'
import research2 from '../Assests/research2.jpg'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';
import bg from "../Assests/diamond2.png";
import diamond from "../Assests/diamondfull.png";
import ring from "../Assests/Engagement-Ring.png";
import Footer from '../footer/Footer';






const Blog = () => {
  const navigate = useNavigate()

  return (
    <div>

      <HeaderPage
        labelName="Blog"
        onClickBlog={() => { }}
        onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
        onClickHome={() => navigate('/')}
        onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
        onClickCustomized={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}
      />
      {/* 1st card section  */}
      <div>

        {/* 1st Card  */}
        <div style={{
          display: 'flex',
          height: '100vh',
          width: '100%',
          backgroundColor: '#f9f8f4',
          marginTop: '-5%'
        }}>


          {/* Left Section - Image */}
          <div style={{
            flex: '1',
            display: 'flex',
            justifyContent: 'flext-start',
            alignItems: 'center',
            marginLeft: '1%'

          }}>
            <img src={research2} alt="research2" style={{ height: '80%', maxWidth: '120%' }} />
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
            <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#b98d58', marginTop: '10px' }}>
              QUALIFICATION & PRODUCTION                        </div>

            <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
              Learn To Develop Sheet Metal & Wire Lamination Skills                        </div>

            <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />

            <div style={{
              fontSize: '22px',
              fontFamily: 'serif',
              color: 'black',
              lineHeight: '1.5',
              marginTop: '20px'

            }}>
              Cillum ex sint nisi ea aute mollit qui elit eu qui irure aliqua non exercitation nulla. Nisi aute ipsum ea et voluptate nostrud quis esse labore qui ea labore occaecat fugiat esse incididunt pariatur laboris pariatu.
            </div>

            <button className="quote-button-aboutUs" style={{
              fontSize: '15px',
              marginTop: '20px',
              height: '60px',
              width: '190px'
            }}>I'M INTERESTED</button>
          </div>
        </div>

      </div>


      {/* 2nd section  */}
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
            Imperdiet proin fermentum leo vel orci porta non pulvinar neque.
          </div>

          <button
            className="quote-button-aboutUs"
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
