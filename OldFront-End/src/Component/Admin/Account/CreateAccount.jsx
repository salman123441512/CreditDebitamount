import React, { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AdminSidebar from '../AdminSidebar';
import FormValidationChecker from '../../ValidationChecker/FormValidationChecker';

export default function CreateAccount() {
    const data = useRef({
        name: '',
        email: '',
        username: '',
        password: '',
        date: '',
        address: '',
        phone: '',
        aadharnumber: '',
        amount: '',
        image: '',
        role: ''
    });

    const [errors, setErrors] = useState({
        name: null,
        email: null,
        username: null,
        date: null,
        phone: null,
        address: null,
        aadharnumber: null,
        amount: null,
        password: null,
    });

    const [showErrors, setShowErrors] = useState(false);
    const navigate = useNavigate();

    const getInputData = (e) => {
        const { name, value } = e.target;
        data.current = { ...data.current, [name]: value };

        // Validate current input field
        const errorMessage = FormValidationChecker({ target: { name, value } });
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: errorMessage
        }));
    };

    const getInputFile = (e) => {
        const { name, files } = e.target;
        data.current = { ...data.current, [name]: files[0] };
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formValid = Object.values(errors).every((error) => error === null || error === '');

        if (formValid) {
            const token = localStorage.getItem('token'); // Retrieve the token from local storage

            const formData = new FormData();
            formData.append('phone', data.current.phone);
            formData.append('name', data.current.name);
            formData.append('username', data.current.username);
            formData.append('email', data.current.email);
            formData.append('password', data.current.password);
            formData.append('address', data.current.address);
            formData.append('aadharnumber', data.current.aadharnumber);
            formData.append('date', data.current.date);
            formData.append('amount', data.current.amount);
            if (data.current.image) {
                formData.append('image', data.current.image);
            }
            formData.append('role', "buyer");
    
            let response = await fetch("/api/user", {
                method: "POST",
                headers: {
                   
                    "Authorization": token 
                },
                body: formData
            });

            response = await response.json();
            

            if (response.success === true) {
                navigate('/AccountHolder');
            } else {
                alert(response.message + response.status);
            }
        } else {
            setShowErrors(true);
        }
    };

    // Form Validation 
    const showError = (fieldName) => {
        if (showErrors && errors[fieldName]) {
            return <p className='text-warning'>{errors[fieldName]}</p>;
        }
        return null;
    };

    return (
        <>
            <div className="container-fluid mt-4">
                <div className="row Create-account-row">
                    <div className="col-md-3 col-lg-2">
                        <AdminSidebar />
                    </div>
                    <div className="col-md-9 col-lg-10 Create-account" style={{ marginLeft: 0 }}>
                        <h2 className='mt-5'>Please Fill The Details And Create A New Account.</h2>
                        <form onSubmit={handleSubmit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <label className='text-light mb-2'> Name <span className='text-danger'>*</span></label>
                                    <input type="text" name='name' className='form-control mb-3' onChange={getInputData} placeholder='Enter Name' required />
                                    {showError('name')}
                                    <label className='text-light mb-2'>User Name <span className='text-danger'>*</span></label>
                                    <input type="text" name='username' className='form-control mb-3' onChange={getInputData} placeholder='Enter User Name' required />
                                    {showError('username')}
                                    <label className='text-light mb-2'> Email <span className='text-danger'>*</span></label>
                                    <input type="text" name='email' className='form-control mb-3' onChange={getInputData} placeholder='Enter Email' required />
                                    {showError('email')}
                                    <label className='text-light mb-2'> Password <span className='text-danger'>*</span></label>
                                    <input type="password" name='password' className='form-control mb-3' onChange={getInputData} placeholder='Enter Password ' required />
                                    {showError('password')}
                                    <label className='text-light mb-2'>Picture<span className='text-danger'>*</span></label>
                                    <input type="file" name='image' className='form-control mb-3' onChange={getInputFile} placeholder='Select Image ' />
                                    {showError('image')}
                                </div>
                                <div className="col-md-6">
                                    <label className='text-light mb-2'> Address <span className='text-danger'>*</span></label>
                                    <input type="text" name='address' className='form-control mb-3' onChange={getInputData} placeholder='Enter Address' required />
                                    {showError('address')}
                                    <label className='text-light mb-2'> Phone <span className='text-danger'>*</span></label>
                                    <input type="text" name='phone' className='form-control mb-3' onChange={getInputData} placeholder='Enter Phone' required />
                                    {showError('phone')}
                                    <label className='text-light mb-2'> Aadhar Number <span className='text-danger'>*</span></label>
                                    <input type="text" name='aadharnumber' className='form-control mb-3' onChange={getInputData} placeholder='Enter Aadhar Number' required />
                                    {showError('aadharnumber')}
                                    <label className='text-light mb-2'> Amount <span className='text-danger'>*</span></label>
                                    <input type="text" name='amount' className='form-control mb-3' onChange={getInputData} placeholder='Enter Amount' required />
                                    {showError('amount')}
                                    <label className='text-light mb-2'> Date <span className='text-danger'>*</span></label>
                                    <input type="date" name='date' className='form-control mb-3' onChange={getInputData} placeholder='Select Date' required />
                                    {showError('date')}
                                </div>
                            </div>
                            <button type='submit' className='btn btn-success mt-3'>Create Account</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}
