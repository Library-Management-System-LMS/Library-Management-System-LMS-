import React from 'react';
import logo from '../images/LMS_logo.jpg';
import '../App.css';

function MyLogo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Your Company Logo" className="logo" />
    </div>
  );
}

export default MyLogo;
