// import <LMS_logo className="jpg"></LMS_logo>
import { Link } from "react-router-dom";
import MyLogo from "./logo";
// import logo from "../images/LMS_logo.jpg"

function Test() {

  return (
    <div className="container">
      

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
        <li><Link className="dropdown-item" to="/viewbooks">View Books</Link></li>
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























    </div>  
  );
}



export default Test;
