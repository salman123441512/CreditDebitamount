import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import "../../css/Admin/accountDashboard.css"

export default function AdminSidebar() {
  const [data, setData] = useState([])
  const navigate = useNavigate()
  const [isChecked, setIsChecked] = useState(false);

  const handleToggleMenu = () => {
    setIsChecked(!isChecked);
  };
  async function getApiData() {
    const token = localStorage.getItem('token');
    let response = await fetch("/api/User/" + localStorage.getItem('userid'), {
      method: 'GET',
      headers: {
        "content-type": "application/json",
        "Authorization": token
      }
    })
    response = await response.json()
    if (response.success === true) {
      setData(response.data)

    }
    else {
      navigate('/login')
    }
  }
  React.useEffect(() => {
    getApiData()
  }, [])
  return (
    <>
      <input type="checkbox" id="menu-toggle" checked={isChecked} onChange={handleToggleMenu} />
      <div className="sidebar">
        <div className="side-header" >
          <h3>BR <br /><span>Ambedkar Fund</span></h3>
        </div>

        <div className="side-content">
          <div className="profile-admin" style={{ textAlign: "center", marginTop: '10px' }}>
            <div className="profile-img bg-img" > <img src="assets/image/ShushilKumar.jpeg" alt="" style={{ height: '73px', width: "70px", borderRadius: "50%" }} /> </div>
            <h4 className='text-light'>{data.name}</h4>
            <small className='text-warning'>Director of AF</small>
          </div>

          <div className="side-menu">
            <ul>
              <li>
                <Link to="/admin" >
                  <span className="material-symbols-outlined">Dashboard</span>
                  <small> Dashboard</small>
                </Link>
              </li>
              <li>
                <Link to="/AccountHolder" >
                  <span className="material-symbols-outlined">user_attributes</span>
                  <small>Account Holder</small>
                </Link>
              </li>
              <li>
                <Link to="/profile">
                  <span className="material-symbols-outlined">person</span>
                  <small>Profile</small>
                </Link>
              </li>
              <li>
                <Link to="/createaccount">
                  <span className="material-symbols-outlined">add</span>
                  <small>Create Account</small>
                </Link>
              </li>
              <li>
                <Link to="/ticket">
                  <span className="material-symbols-outlined">help</span>
                  <small>Ticket</small>
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </div>

      <div className="main-content">
        <header className='admin-header'>
          <div className="header-content">
            <label htmlFor="menu-toggle">
              <span className="material-symbols-outlined"> &#9776;</span>
            </label>


            <div className="user">
              <span className="material-symbols-outlined">account_balance</span>
              <span>Br Ambedkar Fund</span>
            </div>
          </div>

        </header>
      </div>


    </>
  )
}
