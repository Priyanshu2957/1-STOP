import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../context/ShopContext'
const ProductDisplay = (props) => {
    
    const {product} =props;
    const {AddToCart} = useContext(ShopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-l'>
            <div className='productdisplay-img-list'>
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
                <img src={product.image} alt='' />
            </div>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt='' />
            </div>
        </div>
        <div className='productdisplay-r'>
            <h1>{product.name}</h1>
            <div className='productdisplay-r-star'>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_icon} alt=''/>
                <img src={star_dull_icon} alt=''/>
                <p>(122)</p>
            </div>
            <div className='pd-right-prices'>
                <div className='pd-right-prices-old'>${product.old_price}</div>
                <div className='pd-right-prices-new'>${product.new_price}</div>
            </div>
            <div className='pd-right-des'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad 
            </div>
            <div className='pd-right-size'>
                <h1>Select Size</h1>
                <div className='pd-right-sizes'>
                    <div>S</div>
                    <div>M</div>
                    <div>L</div>
                    <div>XL</div>
                    <div>XXL</div>
                </div>
            </div>
            <button onClick={()=>{AddToCart(product.id)}}>ADD TO CART</button>
            <p className='pd-right-category'><span>Category: </span>Women , T-Shirt, Crop Top</p>
            <p className='pd-right-category'><span>Tags: </span>Modern , Latest</p>

        </div>
    </div>
  )
}

export default ProductDisplay