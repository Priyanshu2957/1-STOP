import React, { createContext, useState } from 'react'
import  all_product from "../components/Assets/all_product" 
export const ShopContext = createContext(null);

const DefaultCart =()=>{
  let cart = {};
  for (let index = 0; index < all_product.length+1; index++) {
    cart[index] = 0;
  }
  return cart;
}
const ShopContextProvider =(props)=>{
    const [cartItems,setCartItems] = useState(DefaultCart());
    
    const AddToCart = (itemID) =>{
        setCartItems((prev)=>({...prev,[itemID]:prev[itemID]+1}))
        console.log(cartItems);
    }

    const RemoveFromCart = (itemID) =>{
      setCartItems((prev)=>({...prev,[itemID]:prev[itemID]-1}))
  }

  const TotalCartValue = ()=>{
    let totalValue = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        let iteminfo = all_product.find((product)=>product.id===Number(item))
        totalValue+=iteminfo.new_price * cartItems[item];
      }
      
    }
    return totalValue;
  }

  const TotalCartItems = () =>{
    let totalItems = 0;
    for(const item in cartItems){
      if(cartItems[item]>0){
        totalItems+=cartItems[item];
      }
    }
    return totalItems;
  }

  const contextValue =   {all_product,cartItems,AddToCart,RemoveFromCart,TotalCartValue,TotalCartItems};

    return(
      <ShopContext.Provider value={contextValue}>
        {props.children}   
      </ShopContext.Provider>
    )
}

export default ShopContextProvider;