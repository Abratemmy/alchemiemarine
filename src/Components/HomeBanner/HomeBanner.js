import React, { useState } from 'react';
import Slider from "react-slick";
import './HomeBanner.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Button from '../Button/Button'


function SliderComponent() {
    const [activeSlide, setActiveSlide] = useState(0);
    const settings = {
        dots: false,
        fade: true,
        infinite: true,
        speed: 2000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 15000,
        pauseOnHover: false,
        beforeChange: (_, next) => setActiveSlide(next),
    };
    const [progress, setProgress] = useState(0);

    React.useEffect(() => {
        let start = 0;
        const duration = 15000; // same as autoplaySpeed
        const interval = 50; // update every 50ms
        const increment = (interval / duration) * 100;

        const timer = setInterval(() => {
            start += increment;
            setProgress(start);
            if (start >= 100) {
                clearInterval(timer);
            }
        }, interval);

        return () => clearInterval(timer);
    }, [activeSlide]);

    return (
        <div className="sliderComponentWrapper">
            <div className="slider-container">
                <Slider {...settings}>
                    <div className={`SliderWrapper animate__animated ${activeSlide === 0 ? "animate__rotateIn " : ""
                        }`}>
                        <div className="container">
                            <div className="sliderContent">
                                <div
                                    className={`subTopic animate__animated ${activeSlide === 0 ? "animate__bounceInDown animate__delay-2s" : ""
                                        }`}
                                >
                                    <div className="line"></div>Alchemie Marine Services
                                </div>
                                <div
                                    className={`topic animate__animated ${activeSlide === 0 ? "animate__fadeInDown animate__delay-1s " : ""
                                        }`}
                                >
                                    Integrated Marine Services for Modern Offshore Operations
                                </div>
                                <div className={`text animate__animated ${activeSlide === 0 ? "animate__fadeInUp animate__delay-2s" : ""
                                    }`}
                                >
                                    Combining vessel charter, logistics, and operational support under one roof — engineered for safety, performance, and efficiency at sea.
                                </div>
                                <div className={`sliderButton animate__animated ${activeSlide === 0 ? "animate__fadeInUp animate__delay-3s" : ""
                                    }`}>
                                    <Button text="More About Us"
                                        buttonLink="/about_us"
                                    />
                                    <Button text="Our Services "
                                        buttonLink="/services"
                                        button2ndDesign
                                    />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className={`SliderWrapper SliderWrapper2 animate__animated ${activeSlide === 1 ? "animate__zoomIn" : ""
                        }`}>
                        <div className="container">
                            <div className="sliderContent">
                                <div className={`subTopic animate__animated ${activeSlide === 1 ? "animate__bounceInDown animate__delay-2s" : ""
                                    }`}
                                >
                                    <div className="line"></div>Alchemie Marine Services
                                </div>
                                <div className={`topic animate__animated ${activeSlide === 1 ? "animate__fadeInDown animate__delay-1s" : ""
                                    }`}
                                >
                                    Comprehensive Marine & Offshore Solutions
                                </div>
                                <div className={`text animate__animated ${activeSlide === 1 ? "animate__fadeInUp animate__delay-2s" : ""
                                    }`}
                                >
                                    From vessel charter and logistics to crude evacuation, procurement, and crew support — we deliver end-to-end marine services with safety, precision, and reliability.
                                </div>
                                <div className={`sliderButton animate__animated ${activeSlide === 1 ? "animate__fadeInUp animate__delay-3s" : ""
                                    }`}>
                                    <Button text="More About Us"
                                        buttonLink="/about_us"
                                    />
                                    <Button text="Our Services "
                                        buttonLink="/services"
                                        button2ndDesign
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </Slider>

                <div className="progress-bar-wrapper">
                    <div
                        className="progress-bar"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
            </div>
        </div>
    )
}

export default SliderComponent