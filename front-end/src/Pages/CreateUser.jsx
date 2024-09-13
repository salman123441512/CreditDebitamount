import React, { useState } from 'react';
import { createUser } from '../Services/api';

const CreateUser = () => {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', accountNumber: '', aadharCard: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createUser(formData);
      alert('User created successfully');
      setFormData({ name: '', email: '', phone: '', accountNumber: '', aadharCard: '' });
    } catch (error) {
      alert('Error creating user');
    }
  };

  return (
    <div className="container">
      <h2>Create User</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
        <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required />
        <input type="text" name="accountNumber" placeholder="Account Number" value={formData.accountNumber} onChange={handleChange} required />
        <input type="text" name="aadharCard" placeholder="Aadhar Card" value={formData.aadharCard} onChange={handleChange} required />
        <button type="submit">Create User</button>
      </form>
    </div>
  );
};

export default CreateUser;
