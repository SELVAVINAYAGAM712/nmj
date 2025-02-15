
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
import lady from "../Assests/ladygoldabt.jpg";
import ringbox from "../Assests/ringBox.jpg";

import HeaderPage from '../widgets/HeaderPage';


const AboutUs = () => {
  const [dotPosition, setDotPosition] = useState(0);


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


  return (

    <>
      <HeaderPage labelName="About Us" />

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
                EXPERIENCE
              </div>

              <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
                Beautiful 18kt Solid Gold & <br />Precious Stones Exquisitely<br />
                Crafted By Hand
              </div>

              <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />

              <div style={{
                fontSize: '22px',
                fontFamily: 'serif',
                color: 'black',
                lineHeight: '1.5',
                marginTop: '20px'
              }}>
                Tempor id eu nisl nunc mi ipsum faucibus. Eget velit aliquet<br />
                sagittis id consectetur purus ut faucibus. Congue nisi vitae<br />
                suscipit tellus mauris a diam maecenas. Ridiculus mus<br />
                mauris vitae ultricies leo integer.
              </div>

              <button className="quote-button-aboutUs" style={{
                fontSize: '15px',
                marginTop: '20px',
                height: '60px',
                width: '190px'
              }}>Read More</button>
            </div>

            {/* Right Section - Image */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}>
              <img src={research2} alt="research2" style={{ height: '80%', maxWidth: '130%' }} />
            </div>
          </div>

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
              <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card1" style={{ height: '770px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '60%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={craft} alt="craft" style={{
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
                  textAlign: 'center'
                }}>
                  The Truth Is That<br /> Designing Custom <br />Jewelry
                </div>
                <img src={divider} alt="divider" style={{
                  height: '22px',
                  width: '70px',
                  position: 'absolute',
                  top: '70%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '80%',
                  fontSize: '20px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Lorem ipsum dolor sit amet,<br />
                  consectetur adipiscing elit. Ut elit<br />
                  tellus, luctus nec ullamcorper mattis,<br />
                  pulvinar dapibus leo.
                </div>
              </div>

              {/* Card 2 */}
              <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card2" style={{ height: '770px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '60%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={research} alt="research" style={{
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
                  textAlign: 'center'
                }}>
                  Highest Quality<br />Diamonds &<br /> Gemstones
                </div>
                <img src={divider} alt="divider" style={{
                  height: '22px',
                  width: '70px',
                  position: 'absolute',
                  top: '70%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '80%',
                  fontSize: '20px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Lorem ipsum dolor sit amet,<br />
                  consectetur adipiscing elit. Ut elit<br />
                  tellus, luctus nec ullamcorper mattis,<br />
                  pulvinar dapibus leo.
                </div>
              </div>
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
              <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card1" style={{ height: '770px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '60%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={craft} alt="craft" style={{
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
                  textAlign: 'center'
                }}>
                  The Truth Is That<br /> Designing Custom <br />Jewelry
                </div>
                <img src={divider} alt="divider" style={{
                  height: '22px',
                  width: '70px',
                  position: 'absolute',
                  top: '70%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '80%',
                  fontSize: '20px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Lorem ipsum dolor sit amet,<br />
                  consectetur adipiscing elit. Ut elit<br />
                  tellus, luctus nec ullamcorper mattis,<br />
                  pulvinar dapibus leo.
                </div>
              </div>

              {/* Card 2 */}
              <div style={{
                flex: 1,
                position: 'relative',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}>
                <img src={cardsNew} alt="card2" style={{ height: '770px', width: '100%' }} />
                <img src={whiteScreen} alt="overlay" style={{
                  width: '60%',
                  height: '42%',
                  position: 'absolute',
                  top: '40px'
                }} />
                <img src={research} alt="research" style={{
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
                  textAlign: 'center'
                }}>
                  Highest Quality<br />Diamonds &<br /> Gemstones
                </div>
                <img src={divider} alt="divider" style={{
                  height: '22px',
                  width: '70px',
                  position: 'absolute',
                  top: '70%'
                }} />
                <div style={{
                  position: 'absolute',
                  top: '80%',
                  fontSize: '20px',
                  fontFamily: 'serif',
                  color: 'white',
                  textAlign: 'center'
                }}>
                  Lorem ipsum dolor sit amet,<br />
                  consectetur adipiscing elit. Ut elit<br />
                  tellus, luctus nec ullamcorper mattis,<br />
                  pulvinar dapibus leo.
                </div>
              </div>


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
              Our History
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
              Out elit tellus, luctus nec ullamcorper mattis.</div>
          </>
          {/* 5th Card Section  */}
          <div style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            backgroundColor: '#f9f8f4',
            // marginTop:'3%'
          }}>

            {/* Left Section - Image */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginLeft: '10%',
              marginBottom: '15%'

            }}>
              <img src={lady} alt="research2" style={{ height: '85%', maxWidth: '140%' }} />
            </div>

            <div
              style={{
                flex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "7px",
                marginBottom: '18%'

              }}
            >
              {/* Scrollable Line with 65% Height */}
              <div
                className="container"
                style={{
                  position: "relative",
                  height: "60vh", // Line height is 65% of viewport height
                  width: "5px",
                  backgroundColor: "#f3ece5",
                }}
              >
                {/* Moving Dot with 65% of line height */}
                <div
                  style={{
                    position: "absolute",
                    width: "20px",
                    height: "20px",
                    backgroundColor: "black",
                    borderRadius: "50%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    top: `${dotPosition}px`, // Moves with cursor inside the 65vh area
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
              padding: '5%',
              marginBottom: '15%',
              marginRight: '50px'

            }}>
              <div style={{ fontSize: '38px', fontFamily: 'serif', color: '#2c2c2c', fontWeight: 'bold' }}>
                How It All Began
              </div>

              <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#2c2c2c', marginTop: '10px', lineHeight: '1.6' }}>
                Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Egestas pretium aenean pharetra magna ac
                placerat vestibulum. Quis vel eros donec ac odio tempor orci dapibus ultrices.
                <br /><br />
                Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nec ultrices dui sapien eget mi.
                Diam sit amet nisl suscipit. Porttitor eget dolor morbi non.
              </div>
            </div>
          </div>


          {/* 6th Card Section  */}
          <div style={{
            display: 'flex',
            height: '100vh',
            width: '100%',
            backgroundColor: '#f9f8f4',
            marginTop: '-20%'
          }}>

            {/* Left Section - Text Content */}
            <div style={{
              flex: '1',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start', // Adjust if you want left alignment
              padding: '5%',
            }}>
              <div style={{ fontSize: '38px', fontFamily: 'serif', color: '#2c2c2c', fontWeight: 'bold' }}>
                New Store In New York
              </div>

              <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#2c2c2c', marginTop: '10px', lineHeight: '1.6' }}>
                Scelerisque felis imperdiet proin fermentum leo vel orci porta non. Egestas pretium aenean pharetra magna ac
                placerat vestibulum. Quis vel eros donec ac odio tempor orci dapibus ultrices.
                <br /><br />
                Sapien pellentesque habitant morbi tristique senectus et netus et malesuada. Nec ultrices dui sapien eget mi.
                Diam sit amet nisl suscipit. Porttitor eget dolor morbi non.
              </div>
            </div>

            {/* Scrollable Line with 65% Height */}
            <div style={{
              flex: 1,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginBottom: '0', // Remove marginBottom to prevent misalignment
              marginRight: "38px",

            }}>
              <div className="container" style={{
                position: 'relative',
                height: '60vh', // Line height is 60% of viewport height
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
                  top: `${dotPosition}px`, // Moves with cursor inside the 60vh area
                }}></div>
              </div>
            </div>

            {/* Right Section - Image */}
            <div style={{
              flex: '1',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              marginRight: '10%',
              height: '100%',
            }}>
              <img src={ringbox} alt="research2" style={{ height: '65%', maxWidth: '140%' }} />
            </div>

          </div>




        </div>

      </div>
    </>








  )
}

export default AboutUs
