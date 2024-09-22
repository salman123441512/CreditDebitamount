import React, { useState } from 'react'
import AdminSidebar from '../AdminSidebar'
import { Link, useNavigate } from 'react-router-dom'

export default function Profile() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    async function getApiData() {
        const token = localStorage.getItem('token');
        let response = await fetch("/api/user/" + localStorage.getItem('userid'), {
            method: 'GET',
            headers: {
                "content-type": "application/json",
                "Authorization": token
            }
        })
        response = await response.json()
        if (response.success === true) {
            setData(response.data)
            console.log(response)
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
            <div className="container-fluid profile-container ">
                <div className="row mt-4">
                    <div className="col-md-3 col-lg-2 mt-3">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9 mt-4 col-lg-10" style={{ marginLeft: 0, }}>
                        <div className="container pt-4 ">
                            <div className="row pt-3 profile-row">
                                <div className="col-md-6">
                                    <div className="card card-profile">
                                        <img
                                            src={data.image ? data.image : 'default-image-path.jpg'}
                                            className="card-img-top"
                                            alt="..."
                                        />

                                        <div className="card-bodyi mt-3">
                                            <h4 className="card-title">{data.name}</h4>
                                            <h5 className="card-text ">Father Name | Nawab Ali </h5>
                                            <Link to="/" className="btn btn-success mt-4">Update Profile</Link>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-6">
                                    <div className="cardi profile-card2 mt-5" >
                                        <div className="card-bodyi">
                                            <h6 className="card-title profile-h5"><span className="bi bi-telephone"></span> <span>+91 {data.phone}</span> <span className="bi bi-check-circle-fill "></span></h6><hr />
                                            <h6 className="card-title profile-h5"><span className="bi bi-envelope"></span><span>{data.email}</span><span className="bi bi-check-circle-fill "></span></h6><hr />
                                            <h6 className="card-title profile-h5"><span className="bi bi-calendar4-event"></span> <span>{data.date}</span> </h6>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container mt-5">
                            <div className="row">
                                <div className="col-md-12">
                                    <table className="table table-hover table-dark text-light table-bordered">
                                        <thead>
                                            <tr>
                                                <th>Jan</th>
                                                <th>Feb</th>
                                                <th>March</th>
                                                <th>April</th>
                                                <th>May</th>
                                                <th>June</th>

                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td className="text-warning">100</td>
                                                <td>300</td>
                                                <td>720</td>
                                                <td>150</td>
                                                <td className="text-warning">100</td>
                                                <td>90</td>


                                            </tr>
                                            <tr>
                                                <td>300</td>
                                                <td className="text-warning">100</td>
                                                <td>720</td>
                                                <td>150</td>
                                                <td>90</td>
                                                <td className="text-warning">100</td>


                                            </tr>
                                            <tr>
                                                <td>300</td>
                                                <td className="text-warning">100</td>
                                                <td>720</td>
                                                <td>150</td>
                                                <td>90</td>
                                                <td className="text-warning">100</td>


                                            </tr>
                                            <tr>
                                                <td>300</td>
                                                <td className="text-warning">100</td>
                                                <td>720</td>
                                                <td>150</td>
                                                <td>90</td>
                                                <td className="text-warning">100</td>


                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
