import * as React from 'react';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';




export default function DenseAppBar() {
    let [data, setData] = React.useState([])
    let navigate = useNavigate()
    function logOut() {
        localStorage.clear()
        navigate('/login')
    }
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

            <div className="dasboard-content">
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
                                <img
                                    src={data.image ? data.image: 'default-image-path.jpg'}
                                    className="pro-img"
                                    alt="..."
                                />

                                <p>{localStorage.getItem('name')} <span className='text-warning' onClick={logOut} style={{ cursor: "pointer" }}> Logout </span></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>
                    <div className="col-div-3">
                        <div className="box">

                            <p>
                                Account Number <br />
                                <span>{data._id ? data._id.slice(-6) : ''}</span>
                            </p>

                        </div>
                    </div>
                    <div className="col-div-3">
                        <div className="box">

                            <p>INR Balance <br /> <span>&#8377; {data.amount}.00</span></p>
                        </div>
                    </div>
                    <div className="col-div-3">
                        <div className="box">
                            <p>Loans. <br /> <span>&#8377; 0.00</span></p>

                        </div>
                    </div>
                    <div className="col-div-3">
                        <div className="box">
                            <p>Active Tickets. <br /> <span> 0 </span></p>

                        </div>
                    </div>
                    <div className="clearfix"></div>
                    <br /><br />
                    <div className="col-div-12">
                        <div className="box-12">
                            <div className="content-box">
                                <p>Your Total Transaction History <span>View All</span></p>
                                <br />
                                <div className="table-responsive">
                                    <table >
                                        <tr>
                                            <th>Date</th>
                                            <th>Amount</th>
                                            <th>Type</th>
                                            <th>Method</th>
                                            <th>Status</th>
                                            <th>Total</th>
                                        </tr>
                                        <tr>
                                            <td>{data.date}</td>
                                            <td>{data.amount}</td>
                                            <td>Cash</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>150</td>
                                            <td>Success</td>
                                        </tr>
                                        <tr>
                                            <td>10/06/2024</td>
                                            <td>5000</td>
                                            <td>Online</td>
                                            <td>Google Pay</td>
                                            <td>Success</td>
                                            <td>150</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="clearfix"></div>
                </div>
            </div>

        </>
    );
}
