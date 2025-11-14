import React from 'react';
import './Home.scss';
import HomeBannerSlider from '../../Components/HomeBanner/HomeBanner'
import aboutImg from '../../Assets/image9.jpeg';
import Button from '../../Components/Button/Button';
import HomeService from './Homeservice';
import CounterComponent from '../../Components/CounterComponent/CounterComponent';


function Home() {
    return (
        <div>
            <HomeBannerSlider />

            {/* another session here */}

            <div className="homeAboutContainer">
                <div className="container">
                    <div className="about-wrapper">
                        <div className="about-image animate__animated animate__fadeInLeft">
                            <img src={aboutImg} alt="About Alchemie Marine Service" />
                        </div>
                        <div className="about-content animate__animated animate__fadeInRight">
                            <div className="sub-heading">Who We Are</div>
                            <div className="main-heading">
                                About <span>Alchemie Marine Service</span>
                            </div>
                            <p className="page-text">
                                Alchemie Marine Service is a trusted provider of comprehensive
                                marine and logistics solutions across Africa. We specialize in
                                vessel charter, crude evacuation, ship-to-ship operations,
                                procurement of marine equipment, and crew support services.

                            </p>
                            <div ></div>
                            <Button text="Learn More About us" buttonLink="/about_us" />
                        </div>
                    </div>
                </div>
            </div>

            {/* another section here for home service page */}
            <HomeService />

            {/* another section here */}
            <CounterComponent />

        </div>
    )
}

export default Home