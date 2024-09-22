import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AdminSidebar from '../AdminSidebar'


export default function Account() {

    let [data, setData] = useState([])

    // Function to fetch data from the server
    async function fetchData() {
        const token = localStorage.getItem('token');
        let response = await fetch("/api/user", {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": token
            }
        })
        response = await response.json()
        if (response.status === '200') {
            setData(response.data);

        }
        else
            alert(response.message)

    }
    async function deleteItem(_id) {
        const token = localStorage.getItem('token');

        if (window.confirm("Are You Sure You Want To Delete This Item")) {
            let myresponse = await fetch(`/api/user/${_id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": token
                },
            });

            await myresponse.json()
            fetchData();
        }

    };
    useEffect(() => {
        fetchData();
    }, []);


    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-3 col-lg-2" >
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9 col-lg-10 " style={{ marginTop: "90px", marginLeft: 0 }}>
                        {/* Table Data  */}

                        <div className="table-responsive table-bordered mt-4" >

                            {/* <div className="search-container"> */}

                            {/* <Link to="" style={{ textDecoration: "none", display: "flex", border: "2px solid Green", width: "146px", height: "36px", alignItems: "center", backgroundColor: "green", color: "white" }}>
                                    <span className="material-symbols-outlined">add</span>
                                    Create Account
                                </Link> */}
                            <form action="" style={{ display: 'flex', justifyContent: "space-around" }}>
                                <input type="search" name='search' className='form-control' placeholder='Search Name...' autoComplete='off' />
                                <button type='submit' className='btn btn-primary'>Search</button>
                            </form>
                            {/* </div> */}
                            <table className="table table-striped table-hover mt-1">
                                <thead>
                                    <tr>
                                        
                                        <th>Name</th>
                                        <th>Email</th>
                                        <th>Phone</th>
                                        <th>Date</th>
                                        <th>Aadhar</th>
                                        <th>Address</th>
                                        <th>Amount</th>
                                        <th>Picture</th>
                                        <th>Edit</th>
                                        <th>Delete</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {
                                        data.map((item, index) => {
                                            return <tr key={index}>
                                                
                                                <td>{item.name}</td>
                                                <td>{item.email}</td>
                                                <td>{item.phone}</td>
                                                <td>{item.date}</td>
                                                <td>{item.aadharnumber}</td>
                                                <td>{item.address}</td>
                                                <td>{item.amount}</td>
                                                <td>
                                                    <a href={item.image} target="_blank" rel="noreferrer"> <img src={item.image} alt="" style={{ borderRadius: '50%', width: "42px", height: "42px" }} />  </a>   </td>
                                                <td><Link to={`/UpdateAccount/${item._id}`}><span className="material-symbols-outlined text-warning">edit</span></Link></td>
                                                <td><span className="material-symbols-outlined text-danger " style={{ cursor: "pointer" }} onClick={() => deleteItem(item._id)}>delete</span></td>

                                            </tr>
                                        })
                                    }

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
