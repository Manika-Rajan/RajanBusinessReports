import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Login from './Login'
import {Modal,ModalBody,ModalHeader} from "reactstrap"
import Otp from './Otp'
import EmailVerify from './EmailVerify'
const Navbar = (props) => {

  const [openModel,setOpenModel]=useState(false)
  const [login,setLogin]=useState(true)
  const [otp,sendOtp]=useState(false)
  const [verify,setVerify]=useState(false)
  return (
    <>
    <div className='header'>
      <nav className="navbar navbar-expand-lg bg-light">
  <div className="container-fluid row">
    <div className="nav-left col-md-4">
     <div className="logo">
     <a className="navbar-brand" href="#">
      <img src={logo} alt="" style={{width:"60px",height:"60px"}} />
     </a>
     </div>
     <div className="text">
        <p className='nav-title'>Rajan Business Report Services</p>
        <p className='text-desc' style={{marginTop:"-20px"}}>A product by Rajan Business Ideas</p>
     </div>
    </div>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end col-md-8" id="navbarSupportedContent">
      <ul className="navbar-nav">
        <li className="nav-item" style={{marginRight:"80px"}}>
          <Link to="/about" className="nav-link" aria-current="page" href="#">About</Link>
          <div className={props.about?"active":""} ></div>
        </li>
        <li className="nav-item"
        style={{marginRight:"80px"}}>
          <Link to="/" className="nav-link" href="#">Reports</Link>
          <div className={props.reports?"active":""} ></div>

        </li>
        <li className="nav-item"
        style={{marginRight:"80px"}}>
          <Link to="/contact" className="nav-link" >Contact</Link>
    
          <div className={props.contact?"active":""} ></div>
        </li>
        <li className="nav-item">
          <button className="nav-link login-btn"
          onClick={()=>setOpenModel(true)}
          >LOGIN</button>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
   
    <Modal
    
    isOpen={openModel}
    toggle={()=>setOpenModel(!openModel)}
    size="lg" style={{maxWidth: '650px', width: '100%',marginTop:"15%"}}>

    <ModalBody>
    {
      login&&<Login sendOtp={sendOtp}  setVerify={setVerify} setLogin={setLogin}/>
    }
    {
      otp&&<Otp sendOtp={sendOtp}  setVerify={setVerify} setLogin={setVerify}/>
    }
    {
      verify&&<EmailVerify sendOtp={sendOtp}  setLogin={setLogin}/>
    }
    </ModalBody>
    </Modal>
     
    </>
  )
}

export default Navbar
