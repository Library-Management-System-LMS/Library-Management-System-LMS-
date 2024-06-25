import React from 'react';
import logo from '../images/LMS_logo.jpg';
import '../App.css';
import { Link, useLocation } from 'react-router-dom'; 

function MyLogo() {
  return (
    <div className="logo-container">
      <img src={logo} alt="Your Company Logo" className="logo" />
    </div>
  );
}



// const Navbar = () => {
//   const location = useLocation();

//   const renderNavbar = () => {
//     switch(location.pathname){
//       case'/home':
//       return <MyNavbar />;

//       default:
//         return <MyNavbar1 />;
//     }

//   }
  
//   return  <>{renderNavbar()}</>;

// };

const MyNavbar = () =>{
  return (
    <header className="d-flex flex-wrap w-100 justify-content-between align-items-center py-3 mb-4 border-bottom">
  <div className="d-flex align-items-center col-md-4">
    <MyLogo />
    <Link className='nav-link' to="/home">Library Management System</Link>
  </div>

  <ul className="nav col-md-6 justify-content-end list-unstyled">
    {/* Current page - Home (highlighted) */}
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/home">
        Home
      </Link>
    </li>

    {/* Dropdown Menu */}
    <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="/return">Return Book</Link></li>
        <li><Link className="dropdown-item" to="/manageuser">Manage Users</Link></li>
        <li><Link className="dropdown-item" to="/managebook">Manage Books</Link></li>
        <li><Link className="dropdown-item" to="/viewbook">View Records</Link></li>
        <li><Link className="dropdown-item" to="/issuebook">Issue Book</Link></li>
        <li><Link className="dropdown-item" to="/defaulter">Defaulters List</Link></li>
        <li><Link className="dropdown-item" to="/about">About</Link></li>
      </ul>
    </li>

    {/* Login and Signup at right corner */}
    <li className="nav-item ms-3">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/register">Sign Up</Link>
    </li>
  </ul>
</header>

  );
}

const MyNavbar1 = () => {
  return (
    <header className="d-flex flex-wrap w-100 justify-content-between align-items-center py-3 mb-4 border-bottom">
  <div className="d-flex align-items-center col-md-4">
    <MyLogo />
    <Link className='nav-link' to="/home">Library Management System</Link>
  </div>

  <ul className="nav col-md-6 justify-content-end list-unstyled">
    {/* Current page - Home (highlighted) */}
    <li className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/home">
        Home
      </Link>
    </li>

    {/* Dropdown Menu */}
    {/* <li className="nav-item dropdown">
      <a
        className="nav-link dropdown-toggle"
        href="#"
        id="navbarDropdown"
        role="button"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        More
      </a>
      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
        <li><Link className="dropdown-item" to="/return">Return Book</Link></li>
        <li><Link className="dropdown-item" to="/manageuser">Manage Users</Link></li>
        <li><Link className="dropdown-item" to="/managebook">Manage Books</Link></li>
        <li><Link className="dropdown-item" to="/viewbook">View Records</Link></li>
        <li><Link className="dropdown-item" to="/defaulter">Defaulters List</Link></li>
        <li><Link className="dropdown-item" to="/about">About</Link></li>
      </ul>
    </li>
 */}
    {/* Login and Signup at right corner */}
    {/* <li className="nav-item ms-3">
      <Link className="nav-link" to="/login">Login</Link>
    </li>
    <li className="nav-item">
      <Link className="nav-link" to="/register">Sign Up</Link>
    </li> */}
  </ul>
</header>

  );
}


function MyFooter(){
  return (
    <footer className="d-flex flex-wrap justify-content-center align-items-center py-3 my-4 border-top">
        <p className="col-md-4 mb-0 text-muted">2024 Library Managment System</p>

        {/* <a href="#" className="col-md-3 d-flex align-items-center justify-content-md-end mb-md-0 text-muted link-dark text-decoration-none">
          <svg className="bi me-2" width="24" height="24"><use href="#bootstrap-facebook"/></svg>
        </a>
        <a href="#" className="col-md-3 d-flex align-items-center justify-content-md-end mb-md-0 text-muted link-dark text-decoration-none">
          <svg className="bi me-2" width="24" height="24"><use href="#bootstrap-twitter"/></svg>
        </a> */}
      </footer>
  );
}

export { MyLogo, MyNavbar, MyNavbar1, MyFooter};
