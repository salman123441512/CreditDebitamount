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
        console.log(response)
        if (response.success==true) {
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

            <div className="dasboard-content" style={{ height: "100vh" }}>
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
                                    src={data.image ? data.image : 'default-image-path.jpg'}
                                    className="pro-img"
                                    alt="..."
                                />

                                <p>{localStorage.getItem('name')} <span className='text-warning' onClick={logOut} style={{ cursor: "pointer" }}> Logout </span></p>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </div>

                    <div className="clearfix"></div>

                    <div className="col-div-12">
                        <div className="box-12">
                            <div className="content-fbox">
                                <div className="container-fluid ">


                                    <div class="row" style={{ backgroundColor: "#1b203d", border: "2px solid yellow" }}>
                                        <div class="col-sm-6 mb-3 mb-sm-0">
                                            <div class="card" style={{ backgroundColor: "#1b203d", border: "none" }}>
                                                <div class="card-body text-start" style={{ backgroundColor: "#1b203d" }}>
                                                    <img src={data.image ? data.image : 'default-image-path.jpg'} style={{ height: '140px', border: "2px double yellow", borderRadius: "50%", width: "150px" }} alt="" />
                                                    <h5 class="card-title mt-3">{data.name}</h5>
                                                    <p class="card-text text-warning">{data.name} You Are an Account Holder in Ambedkar Fund.</p>

                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-sm-6">
                                            <div class="card" style={{ backgroundColor: "#1b203d", borderRadius: "100px" }}>
                                                <div class="card-body text-start " style={{ backgroundColor: "#1b203d" }}>
                                                    <ul className='mt-5 '>
                                                        <li className='mb-3 '><span className='bi bi-people text-warning mx-1'></span> : {data.username}</li>
                                                        <li className='mb-3 '><span className="bi bi-envelope text-warning mx-1"></span>  : {data.email}</li>
                                                        <li className='mb-3 '><span className='bi bi-telephone text-warning mx-1'></span>  : {data.phone}</li>
                                                        <li className='mb-3 '><span className='bi bi-geo-alt text-warning mx-1'></span> : {data.address}</li>
                                                    </ul>


                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="clearfix"></div>
            </div>


        </>
    );
}
