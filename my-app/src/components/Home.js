import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to the E-learning Platform</h1>
      <p>Please select an option:</p>
      <div style={{ marginTop: '20px' }}>
        <Link to="/login" style={{ marginRight: '20px' }}>
          <button style={{ padding: '10px 20px' }}>Login</button>
        </Link>
        <Link to="/register">
          <button style={{ padding: '10px 20px' }}>Register</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
