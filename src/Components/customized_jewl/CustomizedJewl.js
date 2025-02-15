import React from 'react'
import research2 from '../Assests/research2.jpg'
import divider from "../Assests/divider.png";
import { useNavigate } from 'react-router-dom';
import HeaderPage from '../widgets/HeaderPage';





const CustomizedJewl = () => {
  const navigate = useNavigate()

    return (
        <div>

            <HeaderPage 
                labelName="Customized Jewellery"
                onClickBlog={() => { }}
                onClickContact={() => { }}
                onClickHome={() => navigate('/')}
                onClickAbout={() => navigate('/aboutUs-page', { state: { label: 'About Us' } })}
                />

            <div>
                {/* 1st Card  */}
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


                            <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
                                Please, Contact Us For Assistance Regarding Employment
                            </div>

                            <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />

                            <div style={{
                                fontSize: '22px',
                                fontFamily: 'serif',
                                color: 'black',
                                lineHeight: '1.5',
                                marginTop: '20px'
                            }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.

                                Feugiat nibh sed pulvinar proin gravida hendrerit lectus. In vitae turpis massa sed elementum tempus. Enim neque volutpat ac tincidunt vitae semper quis lectus.
                            </div>

                            <button className="quote-button-aboutUs" style={{
                                fontSize: '15px',
                                marginTop: '20px',
                                height: '60px',
                                width: '190px'
                            }}>Contact Us</button>
                        </div>

                        {/* Right Section - Image */}
                        <div style={{
                            flex: '1',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            marginLeft: '50px'
                        }}>
                            <img src={research2} alt="research2" style={{ height: '80%', maxWidth: '130%' }} />
                        </div>
                    </div>
                </div>
                {/* 2nd Card  */}
                <div style={{
                    display: 'flex',
                    height: '100vh',
                    width: '100%',
                    backgroundColor: '#f9f8f4'
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
                        paddingLeft: '15%'
                    }}>
                        <div style={{ fontSize: '20px', fontFamily: 'serif', color: '#b98d58' }}>
                            OUR SERVICES
                        </div>

                        <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
                            Request A Repair
                        </div>

                        <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />

                        <div style={{
                            fontSize: '22px',
                            fontFamily: 'serif',
                            color: 'black',
                            lineHeight: '1.5',
                            marginTop: '20px'
                        
                        }}>
                            Congue nisi vitae suscipit tellus mauris a diam maecenas.<br />
                            Ridiculus mus mauris vitae ultricies leo integer.<br/><br/>

                            <div>
                               ➤ Professional jewelry resizing, cleaning, polishing and repair<br/>
                               ➤ Watch battery replacement, resizing and maintenance<br/>
                               ➤ Leather repair<br/><br/>


                               For other servicing questions, please contact 
                                </div>
                        </div>

                        <button className="quote-button-aboutUs" style={{
                            fontSize: '15px',
                            marginTop: '20px',
                            height: '60px',
                            width: '190px'
                        }}>Read More</button>
                    </div>
                </div>
                {/* 3rd Card  */}
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


                            <div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px',color: '#b98d58' }}>
                                Our Services
                            </div>
                           < div style={{ fontSize: '38px', fontFamily: 'serif', color: 'black', marginTop: '10px' }}>
                           Request A Repair                            </div>

                            <img src={divider} alt="divider" style={{ height: '25px', width: '70px', marginTop: '20px' }} />

                            <div style={{
                                fontSize: '22px',
                                fontFamily: 'serif',
                                color: 'black',
                                lineHeight: '1.5',
                                marginTop: '20px'
                            }}>
                               Nostrud aute ea voluptate consectetur irure et aute et voluptate commodo duis. Et minim voluptate voluptate veniam magna excepteur qui excepteur aliquip deserunt pariatur.
                            </div>

                          
                        </div>

                        {/* Right Section - Image */}
                            <div style={{
                                flex: '1',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                marginLeft: '50px'
                            }}>
                                <img src={research2} alt="research2" style={{ height: '80%', maxWidth: '130%' }} />
                            </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default CustomizedJewl
