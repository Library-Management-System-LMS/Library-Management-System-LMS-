import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import axios from 'axios';
import LoginUser from './pages/login';  
import RegisterUser from './pages/register';
import Home from './pages/home';
import AboutPage from './pages/about';
import ManageBooks from './pages/manageBook';
import ReturnBook from './pages/returnBook';
import Test from './pages/test';
import IssuedBook from './pages/issueBook';
import DefaulterList from './pages/defaulterList';

function App() {
  return (
    <div className="App">
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
        <Route path='/issue' element={<IssuedBook />} />
        <Route path='/defaulter' element={<DefaulterList/>}/>
      </Routes>

    </div>
  );
}

export default App;
