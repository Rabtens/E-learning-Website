import React, { useState, useContext } from 'react';
import { loginUser } from '../api/auth'; // Ensure this function is defined properly
import { AuthContext } from '../context/AuthContext';

const Login = () => {
  const { login } = useContext(AuthContext);
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState(null); // State to handle error messages
  const [loading, setLoading] = useState(false); // State to show loading status

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); // Reset error state before the API call
    try {
      const res = await loginUser(formData);
      localStorage.setItem('token', res.data.token);
      login();
      alert('Login successful');
    } catch (error) {
      setError(error.response ? error.response.data.msg : 'An unexpected error occurred');
    } finally {
      setLoading(false); // Stop loading regardless of success or failure
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={onChange} required />
      <input type="password" name="password" placeholder="Password" onChange={onChange} required />
      <button type="submit" disabled={loading}>
        {loading ? 'Logging in...' : 'Login'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>} {/* Display error message */}
    </form>
  );
};

export default Login;
