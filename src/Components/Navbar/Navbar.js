import React, { useState, useEffect } from 'react';
import './Navbar.scss';
import { MdOutlineAddIcCall, MdEmail, MdAccessTime } from "react-icons/md";
import { NavLink, useLocation } from 'react-router-dom';
import { IoIosArrowDown } from "react-icons/io";
import { FaBars } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import logo from '../../Assets/logo.png'
import logosm from '../../Assets/logosm.jpeg'


function Navbar() {
    const [navbarScroll, setNavbarScroll] = useState(false);
    const changeBackground = () => {
        // the 130 below means where you want the background to change when scroll
        // it is advisable to put the background at the height of the navbar
        if (window.scrollY >= 130) {
            setNavbarScroll(true);
        } else {
            setNavbarScroll(false)
        }
    }
    window.addEventListener('scroll', changeBackground)
    const [click, setClick] = useState(false);

    // Prevent body scroll when menu is open
    useEffect(() => {
        if (click) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [click])


    const location = useLocation();

    // check if the current route is one of the dropdown items
    const isAboutActive =
        location.pathname === "/about_us" || location.pathname === "/our_team";

    // mobile toggle menu state
    const [mobileAboutDropdown, setMobileAboutDropdown] = useState(false);
    const [mobileServiceDropdown, setMobileServiceDropdown] = useState(false);

    const handleClick = () => {
        setClick(!click);
        setMobileAboutDropdown(false);
        setMobileServiceDropdown(false);
    };
    return (
        <div className="navbarContainer">
            {navbarScroll ?
                <div className="whenScroll">
                    <div className="container" style={{ background: '#fff' }}>
                        <div className="navbarSession">
                            <NavLink to="/" className="imageContainer">
                                <img src={logo} alt="Alchemie marine service" />
                            </NavLink>

                            <ul className="nav-menu active">
                                <li className='nav-item'>
                                    <NavLink exact to="/" className="nav-links" >Home</NavLink>
                                </li>

                                <li className={`nav-item dropdown-parent ${isAboutActive ? "active" : ""}`}>
                                    <span className="nav-links">About Us</span>

                                    <div className="dropdown">
                                        <ul className="dropdown-content">
                                            <li>
                                                <NavLink to="/about_us" className="nav-links">Our Company</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/our_team" className="nav-links">Our Team</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>

                                <li className='nav-item'>
                                    <NavLink to="/services" className="nav-links" >Services</NavLink>

                                    <div className="dropdown">
                                        <ul className="dropdown-content">
                                            <li>
                                                <NavLink to="/services/alternative-crude-evacuation" className="nav-links">Alternative Crude Evacuation</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/services/procurement-logistics" className="nav-links">Vessel Charter & Marine Procurement</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/services/marine-logistics" className="nav-links">Marine Logistics</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/services/security-and-support" className="nav-links">Marine Security and Support</NavLink>
                                            </li>
                                            <li>
                                                <NavLink to="/services/consultancy-service" className="nav-links">Marine Consultancy</NavLink>
                                            </li>
                                        </ul>
                                    </div>
                                </li>


                                <li className='nav-item'>
                                    <NavLink to="/blog" className="nav-links">Blog</NavLink>
                                </li>

                                <li className='nav-item'>
                                    <NavLink to="/contact_us" className="nav-links" >Contact</NavLink>
                                </li>
                            </ul>

                            <div className="hamburger" onClick={handleClick} >
                                <FaBars className="hamburgerIcon" />
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className=" whenNotScroll">
                    <div className="topNav">
                        <div className='container'>
                            <div className='topNavContent'>
                                <div className="content">
                                    <div className="iconContainer"><MdOutlineAddIcCall className="icon" /></div>
                                    <div className="text">
                                        <a href="tel:(+234) 805 651 0738">(+234) 805 651 0738</a>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="iconContainer"><MdEmail className="icon" /></div>
                                    <div className="text">
                                        <a href="maitTo:info@alchemiemarine.com">info@alchemiemarine.com</a>
                                    </div>
                                </div>

                                <div className="content">
                                    <div className="iconContainer"><MdAccessTime className="icon" /></div>
                                    <div className="text">
                                        Mon to Fri : 9am to 6pm
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='container'>
                        <div className="navbarSession mainNavbar">
                            <NavLink to="/" className="imageContainer">
                                <img src={logo} alt="Alchemie marine service" />
                            </NavLink>
                            <div className="menuList">
                                <ul className="nav-menu active">
                                    <li className='nav-item'>
                                        <NavLink exact to="/" className="nav-links">Home</NavLink>
                                    </li>

                                    <li className={`nav-item dropdown-parent ${isAboutActive ? "active" : ""}`}>
                                        <span className="nav-links">About Us</span>

                                        <div className="dropdown">
                                            <ul className="dropdown-content">
                                                <li>
                                                    <NavLink to="/about_us" className="nav-links">Our Company</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/our_team" className="nav-links">Our Team</NavLink>
                                                </li>
                                            </ul>
                                        </div>
                                    </li>

                                    <li className='nav-item'>
                                        <NavLink to="/services" className="nav-links">Services</NavLink>
                                        <div className="dropdown">
                                            <ul className="dropdown-content">
                                                <li>
                                                    <NavLink to="/services/alternative-crude-evacuation" className="nav-links">Alternative Crude Evacuation</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/services/procurement-logistics" className="nav-links">Vessel Charter & Marine Procurement</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/services/marine-logistics" className="nav-links">Marine Logistics</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/services/security-and-support" className="nav-links">Marine Security and Support</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to="/services/consultancy-service" className="nav-links">Marine Consultancy</NavLink>
                                                </li>
                                            </ul>
                                        </div>

                                    </li>

                                    <li className='nav-item'>
                                        <NavLink to="/blog" className="nav-links">Blog</NavLink>
                                    </li>

                                    <li className='nav-item'>
                                        <NavLink to="/contact_us" className="nav-links">Contact</NavLink>
                                    </li>

                                </ul>

                                <div className="hamburger" onClick={handleClick} >
                                    <FaBars className="hamburgerIcon" />
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            }

            {/* Overlay */}
            <div className={`overlay ${click ? "show" : ""}`} onClick={handleClick}></div>

            {/* mobile menu */}
            <div className={`mobileMenu ${click ? "show" : ""}`}>
                <div className="closeMobileMenu" onClick={() => {
                    handleClick();
                }}>
                    <div className='closeIcon'><IoMdClose className="icon" /></div>
                </div>
                <div className="imageContainer">
                    <img src={logosm} alt="Alchemie marine service" />
                </div>
                <ul className="nav-menu">
                    <li className="nav-item">
                        <NavLink exact="true" to="/" className="nav-links" onClick={handleClick}>Home</NavLink>
                    </li>
                    <li className={`nav-item dropdown-parent ${isAboutActive ? "active" : ""}`}>
                        <div className="nav-links mobileDropdown"
                            onClick={() => {
                                setMobileAboutDropdown(!mobileAboutDropdown)
                                setMobileServiceDropdown(false);
                            }}
                        >
                            About Us
                            <span><IoIosArrowDown className='icon' /></span>
                        </div>

                        {mobileAboutDropdown &&
                            <div className="dropdown">
                                <ul className="dropdown-content">
                                    <li>
                                        <NavLink to="/about_us" className="nav-links" onClick={handleClick}>Our Company</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/our_team" className="nav-links" onClick={handleClick}>Our Team</NavLink>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className="nav-item">
                        <NavLink to="/services" className="nav-links mobileDropdown"
                            onClick={() => {
                                setMobileServiceDropdown(!mobileServiceDropdown)
                                setMobileAboutDropdown(false);
                            }}
                        >
                            Services
                            <span><IoIosArrowDown className='icon' /></span>
                        </NavLink>

                        {mobileServiceDropdown &&
                            <div className="dropdown">
                                <ul className="dropdown-content">
                                    <li>
                                        <NavLink to="/services/alternative-crude-evacuation" className="nav-links" onClick={handleClick}>Alternative Crude Evacuation</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/services/procurement-logistics" className="nav-links" onClick={handleClick}>Vessel Charter & Marine Procurement</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/services/marine-logistics" className="nav-links" onClick={handleClick}>Marine Logistics</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/services/security-and-support" className="nav-links" onClick={handleClick}>Marine Security and Support</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to="/services/consultancy-service" className="nav-links" onClick={handleClick}>Marine Consultancy</NavLink>
                                    </li>
                                </ul>
                            </div>
                        }
                    </li>
                    <li className='nav-item'>
                        <NavLink to="/blog" className="nav-links" onClick={handleClick}>Blog</NavLink>
                    </li>

                    <li className="nav-item">
                        <NavLink to="/contact_us" className="nav-links" onClick={handleClick}>Contact</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar