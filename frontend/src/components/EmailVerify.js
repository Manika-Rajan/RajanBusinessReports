import React from 'react'

const EmailVerify = () => {
  return (
    <div>
    <div style={{textAlign:"center",height:"50vh",margin:"auto",marginTop:"5%"}}>
    <div className='login-title'>
      <h3 className='login-title'>Please Verify Your Email Id</h3>
    </div>
    <div className='login-paragraph'>
    <p>We will send you a <strong>Verification Link</strong> </p>
  </div>
  <div className='login-phone-input' style={{width:"70%",textAlign:"center",margin:"auto"}}>
   <div class="input-group mb-2">
   <input type="email" class="form-control" placeholder="Enter Your email id here" style={{textAlign:"center"}}/>
 </div>
   </div>
   <div className='mb-4' style={{marginTop:"35px"}}>
   <button className='login-button'
   >Verify</button>
   </div>
   <i>Note:This is a onetime verification.The report will be delivered to this email.</i>
  </div>
    </div>
  )
}

export default EmailVerify
