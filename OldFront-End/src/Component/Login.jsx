import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; // Import Link for routing

export default function Login() {
  const [formData, setFormData] = useState({ username: '', password: '' });
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

    let response = await fetch('/api/user/login',{
      method:"POST",
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({username:formData.username,password:formData.password})
    })
    response = await response.json()
    
  if(response.status==200){
    localStorage.setItem("login",true)
    localStorage.setItem("name",response.data.name)
    localStorage.setItem("username",response.data.username)
    localStorage.setItem("userid",response.data._id)
    localStorage.setItem("role",response.data.role)
    localStorage.setItem("token",response.token)
    if(response.data.role === "admin")
      navigate('/admin')
    else
    navigate('/userdashboard')
  }
   
   else{
   SetErrorMessage("Invalid username or password")
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
            <h2 className="mt-2 text-center text-primary">Sign In</h2>
            <form onSubmit={postData} className='mt-2'>
              <div className="mb-2">
                <label className='mb-1'>User Name*</label>
                <input  type="text" name="username" onChange={getInputData} required  className='form-control' autoComplete='off'   placeholder="Enter UserName"   />
                 {errormessage?<p className='text-danger'>{errormessage}</p>:'' }
              </div>
              <div className="mb-2">
            <label className='mb-1'>Password*</label>
                <input  type="password"  name="password"  onChange={getInputData} required  className='form-control'   placeholder="Enter Password" />
                {errormessage?<p className='text-danger'>{errormessage}</p>:''}
              </div>
              <div className="d-flex justify-content-between mb-3 mt-0">
                <p></p>
                <Link to="/forget-password-1">Forget Password?</Link>
              </div>
              <div className="mb-3">
                <button type="submit" className="btn btn-primary text-light w-100">Login</button>
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
