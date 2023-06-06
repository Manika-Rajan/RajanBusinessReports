import React from 'react'
import Navbar from './Navbar'
import './Contact.css'
import phone from '../assets/phone.svg'
import email from '../assets/email.svg'
const Contact = () => {
  return (
    <div>
      <Navbar contact/>
      <div className='info-div'>
      <div className='phone-div'>
      <img src={phone}/>
      <span>Lets's Talk</span>
      <p><strong>+91901474794288</strong></p>
      </div>
      <div className='email-div'>
       <img src={email}/>
       <span>Or Email Us</span>
       <p><strong>support@rajanbusinessIdeas.com</strong></p>
      </div>
      </div>
      <div className='row'>
      <p className='contact-head mt-4'>
      Questions,bug reports,feedback,future requests-we're here for all it
      </p>
      </div>
      <div className='form-div'>
      <form>
      <div class="mb-3">
      <label for="email" class="form-label">Your Email Address</label>
      <input type="email" class="form-control" id="email"/>
    </div>
    <div class="mb-3">
      <label for="exampleFormControlInput1" class="form-label">Subject</label>
      <input type="subject" class="form-control" id="subject"/>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlInput1" class="form-label">How can we help?</label>
    <textarea class="form-control" id="exampleFormControlInput1" />
  </div>
        
        <button className='btn  send-btn'>Send</button>
        </form>
        </div>
    </div>
  )
}

export default Contact
