import React from 'react';
import './About.scss';
import OtherPages from '../../Components/OtherPages/OtherPages'
import { FaCheck } from "react-icons/fa";
import aboutImg from '../../Assets/image10.jpeg'
import { SiAirplayaudio, SiAnkermake, SiMonero, SiLinuxserver } from "react-icons/si";
import { MdOutlineSafetyCheck } from "react-icons/md";
import { FaPersonDrowning, FaPeopleGroup, FaHandshake } from "react-icons/fa6";

function About() {
    return (
        <div>
            <OtherPages
                pageName="About Us"
            />

            <div className="aboutSession">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='image'>
                                <img src={aboutImg} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className='aboutContent'>
                                <div className="sub-heading">About Alchemie Marine Services (AMS)</div>
                                <div className="main-heading">
                                    Delivering Trusted Marine and Offshore Solutions with <span>Excellence and Integrity</span>
                                </div>

                                <div className='page-text'>
                                    AMS is a leading Nigerian-owned company in Maritime Operations Support and Security Services, offering reliable, comprehensive, and cost-effective first-class solutions to our clients.
                                </div>

                                <div className='page-text aboutText'>
                                    With a focus on reliability, safety, and cost-effectiveness, AMS provides comprehensive solutions tailored to meet the complex demands of our clients. Our reputation is built on:
                                </div>

                                <div className='page-text aboutText'>
                                    <ul>
                                        <li><FaCheck className='icon' /><span>A team of seasoned professionals with proven expertise in safety and project management</span></li>
                                        <li><FaCheck className='icon' /><span>World-class service delivery through strategic mobilization of equipment and skilled crew</span></li>
                                        <li><FaCheck className='icon' /><span>Timely execution of challenging projects—on budget and to the highest standards</span></li>

                                    </ul>
                                </div>

                                <div className='page-text aboutText'>
                                    At AMS, we don’t just complete projects—we build trust, deliver excellence, and set new benchmarks in the industry.
                                </div>

                            </div>
                        </div>
                    </div>
                </div>

                {/* vision and mission container */}
                <div className="visionMission">
                    <div className="visionContainer textContainer">
                        <div className="container">
                            <SiAirplayaudio className='icon' />
                            <div className="sub-heading">Our Vision</div>
                            <div className='page-text'>
                                To earn global respect by delivering innovative, sustainable, and safe logistics solutions that elevate industry standards in the oil & gas sector.
                            </div>
                        </div>
                    </div>

                    <div className="missionContainer textContainer">
                        <div className="container">
                            <SiAnkermake className='icon' />
                            <div className="sub-heading">Our Mission</div>
                            <div className='page-text'>
                                We are committed to delivering world-class transshipment operations, procurement, and charter services—punctually, cost-effectively, and in full compliance with global safety and quality standards.
                            </div>
                        </div>
                    </div>
                </div>


                {/* another section for core values here */}
                <div className="coreValueContainer">
                    <div className="container">
                        <div className="topContainer">
                            <div className="sub-heading">Our Core Value</div>
                            <h2 className="main-heading">We uphold the following values in all our dealings <span>with our clients! </span></h2>
                        </div>

                        <div className="row g-3" style={{ padding: '40px 0px' }}>
                            <div className="col-md-6 col-lg-4">
                                <div className="valueContainerCard">
                                    <div className="content">
                                        <div className="iconCard">
                                            <FaPersonDrowning className="icon" />
                                        </div>

                                        <div className="cardTitle">Client Satisfaction</div>
                                        <div className="text">Our clients are at the heart of everything we do. We are committed to understanding their unique needs and delivering solutions that exceed expectations.</div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-6 col-lg-4">
                                <div className="valueContainerCard valueContainerCard2">
                                    <div className="content">
                                        <div className="iconCard">
                                            <FaPeopleGroup className="icon" />
                                        </div>

                                        <div className="cardTitle">Teamwork</div>
                                        <div className="text">We believe that success is built through collaboration. At Alchemie Marine Services, our diverse team works together with trust, respect, and shared purpose to achieve common goals. </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="valueContainerCard">
                                    <div className="content">
                                        <div className="iconCard">
                                            <SiLinuxserver className="icon" />
                                        </div>

                                        <div className="cardTitle">Quality Service Delivery </div>
                                        <div className="text">We are committed to delivering excellence in every operation. Our focus on quality ensures that every service meets the highest industry standards — from planning to execution.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="valueContainerCard valueContainerCard2">
                                    <div className="content">
                                        <div className="iconCard">
                                            <FaHandshake className="icon" />
                                        </div>

                                        <div className="cardTitle">Sustainability </div>
                                        <div className="text">We prioritize sustainable practices that protect our oceans and the environment. Through responsible operations, energy efficiency, and continuous improvement.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="valueContainerCard">
                                    <div className="content">
                                        <div className="iconCard">
                                            <MdOutlineSafetyCheck className="icon" />
                                        </div>

                                        <div className="cardTitle">Safety</div>
                                        <div className="text">Safety is at the core of everything we do. We maintain the highest safety standards in all operations, ensuring the protection of our people, assets, and the environment.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-4">
                                <div className="valueContainerCard valueContainerCard2">
                                    <div className="content">
                                        <div className="iconCard">
                                            <SiMonero className="icon" />
                                        </div>

                                        <div className="cardTitle">Cost Effectiveness </div>
                                        <div className="text">Our goal is to provide reliable marine solutions that are both efficient and economically beneficial to our clients.</div>

                                    </div>
                                </div>
                            </div>
                        </div>




                    </div>
                </div>
            </div>
        </div>
    )
}

export default About