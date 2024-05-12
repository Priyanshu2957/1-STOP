import React from 'react'
import './Offers.css'
import exc_img from "../Assets/exclusive_image.png"
export const Offers = () => {
  return (
    <div className='offers'>
        <div className='o-left'>
            <h1>Exclusive</h1>
            <h1>Offers For You</h1>
            <p>
                ONLY ON BEST SELLERS PRODUCT
            </p>
            <button>Check Now</button>
        </div>
        <div className='o-right'>
            <img src={exc_img} alt='' />
        </div>
    </div>
  )
}
export default Offers;