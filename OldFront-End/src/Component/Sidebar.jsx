import React from 'react';
import { Link } from 'react-router-dom';


export default function Sidebar() {
  return (
   
    <div className="sidenav" id="mysidenav" >
      <p className="dashboard-logo text-warning fs-4 mb-5 mx-3"> BR <span>Ambedkar Fund</span> </p>
      <Link to="/userdashboard" className="link"><i className="material-symbols-outlined">dashboard</i>&nbsp;&nbsp; Dashboard</Link>
      <Link to="/userprofileview" className="link"><i className="material-symbols-outlined">people</i>&nbsp;&nbsp; Profile View</Link>
     
      <Link to="/userticket" className="link"><i className="material-symbols-outlined">support_agent</i>&nbsp;&nbsp; Ticket</Link>
      
    </div>

    
    
  );
}
