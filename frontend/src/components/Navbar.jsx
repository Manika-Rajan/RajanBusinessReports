import React from 'react'
import logo from '../assets/logo.svg'
import { Link } from 'react-router-dom'
import wrong from '../assets/wrong.svg'
import { useState } from 'react'
import Login from './Login'
import {Modal,ModalBody,ModalHeader} from "reactstrap"
import Otp from './Otp'
const Navbar = (props) => {

  const [openModel,setOpenModel]=useState(false)
  const [otp,setOtp]=useState(false)
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
          <Link to="/reports" className="nav-link" href="#">Reports</Link>
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
    <div className="nav-popup row">
    <div className="col-md-11">
    <p className='container'>Use the Promo code "<strong>RBideas 25</strong>"to get an instant 25% discount during the purchase.Valid till 31st August 2023 
    </p>
    </div>
   <div className="col-md-1 icon" style={{fontSize:"20px"}}>
   {/* <i className="fa fa-times" aria-hidden="true"></i> */}
  <img src={wrong} alt="" />
   </div>
   
    </div>
    <Modal
    size='lg'
    isOpen={openModel}
    toggle={()=>setOpenModel(!openModel)}
    >
    <ModalHeader 
    toggle={()=>setOpenModel(!openModel)}
    >
    </ModalHeader>
    <ModalBody>
    {
      otp?<Otp/>:<Login setOtp={setOtp}/>
    }
    </ModalBody>
    </Modal>
     
    </>
  )
}

export default Navbar
