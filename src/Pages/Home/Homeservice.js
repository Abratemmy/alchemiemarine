import React from "react";
import './HomeService.scss'
import Button from '../../Components/Button/Button';
import ServiceData from '../../Components/ServiceData'

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, A11y, Navigation } from "swiper/modules";

// Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";



const HomeService = () => {
    return (
        <section className="service-section" id="services">
            <svg class="curve-divider" viewBox="0 0 1440 100" preserveAspectRatio="none">
                <path d="M0,60 C480,120 560,0 1440,60 L1440,20 L0,10 Z" fill="#233a4de5"></path>
            </svg>

            <div className="pageoverlay"> </div>

            <div className="container">
                <div className="row g-4">
                    <div className="col-lg-4 col-md-12 col-sm-12">
                        {/* LEFT PANEL */}
                        <div className="service-intro ">
                            <div className="sub-heading">What we offer</div>
                            <div className="main-heading">
                                SPECIAL <span>SERVICES</span>
                            </div>
                            <div className="page-text">
                                Globally recognized for our ability to handle every aspect of marine
                                logistics and support operations, Alchemie Marine Service ensures each
                                client’s unique needs are met with professionalism, precision, and care.
                            </div>

                            <div className="service-dots">
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                            <Button text="our services" button2ndDesign buttonLink="/services" />
                        </div>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="col-lg-8 col-md-12 col-sm-12">
                        <div className="service-slider">
                            <div className="custom-nav">
                                <button className="nav-prev custom-nav-btn"><IoIosArrowBack /></button>
                                <button className="nav-next custom-nav-btn"><IoIosArrowForward /></button>
                            </div>

                            <Swiper
                                modules={[Navigation, Autoplay, A11y]}
                                slidesPerView={2}
                                spaceBetween={20}
                                loop={true}
                                autoplay={{ delay: 5000, disableOnInteraction: false }}
                                navigation={{
                                    nextEl: ".nav-next",
                                    prevEl: ".nav-prev"
                                }}
                                pagination={false}     // bullets OFF
                                breakpoints={{
                                    0: { slidesPerView: 1 },      // phones
                                    992: { slidesPerView: 2 },    // tablets
                                }}
                                className="serviceCard-swiper"
                            >
                                {ServiceData.map((srv, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="service-card" key={index}>
                                            <img src={srv.image} alt={srv.title} />
                                            <div className="service-info">
                                                <h3>{srv.title}</h3>
                                                <p>{srv.description}</p>
                                                <a href={srv.href} className="read-more">
                                                    Read more →
                                                </a>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default HomeService;
