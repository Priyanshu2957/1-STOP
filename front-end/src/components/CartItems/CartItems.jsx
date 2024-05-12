import React, { useContext } from 'react'
import './CartItems.css';
import { ShopContext } from '../../context/ShopContext';
import remove_icon from '../Assets/cart_cross_icon.png'
const CartItems = () => {
    const {TotalCartValue,all_product,cartItems,RemoveFromCart} = useContext(ShopContext);
  return (
    <div className='cartitems'>
        <div className='main-format'>
            <p>Products</p>
            <p>Title</p>
            <p>Price</p>
            <p>Quantity</p>
            <p>Total</p>
            <p>Remove</p>
        </div>
     <hr />
    {all_product.map((e)=>{
      if(cartItems[e.id]>0)//if product is already added
      {
        return <div>
            <div className='format main-format'>
            <img src={e.image} alt='' className='cart-product-icon'/>
            <p>{e.name}</p>
            <p>${e.new_price}</p>
            <button className='cart-item-quantity'>{cartItems[e.id]}</button>
            <p>${e.new_price*cartItems[e.id]}</p>
            <img className='remove_btn' src={remove_icon} onClick={()=>{RemoveFromCart(e.id)}} alt='' />
            </div>
            <hr />
        </div>
        
      }
      return null;
    })}

       <div className='cartitem-down'>

        <div className='cartitems-total'>
          <h1>Cart Totals</h1>
          <div>
            <div className='cartitems-total-item'>
              <p>Subtotal</p>
              <p>${TotalCartValue()}</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <p>Shipping Fee</p>
              <p>Free</p>
            </div>
            <hr />
            <div className='cartitems-total-item'>
              <h3>Total</h3>
              <h3>${TotalCartValue()}</h3>
            </div>
          </div>
          <button>CHECKOUT</button>
        </div>
        <div className='promocode'>
          <p>If you have a promocode, apply here</p>
          <div className='promobox'>
            <input type='text' placeholder='PROMOCODE'/>
            <button>Apply</button>
          </div>
        </div>
       </div> 
</div>
  )
}

export default CartItems