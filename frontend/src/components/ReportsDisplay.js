import React from 'react'
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import './ReportDisplay.css'
const ReportsDisplay = () => {
  const navigate=useNavigate()
  return (
    <div className='report-display'>
    <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
     
  <div className="nav-left ">
    <div className="logo">
  <a className="navbar-brand" href="#">
  <img src={logo} alt="" style={{width:"60px",height:"60px"}} />
  </a>
    </div>
    <div className="reports-text" style={{width:"70%"}}>
       <p className='report-display-title'>Confectionary for Toodlers & Teens</p>
      <p className='report-display-desc' style={{marginTop:"-10px"}}>Candy production is a seasonal business,with the majority of those involved  in market normally <br/>doubling their staffs during the winter months</p>
     </div>
    </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
       <li style={{width:"100%"}}><button className="nav-link buy-btn" onClick={()=>navigate("/payment")}
       >BUY NOW</button></li>
        
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default ReportsDisplay


// <div className='report-display'>
// <nav className="navbar navbar-expand-lg bg-light">
// <div className="container-fluid row">
// <div className="nav-left ">
// <div className="logo">
// <a className="navbar-brand" href="#">
// <img src={logo} alt="" style={{width:"60px",height:"60px"}} />
// </a>
// </div>
// <div className="reports-text">
//   <p className='report-display-title'>Confectionary for Toodlers & Teens</p>
//   <p className='report-display-desc' style={{marginTop:"-10px"}}>Candy production is a seasonal business,with the majority of those involved in market normally doubling their staffs during the winter months</p>
// </div>
// </div>
// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// <span className="navbar-toggler-icon"></span>
// </button>
// <div className="collapse navbar-collapse  " id="navbarSupportedContent">
// <ul className="navbar-nav">
//   <li className="nav-item">
//     <button className="nav-link buy-btn"
//     >BUY NOW</button>
//   </li>
// </ul>
// </div>
// </div>
// </nav>
// </div>