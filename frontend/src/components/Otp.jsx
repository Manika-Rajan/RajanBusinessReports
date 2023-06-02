import React from 'react'
import './Login.css'
import './Login'

const Otp = ({setVerify,sendOtp,setLogin}) => {

  const EmailVerify=()=>{
    sendOtp(false)
    setLogin(false)
    setVerify(true)
  }
  return (
    <div>
    <div  style={{textAlign:"center",height:"48vh",margin:"auto",marginTop:"3%"}}>
    <div className='login-title' style={{padding:"0 20px"}}>
      <h3>Please Enter the One Time Password to Login</h3>
    </div>
    <div className='login-paragraph'>
    <p>OTP has been sent </p>
  <div className="otp-fields">
    <input />
    <input />
    <input />
    <input />
    <input />
    <input />
   </div>
   </div>
   
   <div>
   <button className='login-button' onClick={EmailVerify}>LOGIN</button>
   <p style={{color:" #0263C7",marginTop:"15px"}}>RESEND OTP</p>
   <p style={{color:"grey"}}>Entered a Wrong Mobile Number?</p>
   </div>
  </div>
    </div>
  )
}

export default Otp
