import axios from 'axios';

const API_URL = 'http://localhost:5000/api/auth'; // Adjust if the server is running elsewhere

export const registerUser = async (userData) => {
  return axios.post(`${API_URL}/register`, userData);
};

export const loginUser = async (userData) => {
  return axios.post(`${API_URL}/login`, userData);
};
