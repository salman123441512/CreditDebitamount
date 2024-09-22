import React from 'react'
import Sidebar from './Sidebar'
import { Link } from 'react-router-dom'

export default function UserTicket() {
  return (
    <>
      <div className="dasboard-content"  >
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
                <p>{localStorage.getItem('name')} <span className='text-warning' style={{ cursor: "pointer" }}> Logout </span></p>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>

          <div className="clearfix"></div>


          <div className="table-responsive">
            <Link to="/CreateTicket" style={{ textDecoration: "none", display: "flex", border: "2px solid Green", width: "146px", height: "36px", alignItems: "center", backgroundColor: "green", color: "white" }}>
            <span className="material-symbols-outlined">add</span>
            Create Ticket
          </Link>
          <table>
            <thead>
              <tr>
                <th>Serial Number</th>
                <th>Date</th>
                <th>Subject</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody >
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
              <tr>
                <td>1</td>
                <td>12-04-2024</td>
                <td>This is message for testing</td>
                <td>this is message for testing for query page</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div >




    </>
  )
}
