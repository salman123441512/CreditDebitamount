import React from 'react'
import Sidebar from './Sidebar'


export default function CreateTicket() {
  return (
    <>
      <div className="dasboard-content" style={{height:"100vh"}}>
        <Sidebar />
        <div id="main" >
          <div className="head pt-2">
            <div className="col-div-6">
              <span style={{ color: "white", cursor: "pointer", fontSize: "30px", textAlign: " end" }}
                className="aterial-symbols-outlined nav1"> &#9776; Dashboard</span>
              <span style={{ color: "white", cursor: "pointer", fontSize: "30px", textAlign: " end" }}
                className="aterial-symbols-outlined nav2"> &#9776; Dashboard</span>

            </div>
            <div className="col-div-6">

              <div className="profile">
                <img src={`assets/image/`} className="pro-img" alt="" />
                <p>{localStorage.getItem('name')} <span className='text-warning' style={{ cursor: "pointer" }}> Logout </span></p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="clearfix"></div>
          <form action="" >
            <label className='text-light mb-2'>Subject. <span className='text-danger'>*</span></label>
            <input type="text" name='subject' className='form-control mb-2' placeholder='Your Subject' required />
            <label className='text-light mb-2 mt-3'>Message. <span className='text-danger'>*</span></label>
            <textarea name='message' className='form-control mb-2' placeholder='Message...' required ></textarea>
            <button type='submit'  className='btn btn-success mt-3 '>Send</button>
          </form>
        </div>
      </div >

    </>
  )
}
