import React from 'react'
import logo from '../assets/logo.svg'
import { Link, useNavigate } from 'react-router-dom'
import './ReportDisplay.css'
import { Worker } from '@react-pdf-viewer/core';
import { Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import pdfFile from '../assets/sample1.pdf'
const ReportsDisplay = () => {
  const navigate=useNavigate()
  const defaultLayoutPluginInstance = defaultLayoutPlugin();
  return (
    <div className='report-display'>
    <nav className="navbar navbar-expand-lg bg-light" style={{marginLeft:"35px"}}>
    <div className="container-fluid">
      <div className="nav-left">
       <div className="logo">
       <Link to="/" className="navbar-brand" >
        <img src={logo} alt="" style={{width:"60px",height:"60px"}} />
       </Link>
       </div>
       <div className="text">
          <p className='nav-title report-display-title'>Confectionary for Toodlers & Teens</p>
          <p className='report-display-desc' style={{marginTop:"-10px"}}>Candy production is a seasonal business,with the majority of those involved  in market normally <br/>doubling their staffs during the winter months</p>
       </div>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
        
          <li className="nav-item" style={{marginLeft:"113%"}}>
          <button className="nav-link buy-btn" onClick={()=>navigate("/payment")}
           >BUY NOW</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <div className='viewer'>
  <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
  <Viewer fileUrl={pdfFile}  
  // plugins={[defaultLayoutPluginInstance]}
   />
</Worker>
  </div>
    </div>
  )
}

export default ReportsDisplay



// <nav class="navbar navbar-expand-lg bg-light">
// <div class="container-fluid">
   
// <div className="nav-left ">
//   <div className="logo">
// <a className="navbar-brand" href="#">
// <img src={logo} alt="" style={{width:"60px",height:"60px"}} />
// </a>
//   </div>
//   <div className="reports-text" style={{width:"70%"}}>
//      <p className='report-display-title'>Confectionary for Toodlers & Teens</p>
//     <p className='report-display-desc' style={{marginTop:"-10px"}}>Candy production is a seasonal business,with the majority of those involved  in market normally <br/>doubling their staffs during the winter months</p>
//    </div>
//   </div>
//   <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//     <span class="navbar-toggler-icon"></span>
//   </button>
//   <div class="collapse navbar-collapse" id="navbarNav">
//     <ul class="navbar-nav">
//      <li style={{width:"100%"}}><button className="nav-link buy-btn" onClick={()=>navigate("/payment")}
//      >BUY NOW</button></li>
      
//     </ul>
//   </div>
// </div>
// </nav>