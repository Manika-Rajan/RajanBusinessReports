import React from 'react'
import Navbar from './Navbar'
import './About.css'
import one from '../assets/one.svg';
import two from '../assets/two.svg';
import three from '../assets/three.svg';
import four from '../assets/four.svg';
import line from '../assets/line.svg';
import step1 from '../assets/step1.svg';
import step2 from '../assets/step2.svg';
import step3 from '../assets/step3.svg';

const About = () => {
  return (
    <div>
      <Navbar about/>
     <div className='row' style={{padding:"5% 4%"}}>
     <div className='col-md-5' style={{marginLeft:"2%"}}>
     <p className='text-primary' style={{fontSize:"16px",fontWeight:"600"}}>At Rajan Business Reports. We help you build your business with ease.</p>
     <p className='about-text'>
     Rajan Business Reports is an initiative of Rajan Business Ideas.
     </p>
<p className='about-text'>
Rajan Business Reports was launched with a sole objective of helping the entrepreneurs to acquire the relevant data to get their business idea evaluated and find the probability of success in the current market scenario.
</p>
<p className='about-text'>
It has been observed that every year only 8% of the startups are able to sustain in India, and the remaining startups are shut down after a few months, there are several factors that lead to the failure of these startups. Our expert team at Rajan Business Reports continuously monitors the startup scenario in India and continuously improve the Business Reports that we offer depending on the current business market scenario.
     </p>
     </div>
     <div className='col-md-6 about-left'>
     <div >
     <img src={one} className='image-one'></img>
     </div>
     <div >
     <img src={two} className='image-two'></img>
     </div>
     <div >
     <img src={four} className='image-three'></img>
     </div>
     <div >
     <img src={three} className='image-four'></img>
     </div>
     </div>
     </div>
    //  <div className='row' style={{padding:"2% 5%"}}>
    //  <img src={line}></img>
    //  </div>
     <div className='row what-we-do head'>
      <p >What We Do?</p>
     </div>
     <div className='row what-we-do-info'>
     <div className='steps'>
     <div className='step-image'>
     <img src={step1}/>
     </div>
      <p className='step-head'>Step1</p>
      <p>We research and collect Market Information from both Online and Offline sources. </p>
     </div>
     <div className='steps'>
      <p className='step-head'>Step2</p>
      <p>We assemble the huge database with the “Get your Report” Tool that is accessible at Rajanbusinessreports.in</p>
     </div>
     <div className='steps'>
      <p className='step-head'>Step3</p>
      <p>The “Get your Report” Tool automatically presents the data in a presentable document for you.</p>
     </div>
     </div>
     </div>
  )
}

export default About
