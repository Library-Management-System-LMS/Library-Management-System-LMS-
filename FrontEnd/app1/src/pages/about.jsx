import React from 'react';
import { Link } from 'react-router-dom';

function AboutPage() {
  return (
    <div className="container">
      <header className="d-flex flex-wrap justify-content-between align-items-center py-3 mb-4 border-bottom">
        <div className="d-flex align-items-center col-md-3">
          <Link className='nav-link' to="/home">Library Managment System</Link>
        </div>

        <ul className="nav col-md-6 justify-content-end list-unstyled">
          <li className="nav-item"><Link  className="nav-link" to="/home">Home</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><a href="#" className="nav-link">Services</a></li>
          <li className="nav-item"><a href="#" className="nav-link">Contact</a></li>
        </ul>
      </header>

      <body>
        <h1 className="display-4 mt-4">About Us</h1>
        <p></p>
        <p className="lead">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </body>

      <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">2024 Library Managment System</p>

        {/* <a href="#" className="col-md-3 d-flex align-items-center justify-content-md-end mb-md-0 text-muted link-dark text-decoration-none">
          <svg className="bi me-2" width="24" height="24"><use href="#bootstrap-facebook"/></svg>
        </a>
        <a href="#" className="col-md-3 d-flex align-items-center justify-content-md-end mb-md-0 text-muted link-dark text-decoration-none">
          <svg className="bi me-2" width="24" height="24"><use href="#bootstrap-twitter"/></svg>
        </a> */}
      </footer>
    </div>
  );
}

export default AboutPage;
