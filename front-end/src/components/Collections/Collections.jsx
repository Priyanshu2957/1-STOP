import React from 'react'
import './Ciollections.css'
import new_coll from "../Assets/new_collections"
import Items from '../Items/Items'
export const Collections = () => {
  return (
    <div className='collections'>
        <h1>NEW COLLECTIONS</h1>
        <hr/>
        <div className='collections-items'>
            {new_coll.map((item,i)=>{
                return <Items 
                key={i} 
                id={item.id} 
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
                />
            })}
        </div>
    </div>
  )
}
export default Collections