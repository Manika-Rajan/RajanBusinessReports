import React, { useContext } from 'react'
import Navbar from './Navbar'
import './ReportDisplay.css'
import './PaymentGateway'
import Personal from '../assets/Personal.svg'
import Delivery from '../assets/Delivery.svg'
import pencil from '../assets/pencil.svg'
import { Store } from '../Store'
import { useNavigate } from 'react-router-dom'
const Payment = () => {
    const navigate=useNavigate()
    const {state,dispatch:cxtDispatch}=useContext(Store)
    const {totalPrice}=state
    const handlepay=()=>{
      navigate('/paymentgateway')
    }
  return (
    <div>
    <Navbar reports/>
     <div className='payments-page row'>
      <div className='payments-left col-md-6'>
         <div className='row' style={{textAlign:"center"}}>
         <img src={Personal} style={{width:"187px",height:"36px",margin:"auto"}}/>
         </div>
         <div className='row payment-name'>
         <div className="col-md-4">
         <label>Name:</label>       
           </div>
           <div className='col-md-4'>
           <p>Akrithi</p>
           </div>
           <div className='col-md-4'>
           <img src={pencil}/>
           </div>
         </div>
         <div className='row'>
         </div>
         <div className='row'style={{textAlign:"center"}}>
         <img src={Delivery} style={{width:"187px",height:"36px",margin:"auto"}}/>
         </div>
         <div className='row'>
         </div>
      </div>
      <div className='payments-right col-md-6'>
      <div className='row'>
      <div className='pdf-div'>

      </div>
      </div>
      <div className='row'>
      <p className='pay-price'>Total Price:₹{totalPrice}</p>
      </div>
      <div className='row'>
       <button onClick={handlepay} className='pay-btn '>PAY NOW</button>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Payment
