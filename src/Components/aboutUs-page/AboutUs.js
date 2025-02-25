
import React, { useEffect, useState } from "react";
import research2 from '../Assests/research2.jpg'
import backgroundRing from '../Assests/backgroundring.jpg'
import divider from "../Assests/divider.png";
import cardsNew from "../Assests/cards.png";
import whiteScreen from "../Assests/whitebg1.jpg";
import craft from "../Assests/craft.jpg";
import craft2 from "../Assests/craft2.jpg";
import research from "../Assests/research.jpg";
import ringSingle from "../Assests/ringSingle.png";
import pointergif from "../Assests/pointer.gif";
import diamondScroll from "../Assests/diamondscroll.png";
import ringhd from "../Assests/ringhd.jpg";
import nmj_Logo from "../Assests/nmj_Logo.jpg";
import ringbox from "../Assests/ringBox.jpg";
import { useNavigate } from 'react-router-dom';
import rathnaswami from "../Assests/rathnaswami.jpeg";
import ganeshan from "../Assests/ganeshan.jpg";
import karthikeyan from "../Assests/karthikeyan.jpeg";
import maheswaran from "../Assests/meheswaran.jpeg";
import HeaderPage from '../widgets/HeaderPage';
import { motion } from "framer-motion";
import Footer from "../footer/Footer";


const AboutUs = () => {
  const navigate = useNavigate()
  const [dotPosition, setDotPosition] = useState(0);
    const [isOnclickReadMore, setReadMore] = useState(false)
  


  useEffect(() => {
    const handleMouseMove = (event) => {
      let container = document.querySelector(".container");
      if (!container) return;

      let containerRect = container.getBoundingClientRect();
      let mouseY = event.clientY - containerRect.top; // Mouse position relative to container

      // Ensure dot stays within bounds
      let newTop = Math.max(0, Math.min(mouseY, containerRect.height - 80));

      setDotPosition(newTop);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // onClickBlog={() => { }}
  // onClickContact={() => { }}
  // onClickHome={() => { }}
  // onClickAbout={() => { }}
  // onClickCustom={() => { }}


  return (

    <>
      <HeaderPage
        labelName="About Us"
        onClickBlog={() => navigate('/blog', { state: { label: 'Blog' } })}
        onClickContact={() => navigate('/contact_us_pages', { state: { label: 'Contact Us' } })}
        onClickHome={() => navigate('/')}
        onClickCustom={() => navigate('/customized_jewl', { state: { label: 'Customized Jewellery' } })}
      />

      <div>
     

        <div style={{
          display: 'flex',
          flexDirection: 'column',
          width: '100vw',
          backgroundColor: '#f9f8f4',
          margin: '0',
          padding: '0',
          marginTop: '-5%'
        }}>
          {/* 1st Card Section */}
          <motion.div
  initial={{ opacity: 0, x: -100 }} // Starts from the left
  whileInView={{ opacity: 1, x: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    height: '100vh',
    width: '100%',
    backgroundColor: '#f9f8f4'
  }}
>
          <div style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            backgroundColor: '#f9f8f4'
          }}>
            {/* Left Section - Text Content */}
            <div style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              padding: '5%',
              gap: '25px'
            }}>
              <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#b98d58' }}>
                OUR  LEGACY
              </div>

              <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
                A Timeless Journey of Trust and Craftsmanship Since 1903
              </div>

              <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />

              <div style={{
                fontSize: '22px',
                fontFamily: 'serif',
                color: 'black',
                lineHeight: '1.5',
                marginTop: '20px'
              }}>
                Our story began in 1903 with  <span style={{ fontWeight: "bold" }}>
                  Thiru Chelam Swami Chettiar,
                </span><br />
                who laid the foundation of our
                jewelry business in Thiru.<br />
                His commitment to honesty, tradition, and fine craftsmanship<br />
                quickly
                earned the trust of the local community.

                {
                isOnclickReadMore && (
                  <>
                    <br />
                    <br />
                    Our vision at NMJ is to make personalized jewelry accessible and meaningful for everyone. We
believe that jewelry should not only adorn but also tell a story—your story. With our expertise
in gemology and a passion for craftsmanship, we bring your ideas to life, creating pieces that
reflect your unique personality and milestones.
                  </>
                )
              }
              </div>

              <button className="section-2-button" 
              onClick={()=>setReadMore(!isOnclickReadMore)}
              style={{
                fontSize: '15px',
                marginTop: '20px',
                height: '60px',
                width: '190px'
            }}
              >Read More</button>
            </div>

            {/* Right Section - Image */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={nmj_Logo} alt="research2" style={{ height: '80%', maxWidth: '130%' }} />
            </div>
          </div>
          </motion.div>
          {/* 2nd Card Section (No Top Gap) */}
          <div style={{
            position: 'relative',
            height: '830px',
            backgroundColor: '#f3ebe2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '77%',
              margin: '0 auto',
              gap: '20px'
            }}>
              {/* Card 1 */}
              <motion.div
  initial={{ opacity: 0, x: -100 }} // Starts from the left
  whileInView={{ opacity: 1, x: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    height: '100vh',
    width: '50%',
    backgroundColor: '#f9f8f4',
    marginTop:'50px'
  }}
>
              <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card1" style={{ height: '800px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '60%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={rathnaswami} alt="craft" style={{
                  width: '58%',
                  height: '41%',
                  position: 'absolute',
                  top: '45px'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '52%',
                  fontSize: '36px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  Thiru Rathina Swami Chettiar
                </div>
                <img src={divider} alt="divider" style={{
                  height: '26px',
                  width: '80px',
                  position: 'absolute',
                  top: '65%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '73%',
                  fontSize: '21px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '1.5',

                }}>
                  This dedication was passed on to Thiru Rathina Swami<br />
                  Chettiar, who expanded the business
                  with integrity,<br />
                  ensuring that each piece of jewelry reflected the values of our family.
                </div>
              </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div
  initial={{ opacity: 0, y: -100 }} // Starts from the left
  whileInView={{ opacity: 1, y: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    height: '100vh',
    width: '50%',
    backgroundColor: '#f9f8f4',
    marginTop:'50px'
  }}
>  
            <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card2" style={{ height: '800px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '60%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={ganeshan} alt="research" style={{
                  width: '58%',
                  height: '41%',
                  position: 'absolute',
                  top: '45px'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '52%',
                  fontSize: '36px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  Thiru Ganesan Chettiar
                </div>
                <img src={divider} alt="divider" style={{
                  height: '26px',
                  width: '80px',
                  position: 'absolute',
                  top: '65%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '73%',
                  fontSize: '21px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '1.5',

                }}>
                  In 1977, Thiru Ganesan Chettiar founded Sri Meenakshi Jewellery, continuing the legacy and
                  bringing a new era of excellence.<br/>

                  • 115 years of tradition, trust, and unmatched craftsmanship.<br/>
                  • Generations dedicated to preserving the art of jewelry making.
                </div>
              </div>
              </motion.div>

            </div>
          </div>
          {/* 3rd Card Section (No Top Gap) */}
          <div style={{
            position: 'relative',
            height: '830px',
            backgroundColor: '#f3ebe2',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '77%',
              margin: '0 auto',
              gap: '20px'
            }}>
              {/* Card 1 */}
              <motion.div
  initial={{ opacity: 0, x: -100 }} // Starts from the left
  whileInView={{ opacity: 1, x: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    height: '100vh',
    width: '50%',
    backgroundColor: '#f9f8f4',
    marginTop:'50px'
  }}
>
              <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card1" style={{ height: '800px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '60%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={karthikeyan} alt="craft" style={{
                  width: '58%',
                  height: '41%',
                  position: 'absolute',
                  top: '45px'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '52%',
                  fontSize: '36px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'

                }}>
                  Thiru G. Karthikeyan
                </div>
                <img src={divider} alt="divider" style={{
                  height: '26px',
                  width: '80px',
                  position: 'absolute',
                  top: '65%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '73%',
                  fontSize: '21px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '1.5',
                }}>
                  In 1996, Thiru G. Karthikeyan took the helm, blending traditional craftsmanship with modern
