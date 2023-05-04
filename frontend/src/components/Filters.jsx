import React from 'react'
import './Filters.css'
import vector from '../assets/vector.svg'
import { useState } from 'react'
import { useContext } from 'react'
import { Store } from '../Store'
const Filters = () => {
  const [country,setCountry]=useState(false)
  const [industry,setIndustry]=useState(false)
  const [city,setCity]=useState(false)
  const [market,setMarket]=useState(false)
  const [competitors,setCompetitors]=useState(false)
  const [painpoints,setPainpoints]=useState(false)
const industry_data=[
{name:'Food & Beverages'},
{name:'ITES'},
{name:'Manufacturing'},
{name: 'Digital Marketing'},
{name:'Management Consulting'}
]
const {state,dispatch:ctxDispatch}=useContext(Store)


const handleIndustry=(e)=>{
   const {name,checked}=e.target
   if(checked)
   {
     ctxDispatch({type:'ADD_INDUSTRY',payload:name})
   }
}

  return (
    <div className='sidebar'>
       <div className="accordion2">
        <div className="accordion-item2">
          <div className="accordion-title2">
            <div>Filter</div>
            <p className='text-muted clear'>CLEAR ALL</p>
          </div>
        </div>
      </div>
      {/* country */}
       <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div> Country</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>setCountry(!country)}
            >{country? <>-</>:<>+</>}</div>
          </div>
          {country&&<div className="accordion-content1">
              <form>
                <input type='checkbox' name="country" value="india"></input>
                <label>India</label>  <br/>
                <input type='checkbox' name="country" value="southafrica"></input>
                <label>South Africa</label>
              </form>
          </div>
}
        </div>
      </div>
     {/* industry */}
     <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>Industry</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>setIndustry(!industry)}
            >{industry?<>-</>:<>+</>}</div>
          </div>
          {industry&&          <div className="accordion-content1">
          <form>
          <input type='text' placeholder='Search' />
          <br/>
          {
            industry_data&&industry_data.map((ind)=>{
              return(
                 <>
                 <div class="form-check">
                 <input class="form-check-input" type="checkbox" value={ind.name} name={ind.name} id="flexCheckChecked" />
                 <label class="form-check-label" for="flexCheckChecked" onChange={handleIndustry}>
                   {ind.name}
                 </label>
               </div>
                
                 </>
              )
            })
          }
          </form>
          </div>}
        </div>
      </div>
    {/* city */}
    <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>City(where business will setup)</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>setCity(!city)}
            >{city?<>-</>:<>+</>}</div>
          </div>
          {city&&          <div className="accordion-content1">content</div>
}
        </div>
      </div>
{/* competitors */}
  <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>List of Competitors</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>setCompetitors(!competitors)}
            >{competitors?<>-</>:<>+</>}</div>
          </div>
          {competitors&&<div className="accordion-content1">content</div>
          }
        </div>
      </div>
      {/* market */}
      <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>Market Segment(Age wise)</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>setMarket(!market)}
            >{market?<>-</>:<>+</>}</div>
          </div>
          {market&&          <div className="accordion-content1">content</div>
}
        </div>
      </div>
        {/* pain points */}
        <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>Existing industry's Customer Pain Points</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>setPainpoints(!painpoints)}
            >{painpoints?<>-</>:<>+</>}</div>
          </div>
          {painpoints&&          <div className="accordion-content1">content</div>}
        </div>
      </div>

      <button className='generate-btn'>
      <img src={vector} alt="" />
      <div>GENERATE REPORT</div>
      </button> 
      
    </div>
  )
}

export default Filters
