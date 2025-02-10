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
    // 1st card
    <div>
      <div style={{ position: 'relative', height: '530px', color: '#f9f8f4' }}>

        {/* <img 
        src={backgroundRing} 
        alt="divider" 
        style={{
          height: '130px',
          width: '120px',
          // marginTop: '20px',
          zIndex: 1, 
          position: 'absolute',
          top: '35px',   
          left: '65px', 
          color:'#f3ebe2'
        }} 
      /> */}

        <div
          style={{
            position: 'absolute',
            top: '120px',
            left: '155px',
            fontSize: '16px',
            fontFamily: 'serif',
            color: '#b98d58'


          }}
        >
          EXPERIENCE
        </div>

        <div
          style={{
            position: 'absolute',
            top: '150px',
            left: '150px',
            fontSize: '36px',
            fontFamily: 'serif',
            color: 'black'
          }}
        >
          Beautiful 18kt Solid Gold & <br />Precious Stones Exquisitely<br />
          Crafted By Hand
        </div>
        {/* Divider Logo */}
        <img
          src={divider}
          alt="divider"
          style={{
            height: '25px',
            width: '70px',
            marginTop: '20px',
            position: 'absolute',
            top: '290px',
            left: '150px',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '370px',
            left: '150px',
            fontSize: '20px',
            fontFamily: 'serif',
            color: 'black',
            lineHeight: '1.5'
          }}
        >
          Tempor id eu nisl nunc mi ipsum faucibus. Eget velit aliquet<br />
          sagittis id consectetur purus ut faucibus. Congue nisi vitae<br /> suscipit
          tellus mauris a diam maecenas. Ridiculus mus<br />
          mauris vitae ultricies leo integer.
        </div>

        <div
          style={{
            position: 'absolute',
            top: '530px',
            left: '150px',

          }} >
          <button className="quote-button-aboutUs" style={{ fontSize: '15px' }}>Read More</button>
        </div>



        <div style={{ display: 'flex', justifyContent: 'flex-end', position: 'relative', left: '150px', top: '20px' }}>
          <img
            src={research2}
            alt="research2"
            style={{ height: '650px', position: 'absolute', zIndex: 1 }}
          />
        </div>

      </div>


      {/* 2nd card  */}
      <div style={{
        position: 'relative',
        height: '830px',
        backgroundColor: '#f3ebe2',
        top: '170px',
        // width:'full',
      }}>
        <div style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'relative',
          top: '40px',
          width: '77%',
          margin: '0 auto'
        }}>
          {/* 1st  */}
          <>
            <img
              src={cardsNew}
              alt="research2"
              style={{ height: '770px', width: '392px' }}
            />
            <img
              src={whiteScreen}
              alt="whiteScreen"
              style={{
                width: '25%',
                height: '42%',
                position: 'absolute',
                top: '40px',
                left: '40px',
              }}
            />
            <img
              src={craft}
              alt="craft"
              style={{
                width: '24%',
                height: '41%',
                position: 'absolute',
                top: '45px',
                left: '46px',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '52%',
                left: '50px',
                fontSize: '36px',
                fontFamily: 'serif',
                color: 'white',
                textAlign: 'center'

              }}
            >
              The Truth Is That<br /> Designing Custom <br />Jewelry
            </div>
            <img
              src={divider}
              alt="divider"
              style={{
                height: '22px',
                width: '70px',
                marginTop: '20px',
                position: 'absolute',
                top: '70%',
                left: '12%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '80%',
                left: '50px',
                fontSize: '20px',
                fontFamily: 'serif',
                color: 'white',
                textAlign: 'center'

              }}
            >
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit. Ut elit<br />
              tellus, luctus nec ullamcorper mattis,<br />
              pulvinar dapibus leo.

            </div>
          </>
          {/* 2nd  */}
          <>
            <img
              src={cardsNew}
              alt="research2"
              style={{ height: '770px', width: '392px' }}
            />
            <img
              src={whiteScreen}
              alt="whiteScreen"
              style={{
                width: '25%',
                height: '42%',
                position: 'absolute',
                top: '40px',
                left: '37.5%',
              }}
            />
            <img
              src={research}
              alt="research"
              style={{
                width: '24%',
                height: '41%',
                position: 'absolute',
                top: '45px',
                left: '38%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '52%',
                left: '42%',
                fontSize: '36px',
                fontFamily: 'serif',
                color: 'white',
                textAlign: 'center'

              }}
            >
              Highest Quality<br />Diamonds &<br /> Gemstones
            </div>
            <img
              src={divider}
              alt="divider"
              style={{
                height: '22px',
                width: '70px',
                marginTop: '20px',
                position: 'absolute',
                top: '70%',
                left: '48%',
              }}
            />
            <div
              style={{
                position: 'absolute',
                top: '80%',
                left: '39%',
                fontSize: '20px',
                fontFamily: 'serif',
                color: 'white',
                textAlign: 'center'

              }}
            >
              Lorem ipsum dolor sit amet,<br />
              consectetur adipiscing elit. Ut elit<br />
              tellus, luctus nec ullamcorper mattis,<br />
              pulvinar dapibus leo.

            </div>
          </>

          <img
            src={cardsNew}
            alt="cardsNew"
            style={{ height: '770px', width: '392px' }}
          />
          <img
            src={whiteScreen}
            alt="whiteScreen"
            style={{
              width: '25%',
              height: '42%',
              position: 'absolute',
              top: '40px',
              left: '72%',
            }}
          />
          <img
            src={craft2}
            alt="craft2"
            style={{
              width: '24%',
              height: '41%',
              position: 'absolute',
              top: '45px',
              left: '72.5%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '52%',
              left: '73%',
              fontSize: '36px',
              fontFamily: 'serif',
              color: 'white',
              textAlign: 'center'

            }}
          >
            We Create<br />Handmade,Engraved<br /> Jewelry
          </div>
          <img
            src={divider}
            alt="divider"
            style={{
              height: '22px',
              width: '70px',
              marginTop: '20px',
              position: 'absolute',
              top: '70%',
              left: '82%',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '80%',
              left: '73%',
              fontSize: '20px',
              fontFamily: 'serif',
              color: 'white',
              textAlign: 'center'

            }}
          >
            Lorem ipsum dolor sit amet,<br />
            consectetur adipiscing elit. Ut elit<br />
            tellus, luctus nec ullamcorper mattis,<br />
            pulvinar dapibus leo.

          </div>
        </div>

        {/* White screen */}

        {/* <div style={{ 
    display: 'flex', 
    justifyContent: 'space-between', 
    alignItems: 'center', 
    position: 'relative', 
    top: '10px', 
    width: '80%', 
    margin: '0 auto' 
  }}>
    <img
      src={whiteScreen}
      alt="whiteScreen"
      style={{ height: '690px', width: '370px' }}
    />
    
    <img
      src={whiteScreen}
      alt="whiteScreen"
      style={{ height: '690px', width: '370px' }}
    />
    <img
      src={whiteScreen}
      alt="whiteScreen"
      style={{ height: '690px', width: '370px' }}
    />
  </div> */}

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