techniques. Under his leadership, New Meenakshi Jewellery continued to grow, becoming a
symbol of trust and quality in the jewelry industry. His passion for innovation and attention to
detail ensured that NMJ stayed ahead of trends while maintaining its rich heritage.
                </div>
              </div>
              </motion.div>
              {/* Card 2 */}
              <motion.div
  initial={{ opacity: 0, y: -100 }} // Starts from the left
  whileInView={{ opacity: 1, y: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    height: '100vh',
    width: '50%',
    backgroundColor: '#f9f8f4',
    marginTop:'50px'
  }}
>
              <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card2" style={{ height: '800px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '53%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={maheswaran} alt="research" style={{
                  width: '52%',
                  height: '41%',
                  position: 'absolute',
                  top: '45px'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '52%',
                  fontSize: '36px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  fontWeight: 'bold'
                }}>
                  G.K. Mageshwaran
                </div>
                <img src={divider} alt="divider" style={{
                  height: '26px',
                  width: '80px',
                  position: 'absolute',
                  top: '63%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '71%',
                  fontSize: '21px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center',
                  lineHeight: '1.5',
                }}>
                  Under the leadership of G.K. Mageshwaran, NMJ is set to redefine personalized jewelry. His
vision is simple yet powerful,to transform people’s dream jewelry into reality, placing their
unique designs directly in their hands. Mageshwaran is passionate about making customized
jewelry accessible, ensuring every piece reflects the personal stories and aspirations of our
customers.
                </div>
              </div>
              </motion.div>

            </div>
          </div>
          {/* 4th Title Section  */}
          <>
            <div style={{

              top: '30%',
              marginTop: '60px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '40px',
              fontFamily: 'serif',
            }}>
              Our Vision
            </div>
            <div style={{

              top: '30%',
              marginTop: '40px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
              <img src={divider} alt="divider" style={{ height: '25px', width: '80px' }} />

            </div>
            <div style={{

              top: '30%',
              marginTop: '25px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              fontSize: '22px',
              fontFamily: 'serif',
            }}>
              Empowering You with Customized Jewelry</div>
          </>
          {/* 5th Card Section  */}
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
}}>

  {/* Left Section - Image */}
  <div style={{
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: '5%',
    marginBottom: '10%' // Reduced from 15%
  }}>
    <img src={ringhd} alt="research2" style={{ height: '65%', maxWidth: '90%' }} />
  </div>

  {/* Middle Section - Vertical Line & Moving Dot */}
  <div
    style={{
      flex: 0.05, // Adjusted to reduce space
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      marginLeft: "3px", // Reduced from 7px
      marginBottom: "10%" // Reduced from 18%
    }}
  >
    <div
      className="container"
      style={{
        position: "relative",
        height: "50vh", // Reduced from 60vh
        width: "5px",
        backgroundColor: "#f3ece5",
      }}
    >
      <div
        style={{
          position: "absolute",
          width: "20px",
          height: "20px",
          backgroundColor: "black",
          borderRadius: "50%",
          left: "50%",
          transform: "translateX(-50%)",
          top: `${dotPosition}px`,
        }}
      ></div>
    </div>
  </div>

  {/* Right Section - Text Content */}
  <div style={{
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    padding: '3%', // Reduced from 5%
    marginBottom: '10%', // Reduced from 15%
    marginRight: '30px' // Reduced from 50px
  }}>
    <div style={{ fontSize: '38px', fontFamily: 'serif', color: '#2c2c2c', fontWeight: 'bold' }}>
      Serving Our Community with Heart and Heritage
    </div>

    <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#2c2c2c', marginTop: '10px', lineHeight: '1.5' }}>
      For over a century, NMJ has been more than just a jewelry store—we’re a part of your special
      moments. From marriages and milestones to festivals and family traditions, we’ve had the honor
      of crafting pieces that bring joy to generations of customers. We proudly serve our local
      community and customers worldwide, offering personalized experiences and trustworthy service.
      <br /><br />
      
