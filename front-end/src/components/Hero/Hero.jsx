import React from 'react'
import './Hero.css'
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png'
import hand_icon from '../Assets/hand_icon.png'
export const Hero = () => {
  return (
    <div className='hero'> 
      <div className='h-left'>
        <h2>NEW ARRIVALS</h2>
        <div className='hand-icon'>
          <p>new</p>
          <img src={hand_icon} alt=''/>
        </div>
        <p>collections</p>
        <p>for everyone</p>
        <div className='hero-latest-btn'>
        <div>Latest Collections</div>
        <img src={arrow_icon} alt='' />
      </div>
      </div>
      
      <div className='h-right'>
        <img src={hero_img} alt='' />
      </div>
    </div>
  )
}
export default Hero;