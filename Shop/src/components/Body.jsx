import React from 'react'
import './body.css'
const Body = ({img,name,price}) => {
  return (
    <div className='main-body'>
        <div className='card'>
             <img src={img} alt="" className='Abc' />
                 <h4>{name}</h4>
                  <p>₹{price}</p>
                 <button className='buttonstyle'>Add to Cart </button>

        </div>
    </div>
  )
}

export default Body