import React, { useState, useEffect } from 'react';
import './Login.css'

import {Amplify} from 'aws-amplify';
import Auth from '@aws-amplify/auth';

import awsconfig from '../aws-exports.js';
Amplify.configure(awsconfig);

const NOTSIGNIN="You are not logged in";
const SIGNEDIN="You have logged in successfully";
const SIGNEDOUT="You have logged out successfully";
const WAITINGFOROTP="Enter OTP number";
const VERIFYNUMBER="Verifying number (Country Code +XX needed)";

const Login = ({sendOtp}) => {
  
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [otp, setOtp] = useState('123456');
  const [number, setNumber] = useState('');
  const password = Math.random().toString(6) + 'Abc#';
  
  useEffect(() => {
    
  }, []);
  const signIn = () => {
    console.log("signin");
    console.log(VERIFYNUMBER);
    Auth.signIn(number)
      .then((result) =>  {
        console.log('verifying');
        setSession(result);
        console.log(result)
        console.log(WAITINGFOROTP);
        sendOtp(true)
      }).then(()=>verifyOtp())
      .catch((e) => {
        if (e.code === 'UsernameExistsException') {
          console.log(WAITINGFOROTP);
          
          signIn();
        } else {
          console.log(e.code);
          console.error(e);
        }
      });
  };
  
  const signOut=() => {
    if (user){
      Auth.signOut();
      setUser(null);
      
      console.log(NOTSIGNIN);
    }
  };
  const verifyOtp = (result) => {
    console.log('otp verify')
    setSession(result)
    console.log(otp)
    console.log(session)
    Auth.sendCustomChallengeAnswer(session, otp)
      .then((user) => {
        
        setUser(user);
        console.log(SIGNEDIN);
        setSession(null);
      }).then(()=>verifyAuth())
      .catch((err) => {
        
        console.log(err.message);
        
        console.log(err);
      });
  };
  const verifyAuth=() => {
    console.log('auth')
    Auth.currentAuthenticatedUser()
      .then((user) => {
        setUser(user);
        console.log(SIGNEDIN);
        setSession(null);
      })
      .catch((err) => {
        console.error(err);
        console.log(NOTSIGNIN);
      });
  };
  const handleLogin = async()=>{
    console.log(number);
    const result = await Auth.signUp({
      
      username: number,
      password,
      attributes: {
        phone_number: number,
      },
    }).then(() => signIn());

    
    
  };
  
  
  return (
    <div style={{textAlign:"center",height:"60vh",margin:"auto",marginTop:"13%"}}>
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
     <input type="text" class="form-control" placeholder="Enter Your 10 digit Mobile Number" style={{textAlign:"center"}} onChange={(e)=>setNumber(e.target.value)}/>
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
