import React from 'react'
import "./Footer.css"
import f_logo from "../Assets/logo_big.png"
import instagram from "../Assets/instagram_icon.png"
import pinterest from "../Assets/pintester_icon.png"
import whatsapp from '../Assets/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='f-logo'>
            <img src={f_logo} alt='' />
            <p>1 STOP</p>
        </div>
        <ul className='f-links'>
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact us</li>
        </ul>
        <div className='social_icons'>
            <div className='f-icon-container'>
                <img src={instagram} alt=''/>
            </div>
            <div className='f-icon-container'>
                <img src={pinterest} alt=''/>
            </div>
            <div className='f-icon-container'>
                <img src={whatsapp} alt=''/>
            </div>
        </div>
        <div className='f-copyright'>
            <hr />
            <p> copyright @2024 -ALL RIGHTS RESERVED</p>
        </div>
    </div>
  )
}

export default Footer