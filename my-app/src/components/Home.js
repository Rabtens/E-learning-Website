import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';  // Correctly import the CSS

const Home = () => {
  console.log("Rendering Home Component");  // Check if this shows up in the console
  return (
    <div className="container">
      <header className="header">
        <h1 className="title">E-learning Platform</h1>
        <p className="subtitle">A simple, easy way to learn online!</p>
      </header>
      <main className="main">
        <p className="description">Please choose an option to get started:</p>
        <div className="button-container">
          <Link to="/login" className="link">
            <button className="button">Login</button>
          </Link>
          <Link to="/register" className="link">
            <button className="button">Register</button>
          </Link>
        </div>
      </main>
      <footer className="footer">
        <p>&copy; 2024 E-learning Platform</p>
      </footer>
    </div>
  );
};

export default Home;
