import React, { useState } from 'react'
import {Amplify} from 'aws-amplify';
import config from '../aws-exports-userpool2';
import { Auth } from 'aws-amplify';

Amplify.configure(config);

const EmailVerify = () => {
  const password= Math.random().toString(6)+'Abc#';
  const [email,setEmail]=useState('')
  const verifyMail= async()=>{
    
      try {
        await Auth.signUp({
          username: email,
          password: password,
          attributes: {
            email: email,
          },
        }).then(()=>signIn());
        console.log('User registered successfully');
        
      }
       catch (error) {
        console.log('Error registering user:', error);
        // Handle registration error
      }
    };
    const signIn = async () => {
      try {
        await Auth.signIn(email, password);
        console.log('Verification email sent');
        // Perform any desired actions upon successful email verification
      } catch (error) {
        console.log('Error sending verification email:', error);
        // Handle email verification error
      }
    };
    
  
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
   <button onclick={verifyMail} className='login-button'
   >Verify</button>
   </div>
   <i>Note:This is a onetime verification.The report will be delivered to this email.</i>
  </div>
    </div>
  )

  }
export default EmailVerify
