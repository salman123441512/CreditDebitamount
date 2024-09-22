import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing

export default function ForgetPassword1() {
  const [formData, setFormData] = useState({ username: '' });
  const [errormessage , SetErrorMessage] = useState('')
  let navigate = useNavigate()

  function getInputData(e) {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));

   
  }

  async function postData(e) {
    e.preventDefault();
   
    let response = await fetch('/api/user/forget-Password-1',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({username:formData.username})
    })
    response = await response.json()
    
  if(response.status==200){
    localStorage.setItem("password-reset-username",formData.username)
     navigate('/forget-Password-2')
   
  }
   
   else{
   SetErrorMessage("Invalid username")
   }

  }

  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <section className="info">
            <section className="company-logo" id="company-logo-container">
              <img src="assets/image/Br.png" alt="BR Ambedkar Fund" />
            </section>
            <h4>Welcome to</h4>
            <h2>BR Ambedkar Fund</h2>
          </section>
          <section className="login-form">
            <h2 className="mt-2 text-center text-primary" style={{fontFamily:"algerian"}}>Reset Password</h2>
            <form onSubmit={postData} className='mt-2'>
              <div className="mt-5">
                <label className='mb-1'  style={{fontFamily:"robotic"}}>User Name*</label>
                <input  style={{fontFamily:"algerian"}} type="text" name="username" value={formData.username} onChange={getInputData} required  className='form-control' autoComplete='off'   placeholder="Enter UserName"   />
                <div className="d-flex justify-content-between mb-1 mt-0">
              {errormessage?<p className='text-danger'>{errormessage}</p>:<p></p> }
                
                <Link to="/login"><p className='text-primary fw-bold'  style={{fontFamily:"algerian"}}>Login</p></Link>
              </div>
              </div>
              
           
             
              <div className="mb-3">
                
                <button type="submit" className="btn btn-primary text-light w-100"  >Send OTP</button>
             
              </div>
            </form>
          </section>
        </div>
      </div>
      <hr />
      {/* <UserDashboard/> */}
    </>
  );
}
