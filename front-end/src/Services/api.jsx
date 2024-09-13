import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

export const createUser = (userData) => axios.post(`${API_URL}/users`, userData);

export const getUserByAccountNumber = (accountNumber) => axios.get(`${API_URL}/users/${accountNumber}`);

export const updateAmount = (accountNumber, data) => axios.put(`${API_URL}/users/${accountNumber}`, data);
