import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout';

function AboutPage() {
//to set title of the page
document.title = "ABOUT US";

  return (
    <div className="container">

        <body>
          <h1 className="display-4 mt-4">About Us</h1>
          <p></p>
          <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </body>
      
    </div>
  );
}

export default AboutPage;
