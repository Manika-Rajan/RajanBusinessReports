import React from 'react'
import './Filters.css'
import './Reports.css'
import search from '../assets/search.svg'
const Filters = ({updateIndustry,updateMarket,updateCity,updateCompetitors,updatePain,country,setCountry,
industry,setIndustry,setCity,city,competitors,setCompetitors,market,setMarket,painpoints,setPainpoints,handleClear,select_industry,select_city,select_market,select_competitors,select_pain
}) => {
  
const industry_data=[
{name:'Agriculture &Allied Activities'},
{name:'Construction'},
{name:'Manufacturing'},
{name: 'Electricity Companies'},
{name:'Mining'},
{name:'Business Services'},
{name:'Community,Sociall and Personal Services'},
{name:'Real Estate and Rentining'},
{name:'Trading'},
{name:'Transport'},
{name:'Finance'},
{name:'Insurance'},
{name:'Gas Companies'},
{name:'Water Companies'},
{name:'Quarrying'},
{name:'Storage'},
{name:'Communications'}
]
const city_data=[
  {name:'Chattisgarh'},
  {name:'Bihar'},
  {name:'Maharashtra'},
  {name:'Pondicherry'},
  {name:'Uttarakhand'},
  {name:'West Bengal'},
  {name:'Karnataka'},
  {name:'Chandigarh'},
  {name:'Tamil Nadu'},
  {name:'Delhi'},
  {name:'Gujarat'},
  {name:'Telangana'},
  {name:'Madhya Pradesh'},
  {name:'Kerala'},
  {name:'Punjab'},
  {name:'Uttar Pradesh'},
  {name:'Himachal Pradesh'},
  {name:'Haryana'},
  {name:'Rajasthan'},
  {name:'Andhra Pradesh'},
  {name:'Orissa'},
  {name:'Goa'},
  {name:'Jharkhand'},
  {name:'Assam'},
  {name:'Tripura'},
  {name:'Jammu & Kashmir'},
  {name:'Manipur'},
]
const competitors_data=[
  {name:' India wide '},
  {name:' Andhra Pradesh'},
  {name:' Telangana'},
  {name:' Karnataka'},
  {name:'  West Bengal'},
  {name:' Delhi  '},
  {name:' Maharashtra  '},
]
const market_data=[
  {name:'  less than 5  '},
  {name:' 5 to 15  '},
  {name:' 15 to 25  '},
  {name:' 25 to 40  '},
  {name:' All of the Above  '},
]

const pain_data=[
  {name:'  Availability of Product  '},
  {name:' Price of Product  '},
  {name:' Quality of Products in Market  '},
  {name:' Supply of Product not Adequate  '},

]

const handleIndustry=(e)=>{
   const {value,checked}=e.target
   updateIndustry(value,checked)    
}
const handleCity=(e)=>{
  const {value,checked}=e.target
  updateCity(value,checked)
}
const handleCompetitors=(e)=>{
  const {value,checked}=e.target
  updateCompetitors(value,checked)
}
const handleMarket=(e)=>{
  const {value,checked}=e.target
  updateMarket(value,checked)
}
const handlePain=(e)=>{
  const {value,checked}=e.target
  updatePain(value,checked)

}
const handleIndustrySearch=(e)=>{
  const searchField=e.targe.value;
  const searchIndustry=industry.filter(
    // item => {
    //   return (
    //     item
    //     .name
    //     .toLowerCase()
    //     .includes(searchField.toLowerCase()) ||
    //     person
    //     .email
    //     .toLowerCase()
    //     .includes(searchField.toLowerCase())
    //   );
    // }
  );

}
  return (
    <div className='sidebar'>
    
    
      <div className="accordion2">
        <div className="accordion-item2">
        <div style={{display:"flex",padding:"10px 32px"}}>
        <input type='text' placeholder='What are you looking for'className='search-input' style={{border:"1px solid #AAAAAA",borderRadius:"20px"}}/>
        <img src={search} style={{marginLeft:"-10%",marginBottom:"5%"}}></img>
        </div>
        </div>
      </div>

       <div className="accordion2">
        <div className="accordion-item2">
          <div className="accordion-title2">
            <div>Filter</div>
            {select_industry.length===0&&select_city.length===0&&select_market.length===0&&select_pain.length===0&&select_competitors.length===0? <p className='text-muted clear'>CLEAR ALL</p>
:            <p className='text-primary clear' onClick={handleClear}>CLEAR ALL</p>
}
          </div>
        </div>
      </div>
      {/* country */}
       <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div> Country</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>{
              setCountry(!country)
               setCity(false)
               setCompetitors(false)
               setMarket(false)
               setPainpoints(false)
               setIndustry(false)
            }}
            >{country? <>-</>:<>+</>}</div>
          </div>
          {country&&<div className="accordion-content1">
              <form>
              <div class="form-check">
              <input class="form-check-input" type="radio" name="country" id="country"/>
              <label class="form-check-label" for="country">
                India
              </label>
            </div>
            <div class="form-check">
          <input class="form-check-input" type="radio" name="country" id="country"/>
          <label class="form-check-label" for="country">
            South Africa
          </label>
        </div>
              </form>
          </div>
}
        </div>
      </div>
     {/* industry */}
     <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div >Industry</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>{
              setIndustry(!industry)
              setCountry(false)
              setCity(false)
              setCompetitors(false)
              setMarket(false)
              setPainpoints(false)
            }}
            >{industry?<>-</>:<>+</>}</div>
          </div>
          {industry&&          <div className="accordion-content1">
          <form>
          <div style={{display:"flex"}}>
          <input type='text' placeholder='Search'className='search-input' onChange={handleIndustrySearch}/>
          <img src={search} style={{marginLeft:"-6%",marginBottom:"5%"}}></img>
          </div>
          
          <br/>
          {
            industry_data&&industry_data.map((ind,key)=>{
              return(
                 <>
                 <div class="form-check">
                 <input class={`form-check-input ind-${key}`} type="checkbox" value={ind.name} name={ind.name} id="flexCheckChecked" onChange={handleIndustry}/>
                 <label class="form-check-label" style={{paddingTop:"3px" ,}} for="flexCheckChecked" >
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
      onClick={()=>
        {
          setCity(!city)
          setCountry(false)
          setCompetitors(false)
          setMarket(false)
          setPainpoints(false)
          setIndustry(false)
        }
        }
      >{city?<>-</>:<>+</>}</div>
    </div>
        {city&&          <div className="accordion-content1">
        <form>
      
        {
          city_data&&city_data.map((ind)=>{
            return(
               <>
               <div class="form-check">
               <input class="form-check-input" type="checkbox" value={ind.name} name={ind.name} id="flexCheckChecked" onChange={handleCity}/>
               <label class="form-check-label" for="flexCheckChecked" style={{paddingTop:"3px"}}>
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
{/* competitors */}
  <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>List of Competitors</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>
              {setCompetitors(!competitors)
                setCity(false)
                setCountry(false)
                setMarket(false)
                setPainpoints(false)
                setIndustry(false)
              }}
            >{competitors?<>-</>:<>+</>}</div>
          </div>
          {competitors&&<div className="accordion-content1">
          <form>
      
          {
            competitors_data&&competitors_data.map((ind)=>{
              return(
                 <>
                 <div class="form-check">
                 <input class="form-check-input" type="checkbox" value={ind.name} name={ind.name} id="flexCheckChecked" onChange={handleCompetitors}/>
                 <label class="form-check-label" for="flexCheckChecked" style={{paddingTop:"3px"}}>
                   {ind.name}
                 </label>
               </div>
                
                 </>
              )
            })
          }
          </form>
          </div>
          }
        </div>
      </div>
      {/* market */}
      <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>Market Segment(Age wise)</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>{setMarket(!market)
              setCity(false)
              setCountry(false)
              setCompetitors(false)
              setPainpoints(false)
              setIndustry(false)
            }}
            >{market?<>-</>:<>+</>}</div>
          </div>
          {market&&          <div className="accordion-content1">
          <form>
      
          {
            market_data&&market_data.map((ind)=>{
              return(
                 <>
                 <div class="form-check">
                 <input class="form-check-input" type="checkbox" value={ind.name} name={ind.name} id="flexCheckChecked" onChange={handleMarket}/>
                 <label class="form-check-label" for="flexCheckChecked" style={{paddingTop:"3px"}}>
                   {ind.name}
                 </label>
               </div>
                
                 </>
              )
            })
          }
          </form>
          
          </div>
}
        </div>
      </div>
        {/* pain points */}
        <div className="accordion1">
        <div className="accordion-item1">
          <div className="accordion-title1">
            <div>Existing industry's Customer Pain Points</div>
            <div style={{color:"#0263c7",fontWeight:"800"}}
            onClick={()=>{setPainpoints(!painpoints)
              setCity(false)
              setCountry(false)
              setCompetitors(false)
              setMarket(false)
              setIndustry(false)
            }}
            >{painpoints?<>-</>:<>+</>}</div>
          </div>
          {painpoints&&          <div className="accordion-content1">
          <form>
      
          {
            pain_data&&pain_data.map((ind)=>{
              return(
                 <>
                 <div class="form-check">
                 <input class="form-check-input" type="checkbox" value={ind.name} name={ind.name} id="flexCheckChecked" onChange={handlePain}/>
                 <label class="form-check-label" for="flexCheckChecked" style={{paddingTop:"3px"}}>
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

     
      
    </div>
  )
}

export default Filters
