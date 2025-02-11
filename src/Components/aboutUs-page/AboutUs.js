import React from 'react'
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


const AboutUs = () => {



  return (
    <div>
      
      <div style={{
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  backgroundColor: '#f9f8f4',
  margin: '0',
  padding: '0'
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
</div>



      <div style={{
        position: 'relative',
        height: '830px',
        backgroundColor: '#f9f8f4',
        top: '170px',
        // width:'full',
      }}>
        <img
          src={ringSingle}
          alt="ringSingle"
          style={{ height: '420px', width: '500px', position: 'absolute', left: '16%', top: '18% ' }}
        />
        <img
          src={pointergif}
          alt="pointergif"
          style={{ height: '70px', width: '70px', position: 'absolute', left: '36%', top: '10% ' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '19%',
            left: '36%',
            fontSize: '20px',
            fontFamily: 'serif',
            color: 'black',

          }}
        >
          Superb
        </div>
        <img
          src={pointergif}
          alt="pointergif"
          style={{ height: '70px', width: '70px', position: 'absolute', left: '16%', top: '60% ' }}
        />
        <div
          style={{
            position: 'absolute',
            top: '58%',
            left: '18%',
            fontSize: '20px',
            fontFamily: 'serif',
            color: 'black',

          }}
        >
          Quality
        </div>
        <img
          src={pointergif}
          alt="pointergif"
          style={{ height: '70px', width: '70px', position: 'absolute', left: '38%', top: '68% ' }}
        />

        {/* <img 
        src={diamondScroll} 
        alt="diamondScroll" 
        style={{
          height: '130px',
          width: '120px',
          // marginTop: '20px',
          position: 'absolute',
          top: '35px',   
          left: '60%', 
          color:'#f3ebe2'
        }} 
      /> */}

        <div
          style={{
            position: 'absolute',
            top: '150px',
            left: '53%',
            fontSize: '18px',
            fontFamily: 'serif',
            color: '#b98d58'


          }}
        >
          ADVANTAGES
        </div>
        <div
          style={{
            position: 'absolute',
            top: '24%',
            left: '53%',
            fontSize: '38px',
            fontFamily: 'serif',


          }}
        >
          A Unique Vintage Design Studio <br />That Offers Handmade Jewelry

        </div>
        <img
          src={divider}
          alt="divider"
          style={{
            height: '22px',
            width: '73px',
            marginTop: '20px',
            position: 'absolute',
            top: '38%',
            left: '53%',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '49%',
            left: '53%',
            fontSize: '24px',
            fontFamily: 'serif',


          }}
        >
          Hendrerit dolor magna eget est lorem ipsum dolor sit. Mattis rhoncus<br />
          urna neque viverra justo nec ultrices dui. Nullam ac tortor vitae purus<br />
          faucibus ornare suspendisse.

          <div style={{ lineHeight: '4.5' }}>
            Mollis aliquam ut porttitor leo a diam sollicitudin tempor.

          </div>

        </div>

      </div>


    </div>








  )
}

export default AboutUs
