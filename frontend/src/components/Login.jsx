import React from 'react'
import './Login.css'
const Login = () => {

 const handleLogin=()=>{
       
}

  return (
    <div style={{textAlign:"center"}}>
      <div className='login-title'>
        <h3>Please Enter Your Mobile Number</h3>
      </div>
      <div className='login-paragraph'>
      <p>We will send you a <strong>One Time Password</strong> </p>
    </div>
    <div className='login-phone-input' style={{width:"70%",textAlign:"center",margin:"auto"}}>
    <div class="input-group mb-3" style={{marginRight:"20px",width:"17%"}}>
    <select class="form-select" aria-label="Default select example">
            <option selected>+91</option>
            <option value="2">+11</option>
            </select>

     </div>
     <div class="input-group mb-3">
     <input type="text" class="form-control" placeholder="Enter Your 10 digit Mobile Number" style={{textAlign:"center"}}/>
   </div>
     </div>
     <div>
     <button className='login-button'
      onClick={handleLogin}
     >SEND OTP</button>
     </div>
    </div>
  )
}

export default Login
