import React, { useEffect } from 'react'
import Filters from './Filters'
import PriceCard from './PriceCard'
import './Reports.css'
import india from '../assets/india.png'
import Navbar from './Navbar' 
import { useState } from 'react'
import HeadingAfter from './HeadingAfter'
import HeadingBefore from './HeadingBefore'
import vector from '../assets/vector.svg'
import black from '../assets/black.svg'
const Reports = () => {
  const [generate,setGenerate]=useState(false)
  const [select_industry,setSelect_industry]=useState([])
  const [select_city,setSelect_city]=useState([])
  const [select_market,setSelect_market]=useState([])
  const [select_pain,setSelect_pain]=useState([])
  const [select_competitors,setSelect_competitors]=useState([])

  const [country,setCountry]=useState(false)
  const [industry,setIndustry]=useState(false)
  const [city,setCity]=useState(false)
  const [market,setMarket]=useState(false)
  const [competitors,setCompetitors]=useState(false)
  const [painpoints,setPainpoints]=useState(false)



  const updateIndustry=(value,checked)=>{
    console.log(checked,value)
    if(checked)
    {
      setSelect_industry(prev=>[...prev,value])
    }
    else
    {
      setSelect_industry((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
    }

  }
  const removeIndustry=(value)=>{
    setSelect_industry((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
  }

  const updateCity=(value,checked)=>{
    console.log(checked,value)
    if(checked)
    {
      setSelect_city(prev=>[...prev,value])
    }
    else
    {
      setSelect_city((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
    }

  }
  const removeCity=(value)=>{
    setSelect_city((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
  }

  const updateCompetitors=(value,checked)=>{
    console.log(checked,value)
    if(checked)
    {
      setSelect_competitors(prev=>[...prev,value])
    }
    else
    {
      setSelect_competitors((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
    }

  }
  const removeCompetitors=(value)=>{
    setSelect_competitors((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
  }
 
  const updateMarket=(value,checked)=>{
    console.log(checked,value)
    if(checked)
    {
      setSelect_market(prev=>[...prev,value])
    }
    else
    {
      setSelect_market((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
    }

  }
  const removeMarket=(value)=>{
    setSelect_market((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
  }

  const updatePain=(value,checked)=>{
    console.log(checked,value)
    if(checked)
    {
      setSelect_pain(prev=>[...prev,value])
    }
    else
    {
      setSelect_pain((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
    }

  }
  const removePain=(value)=>{
    setSelect_pain((prevState) =>
      prevState.filter((prevItem) => prevItem !== value)
    );
  }
  const handleClear=()=>{
    setSelect_city([])
    setSelect_competitors([])
    setSelect_industry([])
    setSelect_market([])
    setSelect_pain([])
  }

  useEffect(()=>{
    console.log(select_industry)
  },[select_industry,select_city,select_competitors,select_market,select_pain])
  return (
    <>
    <Navbar reports/>
    <div className='report row'>
      <div className="col-md-4 filters">
      <Filters updateIndustry={updateIndustry} updateCity={updateCity} updateCompetitors={updateCompetitors} updateMarket={updateMarket} updatePain={updatePain}
      country={country} setCountry={setCountry} city={city}
      industry={industry} setIndustry={setIndustry} 
      setCity={setCity} competitors={competitors} setCompetitors={setCompetitors} market={market} setMarket={setMarket}
      painpoints={painpoints} setPainpoints={setPainpoints} handleClear={handleClear} select_city={select_city}
      select_competitors={select_competitors} select_industry={select_industry} select_market={select_market} select_pain={select_pain}
      />
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
                  <div className="heading"  onClick={()=>{
                    setIndustry(!industry)
                    setCountry(false)
                    setCity(false)
                    setCompetitors(false)
                    setMarket(false)
                    setPainpoints(false)
                  }}
                  style={{cursor:"pointer"}}

                  >
                    Industry&nbsp;&nbsp;&nbsp;
                    {select_industry.length?
                      <span className='text-primary'>({select_industry.length})</span>:
                      <span className='text-muted'>({select_industry.length})</span>
                    }
                    
                  </div>
                  <div className='all-select-filters'>
                  {
                    select_industry&&select_industry.map((value,index)=>{
                      return(
                        <>
                        <div className='filter-button ' >
                        <div>
                        {value}
                        </div>
                        <div onClick={()=>removeIndustry(value)}
                        style={{cursor:"pointer",fontSize:"13px",paddingTop:"4px"}}
                        >
                        X
                        </div>
                        </div>
                        </>
                      )
                    })
                  }
                  </div>
                </div>
               
                <div className="one-filter">
                <div className="heading"    onClick={()=>
                  {
                    setCity(!city)
                    setCountry(false)
                    setCompetitors(false)
                    setMarket(false)
                    setPainpoints(false)
                    setIndustry(false)
                  }
                }
                style={{cursor:"pointer"}}>
                  City&nbsp;&nbsp;&nbsp;
                  {select_city.length?
                    <span className='text-primary'>({select_city.length})</span>:
                    <span className='text-muted'>({select_city.length})</span>
                  }
                  
                </div>
                <div className='all-select-filters'>
                {
                  select_city&&select_city.map((value,index)=>{
                    return(
                      <>
                      <div className='filter-button ' >
                      <div>
                      {value}
                      </div>
                      <div onClick={()=>removeCity(value)}
                      style={{cursor:"pointer"}}
                      >
                      X
                      </div>
                      </div>
                      </>
                    )
                  })
                }
                </div>
              </div>

              <div className="one-filter">
              <div className="heading"     onClick={()=>
                {setCompetitors(!competitors)
                  setCity(false)
                  setCountry(false)
                  setMarket(false)
                  setPainpoints(false)
                  setIndustry(false)
                }}
              style={{cursor:"pointer"}}>
                List Of Competitors&nbsp;&nbsp;&nbsp;
                {select_competitors.length?
                  <span className='text-primary'>({select_competitors.length})</span>:
                  <span className='text-muted'>({select_competitors.length})</span>
                }
                
              </div>
              <div className='all-select-filters'>
              {
                select_competitors&&select_competitors.map((value,index)=>{
                  return(
                    <>
                    <div className='filter-button ' >
                    <div>
                    {value}
                    </div>
                    <div onClick={()=>removeCompetitors(value)}
                    style={{cursor:"pointer"}}
                    >
                    X
                    </div>
                    </div>
                    </>
                  )
                })
              }
              </div>
            </div>
                
            <div className="one-filter">
            <div className="heading"
            onClick={()=>{setMarket(!market)
              setCity(false)
              setCountry(false)
              setCompetitors(false)
              setPainpoints(false)
              setIndustry(false)
            }}            style={{cursor:"pointer"}}
            >
              Market Segment&nbsp;&nbsp;&nbsp;
              {select_market.length?
                <span className='text-primary'>({select_market.length})</span>:
                <span className='text-muted'>({select_market.length})</span>
              }
              
            </div>
            <div className='all-select-filters'>
            {
              select_market&&select_market.map((value,index)=>{
                return(
                  <>
                  <div className='filter-button ' >
                  <div>
                  {value}
                  </div>
                  <div onClick={()=>removeMarket(value)}
                  style={{cursor:"pointer"}}
                  >
                  X
                  </div>
                  </div>
                  </>
                )
              })
            }
            </div>
          </div>
                
          <div className="one-filter">
          <div className="heading"
          onClick={()=>{setPainpoints(!painpoints)
            setCity(false)
            setCountry(false)
            setCompetitors(false)
            setMarket(false)
            setIndustry(false)
          }}
                    style={{cursor:"pointer"}}
          >
            Pain Points&nbsp;&nbsp;&nbsp;
            {select_pain.length?
              <span className='text-primary'>({select_pain.length})</span>:
              <span className='text-muted'>({select_pain.length})</span>
            }
            
          </div>
          <div className='all-select-filters'>
          {
            select_pain&&select_pain.map((value,index)=>{
              return(
                <>
                <div className='filter-button ' >
                <div>
                {value}
                </div>
                <div onClick={()=>removePain(value)}
                style={{cursor:"pointer"}}
                >
                X
                </div>
                </div>
                </>
              )
            })
          }
          </div>
        </div>

               </div>
               
            </div>
            <div className="col-md-3">
                <PriceCard/>
            </div>
        </div>
        <div className="row">
        <div className="col-md-8 mt-4" style={{alignItems:"center"}}>
          {select_industry.length===0&&select_city.length===0&&select_market.length===0&&select_pain.length===0&&select_competitors.length===0? 
            <>
            <button className='generate-btn' style={{background:" white",color:"black"}}>
            <div className='black-img'>
            <img src={black} alt="" />
            </div> 
            <div>GENERATE REPORT</div>

            </button> 
            </>
:
<>
<button className='generate-btn' style={{background:" #0263c7",color:"white"}}>
<div className='white-img'>
          <img src={vector} alt="" />
          </div>
          <div>GENERATE REPORT</div>

</button> 
</>

        }       
        </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Reports
