import React from 'react'
import { IoLogInOutline } from "react-icons/io5";
import "./Button.scss";
import { NavLink } from 'react-router-dom'

function Button({ text, button2ndDesign, buttonLink, button3rdDesign }) {
    return (
        <NavLink to={buttonLink}
            className={button2ndDesign ? "ButtonContainer ButtonContainer2" :
                button3rdDesign ? "ButtonContainer ButtonContainer3" : "ButtonContainer"}>
            <IoLogInOutline className="loginIcon" />
            <div className="buttonText">{text} </div>
        </NavLink>
    )
}

export default Button