• 115 years of serving customers with integrity and care.<br/>
• Join our NMJ family and let us be a part of your story
    </div>
  </div>
</div>
</motion.div>


          {/* 6th Card Section  */}
          <motion.div
  initial={{ opacity: 0, y: -100 }} // Starts from the left
  whileInView={{ opacity: 1, y: 0 }} // Moves to original position
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
  style={{
    display: 'flex',
    // height: '100vh',
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
  marginTop: '-20%', // Adjusted to maintain consistency
  marginLeft:'6%'
}}>

  {/* Left Section - Text Content */}
  <div style={{
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'flex-start', // Left-align content
    padding: '3%', // Reduced from 5% for better spacing
  }}>
    <div style={{ fontSize: '38px', fontFamily: 'serif', color: '#2c2c2c', fontWeight: 'bold' }}>
      G.K. Mageshwaran’s Vision: Turning Your Dreams into Gold
    </div>

    <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#2c2c2c', marginTop: '28px', lineHeight: '1.5' }}>
      At NMJ, we believe that jewelry should be as unique as the person wearing it. Under G.K.
      Mageshwaran’s leadership, we’re not just making jewelry—we’re bringing your dreams to life.
      His vision is simple yet profound: to take the designs you’ve always imagined and turn them into
      stunning, tangible pieces you can cherish forever.
      <br /><br />
      Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nec ultrices dui sapien eget mi.
      Diam sit amet nisl suscipit. Porttitor eget dolor morbi non.
    </div>
  </div>

  {/* Middle Section - Scrollable Line */}
  <div style={{
    flex: 0.05, // Reduce spacing
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginRight: "30px", // Reduced from 38px for better alignment
  }}>
    <div className="container" style={{
      position: 'relative',
      height: '50vh', // Reduced from 60vh
      width: '5px',
      backgroundColor: '#f3ece5',
    }}>
      <div style={{
        position: 'absolute',
        width: '20px',
        height: '20px',
        backgroundColor: 'black',
        borderRadius: '50%',
        left: '50%',
        transform: 'translateX(-50%)',
        top: `${dotPosition}px`,
      }}></div>
    </div>
  </div>

  {/* Right Section - Image */}
  <div style={{
    flex: '1',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '8%', // Reduced spacing from 10%
    height: '100%',
  }}>
    <img src={maheswaran} alt="research2" style={{ height: '65%', maxWidth: '120%' }} />
  </div>

</div>
</motion.div>




        </div>
        <Footer />

      </div>
    </>








  )
}

export default AboutUs
