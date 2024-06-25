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
          <li className="nav-item"><Link  className="nav-link" to="/return">Return Book</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/manageuser">Manage Users</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/managebook">Manage Books</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/viewbook">View Records</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/home">View Books</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/defaulter">Defaulters List</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/about">About</Link></li>

          <li className="nav-item"><Link  className="nav-link" to="/login">Login</Link></li>
          <li className="nav-item"><Link  className="nav-link" to="/register">Sign Up</Link></li>
        </ul>
      </header>

      <body>
        <h1 className="display-4 mt-4">About Us</h1>
        <p></p>
        <p className="lead">Our goal is to streamline library operations and provide a seamless experience for both librarians and users. Whether you are managing a small community library or a large academic library, our system is flexible and scalable to meet your needs.
        </p>

        <p className="lead">
            Our Library Management System allows you to:
          </p>
          <ul className="lead">
            <li>Track and manage your book inventory with ease.</li>
            <li>Keep records of borrowers and their borrowing history.</li>
            <li>Search for books quickly and accurately.</li>
            <li>Generate reports on library usage and book circulation.</li>
            <li>Manage user accounts and their roles within the system.</li>
          </ul>
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