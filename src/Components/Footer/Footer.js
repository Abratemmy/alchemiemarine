import React from 'react';
import './Footer.scss';
import { BsDot } from "react-icons/bs";
import { NavLink } from 'react-router-dom'
import { MdOutlineAddIcCall, MdMessage } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import logosm from '../../Assets/logosm.jpeg';
import Button from '../Button/Button'

function Footer() {
    return (
        <div className="FooterContainer">
            <svg
                className="footer-wave"
                viewBox="0 0 1440 100"
                preserveAspectRatio="none"
            >
                <path
                    d="M0,30 C480,120 960,0 1440,60 L1440,100 L0,100 Z"
                    fill="#f8fafc"
                ></path>
            </svg>
            <div className="container">
                <div className="row g-3 footer-row">
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="image">
                                <img src={logosm} alt="Alchemie Logo" />
                            </div>
                            <div className="text" style={{ padding: '10px 0px' }}>
                                Alchemie Marine Service is a trusted provider of comprehensive marine and logistics solutions across Africa.
                            </div>

                            <div style={{paddingTop: '10px'}}>
                                <Button 
                                    button2ndDesign
                                    buttonLink="/contact_us"
                                    text="Contact Us"
                                />
                            </div>
                            
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">Our Services</div>
                            <div className="footerLinkArea">
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/services#cleanEnergy" className="footer-link">Vessel charter</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/services#environmentalAdvisory" className="footer-link">Marine logistics </NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/services#engineering" className="footer-link">Crude evacuation</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/services#oemPartnerships" className="footer-link">Ship to ship operations </NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/services#procurement" className="footer-link">Procurement of marine equipment</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/services#campSupport" className="footer-link">Security, crew and other support services </NavLink>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">Useful links</div>
                            <div className="footerLinkArea">
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/about_us" className="footer-link">About Us</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/contact_us" className="footer-link">Contact Us</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/sustainability" className="footer-link">Sustainability</NavLink>
                                </div>
                                <div className="footerLink">
                                    <BsDot className='icon' /><NavLink to="/news&update" className="footer-link">News &amp; Update</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 footer-column">
                        <div className="content">
                            <div className="footer-title">Get in Touch</div>
                            <div className="footerCallArea">
                                <div className="footerCall">
                                    <MdOutlineAddIcCall className="call" />
                                    <div className="title">Call us
                                        <span>
                                           <a href="tel:(+234) 805 651 0738">(+234) 805 651 0738</a>
                                        </span>
                                    </div>
                                </div>

                                <div className="footerCall">
                                    <FaLocationDot className="call" />
                                    <div className="title">Office
                                        <span> Victoria Island Lagos</span>
                                    </div>
                                </div>

                                <div className="footerCall" >
                                <MdMessage className="call" />
                                <div className="title">Support
                                    <span> 
                                    <a href="maitTo:info@alchemiemarine.com">info@alchemiemarine.com</a>
                                </span>
                                </div>
                            </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div className="copyrightContainer">
                <div className='copyright'>&copy;copyright, all right reserved {(new Date().getFullYear())} </div>
            </div>
        </div>
    )
}

export default Footer