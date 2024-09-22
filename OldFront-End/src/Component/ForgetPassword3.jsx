import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing

export default function ForgetPassword3() {
  const [formData, setFormData] = useState({ password: '',cpassword:"" });
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
   
  if(formData.password === formData.cpassword){
    let response = await fetch('/api/user/forget-Password-3',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({username:localStorage.getItem('password-reset-username'),password:formData.password})
    })
    response = await response.json()
    
  if(response.status==200){
    localStorage.removeItem("password-reset-username")
     navigate('/login')
   
  }
   
   else{
    SetErrorMessage(response.message)
  }
}
else{
  SetErrorMessage("Password and Confirm Password Doesn't Matched")

}
  }
useEffect(()=>{
 if(!localStorage.getItem('password-reset-username')){
  navigate('/forget-password-1')
 }
},[])
  return (
    <>
      <div className="login-body">
        <div className="login-container">
          <section className="info">
            <section className="company-logo" id="company-logo-container">
              <img src="assets/image/Br.png" alt="BR Ambedkar Fund" />
            </section>
            <h4 style={{fontFamily:"algerian"}}>Welcome to</h4>
            <h2 style={{fontFamily:"algerian"}}>BR Ambedkar Fund</h2>
          </section>
          <section className="login-form">
            <h2 className="mt-2 text-center text-primary" style={{fontFamily:"algerian"}}>Create New Password</h2>
            <form onSubmit={postData} className='mt-2'>
            <div className="mb-2">
                <label className='mb-1'>Password</label>
                <input  type="password" name="password" style={{fontFamily:"algerian"}}  onChange={getInputData} required  className='form-control' autoComplete='off'   placeholder="Enter New Password"   />
                 
              </div>
              <div className="mb-2">
            <label className='mb-1'> Confirm Password</label>
                <input  type="password"  name="cpassword" style={{fontFamily:"algerian"}}  onChange={getInputData} required  className='form-control'   placeholder="Enter Confirm Password" />
                {errormessage?<p className='text-danger'>{errormessage}</p>:<p></p>}
              </div>
             
              <div className="mb-3">
                <button type="submit" className="btn btn-primary text-light w-100">Reset Password</button>
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
