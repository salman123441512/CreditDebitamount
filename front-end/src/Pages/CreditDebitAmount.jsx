import React, { useState } from 'react';
import { getUserByAccountNumber, updateAmount } from '../Services/api';

const CreditDebitAmount = () => {
  const [accountNumber, setAccountNumber] = useState('');
  const [user, setUser] = useState(null);
  const [amount, setAmount] = useState(0);
  const [transactionType, setTransactionType] = useState('credit');

  const handleSearch = async () => {
    try {
      const response = await getUserByAccountNumber(accountNumber);
      setUser(response.data);
    } catch (error) {
      alert('User not found');
    }
  };

  const handleUpdateAmount = async () => {
    try {
      await updateAmount(user.accountNumber, { amount: parseFloat(amount), type: transactionType });
      alert('Amount updated successfully');
      handleSearch(); // Refresh user data
    } catch (error) {
      alert('Error updating amount');
    }
  };

  return (
    <div className="container">
      <h2>Credit/Debit Amount</h2>
      <input
        type="text"
        className='form-control' placeholder="Search by Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <button className=' btn btn-primary form-control mt-1' onClick={handleSearch}>Search User</button>

      {user && (

        <div className='container-fluid mt-3' style={{ border: "2px solid blue", borderRadius: "10px" }} >

          <div className="row ">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-4">
                  <img src="" alt="" style={{ height: "100px", width: "100px", borderRadius: "50%", border: "2px solid green", marginTop: "20px" }} />
                </div>
                <div className="col-md-8">
                  <h4 className='mt-3'> {user.name}</h4>
                  <span className='d-flex align-items-center mt-0' >
                    <i className='bi bi-envelope text-success fw-bold '></i>
                    <p className='mb-0 fw-bold' style={{ marginLeft: "5px" }}> : {user.email}</p>
                  </span>
                  <span className='d-flex align-items-center mt-0' >
                    <i className='bi bi-telephone text-success fw-bold '></i>
                    <p className='mb-0 fw-bold' style={{ marginLeft: "5px" }}> : {user.phone}</p>
                  </span>
                  <span className='fw-bold mt-2 mb-2 d-flex align-items-center'>
                    <i className='bi bi-wallet2 me-2 text-success fw-bold'></i> &nbsp;: {user.totalAmount}
                  </span>

                </div>
              </div>
            </div>
            <div className="col-md-6 text-center profile-row" style={{ display: "grid" }}>
              <h4 className='mt-2'>Update Amount</h4>
              <input
                type="number"
                className='form-control mb-2' placeholder="Enter Amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <select onChange={(e) => setTransactionType(e.target.value)} className='form-control mb-2'>
                <option value="credit">Credit</option>
                <option value="debit">Debit</option>
              </select>
              <button className=' btn btn-success form-control mt-1 mb-3' onClick={handleUpdateAmount}>Update Amount</button>
            </div>
          </div>

        </div>

      )}
    </div>
  );
};

export default CreditDebitAmount;
