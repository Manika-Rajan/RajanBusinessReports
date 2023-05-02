import React from 'react'
import Filters from './Filters'
import PriceCard from './PriceCard'
import './Reports.css'
import india from '../assets/india.png'
import Navbar from './Navbar' 
import { useState } from 'react'
import HeadingAfter from './HeadingAfter'
import HeadingBefore from './HeadingBefore'
const Reports = () => {
  const [generate,setGenerate]=useState(true)
  return (
    <>
    <Navbar reports/>
    <div className='report row'>
      <div className="col-md-4 filters">
      <Filters/>
      </div>
      <div className="col-md-8">
        <div className="row personalized-report">
          <div className=" col-md-10 personalized-report-left">
           {generate?<HeadingAfter/>:<HeadingBefore/>}
          </div>
           <div className="col-md-2 personalized-report-right"
           style={{textAlign:'center',justifyContent:'flex-end'}}
           >
            <img src={india} alt="" />
            &nbsp;&nbsp;
            <span>India</span>
           </div>
        </div>
        <div className="row">
            <div className="col-md-8">
              {generate? <p className='after-head'>based on the following selections</p>: <p
    className='before-head'
    >select the filters for your requirement and we do the rest</p>}
               <div className="all-filters">
                <div className="one-filter">
                  <div className="heading">
                    Industry
                    <span className='text-muted'>(0)</span>
                  </div>
                </div>
                <div className="one-filter">
                  <div className="heading">
                    City <span className='text-muted'>(0)</span>

                  </div>
                </div>
                <div className="one-filter">
                  <div className="heading">
                    List of competitors  <span className='text-muted'>(0)</span>

                  </div>
                </div>  <div className="one-filter">
                  <div className="heading">
                    Market segments  <span className='text-muted'>(0)</span>

                  </div>
                </div>  <div className="one-filter">
                  <div className="heading">
                    Pain Points <span className='text-muted'>(0)</span>

                  </div>
                </div>
               </div>
               
            </div>
            <div className="col-md-3">
                <PriceCard/>
            </div>
        </div>
        <hr />
        <div className="row">
       
        </div>
      </div>
    </div>
    </>
  )
}

export default Reports
