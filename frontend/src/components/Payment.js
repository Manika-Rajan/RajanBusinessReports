import React, { useContext,useState } from 'react'
import Navbar from './Navbar'
import './ReportDisplay.css'
import Personal from '../assets/Personal.svg'
import Delivery from '../assets/Delivery.svg'
import pencil from '../assets/pencil.svg'
import green from '../assets/green-tick.svg'
import { Store } from '../Store'
const Payment = () => {
    const {state,dispatch:cxtDispatch}=useContext(Store)
    const {totalPrice,name,phone,email}=state
    const [editName,setEditName]=useState(false)
    const [editEmail,setEditEmail]=useState(false)
    const [inputName,setInputname]=useState('')
    const [inputEmail,setInputEmail]=useState('')
    const [success,setSuccess]=useState(false)
    const handleName=(e)=>{
      if (e.key === 'Enter') {
         cxtDispatch({type:'SET_NAME',payload:inputName})
         setEditName(false)
      }
    }
    const handleEmail=(e)=>{
      if (e.key === 'Enter') {
        cxtDispatch({type:'SET_EMAIL',payload:inputEmail})
        setEditEmail(false)
        setSuccess(true)
     }
    }

  return (
    <div>
    <Navbar reports/>
     <div className='payments-page row mt-4'>
      <div className='payments-left col-md-6'>
         <div className='row' style={{textAlign:"center"}}>
         <img src={Personal} style={{width:"187px",height:"36px",marginLeft:"15%"}}/>
         </div>
         <div className='payment-name mt-2'>
         <div className="" style={{paddingRight:"20px"}}>
         <label style={{fontSize:"20px",fontWeight:"600"}}>Name:</label>       
           </div>
           <div className='' style={{paddingRight:"30px"}}>
           {
            editName? <input  className='edit-input'  style={{border:"none",background:"transparent",borderBottom:"1px solid #0263c7"}} name="inputName" value={inputName} onChange={(e)=>setInputname(e.target.value)} onKeyDown={handleName}
            
            />:
            <p style={{fontSize:"20px",fontWeight:"400"}}>{name}</p>
           }
          
           </div>
           <div className=''>
           <img src={pencil} onClick={()=>setEditName(!editName)} />
           </div>
         </div>
         <div className='payment-name mt-2'>
         <div className="" style={{paddingRight:"20px"}}>
         <label style={{fontSize:"20px",fontWeight:"600"}}>Phone Number:</label>       
           </div>
           <div className='' style={{paddingRight:"30px"}}>
           <p style={{fontSize:"20px",fontWeight:"400"}}>{phone}</p>
           </div>
         </div>
         <div className='row mt-2'style={{textAlign:"center"}}>
         <img src={Delivery} style={{width:"187px",height:"36px",marginLeft:"15%"}}/>
         </div>
         <div className='payment-name mt-3'>
         <div className="" style={{paddingRight:"20px"}}>
         <label style={{fontSize:"20px",fontWeight:"600"}}>Email:</label>       
           </div>
           <div className='' style={{paddingRight:"30px"}}>
           {
            editEmail? <input className='edit-input' style={{border:"none",background:"transparent",borderBottom:"1px solid #0263c7"}}
            name="inputEmail" value={inputEmail}
            onChange={(e)=>setInputEmail(e.target.value)}
            onKeyDown={handleEmail}
            />:
            <p style={{fontSize:"20px",fontWeight:"400"}}>{email}</p>
           }
           
           </div>
           <div className=''>
           <img src={pencil} onClick={()=>setEditEmail(!editEmail)}/>
           </div>
         </div>
         {success&&<div class="success-message" style={{marginLeft:"20%" ,marginTop:"5%"}}>
         <div>
         <img src={green}/>
         </div>
         <div>
         Your email id has been changed successfully
         </div>
       </div>}
      <div class="form-check" style={{paddingLeft:"25%" ,paddingTop:"5%"}}>
      <input class="form-check-input" type="checkbox" name="terms" id="terms"/>
      <label class="form-check-label" for="country">
      <p className='text-secondary'>  I agree to all terms <span className='text-primary'>Terms&Conditions</span></p>
      </label>
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
       <button className='pay-btn '>PAY NOW</button>
      </div>
      <div className='row'>
      <p className='error-message'>*Please enter your name to proceed</p>
     </div>

      </div>
     </div>
    </div>
  )
}

export default Payment
