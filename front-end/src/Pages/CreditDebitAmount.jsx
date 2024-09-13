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
        placeholder="Search by Account Number"
        value={accountNumber}
        onChange={(e) => setAccountNumber(e.target.value)}
      />
      <button onClick={handleSearch}>Search User</button>

      {user && (
        
      <div >
       
          <h3>User Profile</h3>
          <div className=" col-md-6 mt-3">
            <img src="" alt="" style={{height:"100px", width:"100px", borderRadius:"50%"}}/>
          <p className='mt-2'>Name: {user.name}</p>
          </div>
         <div className="col-md-6">
         <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Total Amount: {user.totalAmount}</p>
         </div>
          <h4>Update Amount</h4>
          <input
            type="number"
            placeholder="Enter Amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
          />
          <select onChange={(e) => setTransactionType(e.target.value)}>
            <option value="credit">Credit</option>
            <option value="debit">Debit</option>
          </select>
          <button onClick={handleUpdateAmount}>Update Amount</button>
        </div>
        
      )}
    </div>
  );
};

export default CreditDebitAmount;
