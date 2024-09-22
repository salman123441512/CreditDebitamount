import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar';


export default function UpdateAccount() {
    let { _id } = useParams();
    let [show, setShow] = useState('')
    const [data, setData] = useState({
        phone: '',
        address: '',
        date: '',
        image: '',
        amount: '',

    });

    const navigate = useNavigate();



    const getInputData = (e) => {
        const { name, value } = e.target;
        setData((oldData) => ({
            ...oldData,
            [name]: value
        }));
    };
    const getInputFile = (e) => {
        const { files } = e.target;
        if (files.length > 0) {
            setData((oldData) => ({
                ...oldData,
                image: files[0] // Capture the selected file
            }));
        }
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
    
        // Token for authorization
        const token = localStorage.getItem('token');
    
        // Input validation
        if (data.phone.length === 10 && data.address !== '' && data.date !== '' && data.amount !== '') {
            try {
              
                    
                    const formData = new FormData();
                    formData.append('phone', data.phone);
                    formData.append('address', data.address);
                    formData.append('date', data.date);
                    formData.append('amount', data.amount);
                    formData.append('image', data.image);
    
                  let  response = await fetch(`/api/user/${_id}`, {
                        method: "PUT",
                        headers: {
                            "Authorization": token 
                        },
                        body: formData
                    });
               
                
                const jsonResponse = await response.json();
    
                if (jsonResponse.success) {
                    
                    navigate('/AccountHolder');
                } else {
                    console.error("Error updating account:", jsonResponse.message);
                    
                }
    
            } catch (error) {
                console.error("Error:", error);
            }
        } else {
            setShow("Phone Number must contain 10 digits and all fields are required.");
        }
    };
    
    
    async function fetchAccount() {
        const token = localStorage.getItem('token');

        let response = await fetch("/api/user/" + _id, {
            method: "GET",
            headers: {
                "content-type": "application/json",
                "Authorization": token

            }
        })
        response = await response.json()
        if (response) {
            setData(response.data)
            
            
        }
        else
            navigate('/login')
        // }
    }

    useEffect(() => {

        fetchAccount();

    }, [_id]);

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row Create-account-row">
                    <div className="col-md-3 col-lg-2">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9 col-lg-10 Create-account" style={{ marginLeft: 0 }}>
                        <h2 className='mt-5'>Please Fill The Details And Update The Account.</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">

                                    <div className="mb-2">
                                        <label className='text-light mb-2'> Phone <span className='text-danger'>*</span></label>
                                        <input type="text" name='phone' value={data.phone} className='form-control mb-3' onChange={getInputData} placeholder='Enter Phone' required />
                                        {show ? <p className='text-danger'>{show}</p> : ""}
                                    </div>
                                    <label className='text-light mb-2'> Date<span className='text-danger'>*</span></label>
                                    <input type="date" name='date' value={data.date} className='form-control mb-3' onChange={getInputData} placeholder='Enter Date' required />
                                </div>
                                <div className="col-md-6">
                                    <label className='text-light mb-2'> Address <span className='text-danger'>*</span></label>
                                    <input type="text" name='address' value={data.address} className='form-control mb-3' onChange={getInputData} placeholder='Enter Address' required />
                                    <label className='text-light mb-2'> Picture <span className='text-danger'>*</span></label>
                                    <input type="file" name='image' className='form-control mb-3' onChange={getInputFile} placeholder='Upload Image' />

                                    <label className='text-light mb-2'> Amount <span className='text-danger'>*</span></label>
                                    <input type="text" name='amount' value={data.amount} className='form-control mb-3' onChange={getInputData} placeholder='Enter Amount' required />
                                </div>
                            </div>
                            <button type='submit' className='btn btn-success mt-3'>Update Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
