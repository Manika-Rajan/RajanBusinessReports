import React from 'react'
import './PriceCard.css'
const PriceCard = () => {
  return (
    <div className='price-card'>
        <div className="card-text">
        <h5>Total Price</h5>
      <p>*excluding gst</p>
        </div>
       <div className="price">
       ₹0
       </div>
    </div>
  )
}

export default PriceCard
