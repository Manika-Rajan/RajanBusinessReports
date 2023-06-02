import React, { useState, useEffect } from 'react';
import './Login.css';
import {Amplify,  Auth}  from 'aws-amplify';
import awsconfig from '../aws-exports';
Amplify.configure(awsconfig);

const NOTSIGNIN="You are not logged in"
const SIGNEDIN="You have logged in successfully";
const WAITINGFOROTP="Enter OTP number";
const VERIFYNUMBER="Verifying number (Country Code +XX needed)";

const Login = ({sendOtp,setLogin,setVerify}) => {
  const [user, setUser] = useState(null);
  const [session, setSession] = useState(null);
  const [otp, setOtp] = useState('');
  const [number, setNumber] = useState('');
  const password = Math.random().toString(6) + 'Abc#';
  useEffect(() => {
    verifyAuth();
    
  }, []);
  const signIn = () => {
    console.log("signin");
    console.log(number);
    console.log(VERIFYNUMBER);
    Auth.signIn(number)
      .then((result) =>  {
        console.log('verifying');
        setSession(result);
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
  
  const verifyOtp = () => {
    console.log('otp verify')
    Auth.sendCustomChallengeAnswer(session, otp)
      .then((user) => {
        
        setUser(user);
        console.log(SIGNEDIN);
        setSession(null);
      }).then(()=>verifyAuth())
      .catch((err) => {
        
        console.log(err.message);
        setOtp('');
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
    setLogin(false)
    setVerify(false)
    sendOtp(true)
  
    
    const result = await Auth.signUp({
      
      username: number,
      password,
      attributes: {
        phone_number: number,
      },
    }).then(() => signIn());

    
    
  };
 

  return (
    <div style={{textAlign:"center",height:"48vh",margin:"auto",marginTop:"5%"}}>
      <div className='login-title'>
        <h3 className='login-title'>Please Enter Your Mobile Number</h3>
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
     
     <div style={{marginTop:"48px"}}>
     <button className='login-button'
      onClick={handleLogin}
     >SEND OTP</button>
     </div>
     
    </div>
  )
  } 
  

export default Login
