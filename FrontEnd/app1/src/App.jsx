// import logo from './logo.svg';
// import './App.css';
import { Route, Routes } from 'react-router-dom'
import MyLogo from './pages/logo';
// import axios from 'axios';
import LoginUser from './pages/login';  
import RegisterUser from './pages/register';
import Home from './pages/home';
import AboutPage from './pages/about';
import ManageBooks from './pages/manageBook';
import ReturnBook from './pages/returnBook';
import Test from './pages/test';
import ViewRecords from './pages/viewRecords';
import DefaulterList from './pages/defaulterList';
import ManageUsers from './pages/manageUser';
import ViewIssuedBook from './pages/viewIssuedBook';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
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
      <Routes>
        <Route path='/' element={<LoginUser />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/home' element={<Home />} />
        <Route path='/return' element={<ReturnBook/>}/>
        <Route path='/about' element={<AboutPage />} />
        <Route path='/manageuser' element={<ManageUsers />} />
        <Route path='/managebook' element={<ManageBooks />} />
        <Route path='/test' element={<Test />} />
        <Route path='/viewrecords' element={<ViewRecords />} />
        <Route path='/defaulter' element={<DefaulterList/>}/>
        <Route path='/viewbook' element={<ViewIssuedBook/>}/>
      </Routes>

    </div>
  );
}

export default App;
