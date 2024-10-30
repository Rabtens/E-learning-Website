import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
  const { isAuthenticated, logout } = useContext(AuthContext);

  if (!isAuthenticated) {
    return <p>You need to log in to access this page.</p>;
  }

  return (
    <div>
      <h1>Welcome to the E-Learning Platform!</h1>
      <button onClick={logout}>Logout</button>
    </div>
  );
};

export default Home;
