import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom'
import LoginUser from './pages/login';  
import RegisterUser from './pages/register';
import Home from './pages/home';

function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<LoginUser />} />
        <Route path='/register' element={<RegisterUser />} />
        <Route path='/home' element={<Home />} />
      </Routes>

    </div>
  );
}

export default App;
