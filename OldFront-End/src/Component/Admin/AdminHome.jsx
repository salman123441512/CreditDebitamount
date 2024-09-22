import React, { useEffect, useState } from 'react';
import AdminSidebar from './AdminSidebar';
import { Link, useNavigate } from 'react-router-dom';

export default function AdminHome() {
    const [data, setData] = useState([]); // Ensure data is initialized as an array
    const [ticket, setTicket] = useState([]); // Ensure data is initialized as an array
    const navigate = useNavigate();

    async function getApiData() {
      const token = localStorage.getItem('token');
        let response = await fetch("/api/user", {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": token 
            }
        });
        response = await response.json();
        if (response.status === '200') {
            setData(response.data);
          console.log(data)
        } else {
            navigate('/login');
        }
         response = await fetch('/api/contactUs', {
            method: "GET",
            headers: {
              "content-type": "Application/json",
              "Authorization": token 
      
            }
          })
          response = await response.json()
        
          if (response)
            setTicket(response.data)
          else
            alert(response.message)
    }

    useEffect(() => {
        getApiData();
    }, []);

    const totalAmount = data.reduce((accumulator, item) => {
        return accumulator + (Number(item.amount) || 0);
    }, 0);

    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2" id="admin-navbar">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9 col-lg-10" style={{ marginTop: "100px", marginLeft: 0 }}>
                        <div className="row card-row">
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <div className="card" style={{ height: "170px" }}>
                                    <div className="card-body" style={{ backgroundColor: "#1a1a42" }}>
                                        <div className="card-top-content">
                                            <h5 className="card-title">Total Accounts</h5>
                                            <span className="material-symbols-outlined">group</span>
                                        </div>
                                        <p className="card-text">
                                            Total Accounts : {data.length}
                                        </p>
                                        <Link to="/AccountHolder" className="btn btn-success">
                                            View All
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <div className="card" style={{ height: "170px" }}>
                                    <div className="card-body" style={{ backgroundColor: "#1a1a42" }}>
                                        <div className="card-top-content">
                                            <h5 className="card-title">Available Balance</h5>
                                            <span className="material-symbols-outlined">real_estate_agent</span>
                                        </div>
                                        <p className="card-text">
                                            Available Balance : {totalAmount}
                                        </p>
                                        <Link to="#" className="btn btn-success">
                                            View All
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-4 mb-3 mb-sm-0">
                                <div className="card" style={{ height: "170px" }}>
                                    <div className="card-body" style={{ backgroundColor: "#1a1a42" }}>
                                        <div className="card-top-content">
                                            <h5 className="card-title">Total Ticket</h5>
                                            <span className="material-symbols-outlined">Question_Mark</span>
                                        </div>
                                        <p className="card-text">
                                            New Ticket : {ticket.length}
                                        </p>
                                        <Link to="/ticket" className="btn btn-success">
                                            View All
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Table Data  */}
                        <div className="table-responsive table-bordered mt-4">
                            <Link to="/createaccount" style={{ textDecoration: "none", display: "flex", border: "2px solid Green", width: "146px", height: "36px", alignItems: "center", backgroundColor: "green", color: "white" }}>
                                <span className="material-symbols-outlined">add</span>
                                Create Account
                            </Link>
                            <table className="table table-striped table-hover mt-1">
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Date</th>
                                        <th>Address</th>
                                        <th>Picture</th>
                                        <th>Amount</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        data.reverse().map((item, index) => {
                                            return (
                                                <tr key={index}>
                                                    <td>{item.name}</td>
                                                    <td>{item.email}</td>
                                                    <td>{item.phone}</td>
                                                    <td>{item.date}</td>
                                                    <td>{item.address}</td>
                                                    <td><img src={item.image} height='42px' alt="" style={{ borderRadius: '50%', width: "42px" }} /></td>
                                                    <td>{item.amount}</td>
                                                </tr>
                                            );
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
