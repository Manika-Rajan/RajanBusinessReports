import Axios from "axios";
import React, { useContext, useState } from 'react'
import Navbar from './Navbar'
import './ReportDisplay.css'
import { server } from "./Server";
import "./PaymentGateway.css"
import Personal from '../assets/Personal.svg'
import Delivery from '../assets/Delivery.svg'
import pencil from '../assets/pencil.svg'
import { Store } from '../Store'
//import { useNavigate } from 'react-router-dom'
const Payment = () => {
    //const navigate=useNavigate()
    const {state,dispatch:cxtDispatch}=useContext(Store)
    const {totalPrice}=state
    const [amount, setAmount] = useState();
    const handlePaymentSuccess = async (response) => {
      try {
        let bodyData = new FormData();
  
        // we will send the response we've got from razorpay to the backend to validate the payment
        bodyData.append("response", JSON.stringify(response));
  
        await Axios({
          url: `${server}/razorpay/payment/success/`,
          method: "POST",
          data: bodyData,
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        })
          .then((res) => {
            console.log("Everything is OK!");
            
            
          })
          .catch((err) => {
            console.log(err);
          });
      } catch (error) {
        console.log(console.error());
      }
    };
  
    // this will load a script tag which will open up Razorpay payment card to make //transactions
    const loadScript = () => {
      const script = document.createElement("script");
      script.src = "https://checkout.razorpay.com/v1/checkout.js";
      document.body.appendChild(script);
    };
    const showRazorpay = async () => {
      const res = await loadScript();
  
      let bodyData = new FormData();
      console.log(amount);
      setAmount({totalPrice});
  
  
      // we will pass the amount and product name to the backend using form data
      bodyData.append("amount", totalPrice.toString());
      
      
      const data = await Axios({
        url: `${server}/razorpay/pay/`,
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        data: bodyData,
      }).then((res) => {
        return res;
      });
  
      // in data we will receive an object from the backend with the information about the payment
      //that has been made by the user
  
      var options = {
        key_id: process.env.REACT_APP_PUBLIC_KEY, // in react your environment variable must start with REACT_APP_
        key_secret: process.env.REACT_APP_SECRET_KEY,
        amount: data.data.payment.amount,
        currency: "INR",
        name: "Rajan Business Ideas Pvt. Ltd",
        description: "Test transaction",
        image: "", // add image url
        order_id: data.data.payment.id,
        handler: function (response) {
          // we will handle success by calling handlePaymentSuccess method and
          // will pass the response that we've got from razorpay
          handlePaymentSuccess(response);
        },
        prefill: {
          name: "User's name",
          email: "User's email",
          contact: "User's phone",
        },
        notes: {
          address: "Razorpay Corporate Office",
        },
        theme: {
          color: "#3399cc",
        },
      };
  
      var rzp1 = new window.Razorpay(options);
      rzp1.open();
    };
  return (
    <div>
    <Navbar reports/>
     <div className='payments-page row'>
      <div className='payments-left col-md-6'>
         <div className='row' style={{textAlign:"center"}}>
         <img src={Personal} style={{width:"187px",height:"36px",margin:"auto"}}/>
         </div>
         <div className='row payment-name'>
         <div className="col-md-4">
         <label>Name:</label>       
           </div>
           <div className='col-md-4'>
           <p>Akrithi</p>
           </div>
           <div className='col-md-4'>
           <img src={pencil}/>
           </div>
         </div>
         <div className='row'>
         </div>
         <div className='row'style={{textAlign:"center"}}>
         <img src={Delivery} style={{width:"187px",height:"36px",margin:"auto"}}/>
         </div>
         <div className='row'>
         </div>
      </div>
      <div className='payments-right col-md-6'>
      <div className='row'>
      <div className='pdf-div'>

      </div>
      </div>
      <div className='row'>
      <p className='pay-price'>Total Price:₹{totalPrice}</p>
      </div>
      <div className='row'>
       <button onClick={showRazorpay} className='pay-btn '>PAY NOW</button>
      </div>
      </div>
     </div>
    </div>
  )
}

export default Payment
