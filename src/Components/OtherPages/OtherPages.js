import React from 'react';
import './OtherPages.scss';
import {useNavigate} from 'react-router-dom'

function OtherPages({serviceList, pageName, serviceTitle}) {
    const navLink = useNavigate()

    const goToHome=() => {
        navLink('/')
    }
  return (
    <div className="otherPagesContainer">
        <div className="container">
            <div className="content">
                <div className="title animate__animated animate__fadeInDown animate__delay-1s" >
                    {serviceList ? serviceTitle : pageName }
                     
                </div>
                <div className="bottom animate__animated animate__fadeInUp animate__delay-1s">
                    <div className="navLinks" onClick={goToHome}>Home</div>
                    <div className="text">{pageName}</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OtherPages