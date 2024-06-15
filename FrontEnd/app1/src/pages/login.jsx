import React, { useState } from 'react';
// import './LoginUser.css'; // Import your custom CSS (optional)

const LoginUser = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your login logic here (e.g., API call)
    console.log('Username:', username, 'Password:', password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className="container-fluid d-flex flex-column h-100">
      <header className="navbar navbar-expand-sm navbar-light bg-light fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">Library Mangement Sytem</a>
        </div>
      </header>
      <main className="d-flex justify-content-center align-items-center flex-grow-1 pt-5 mt-5">
        <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4 col-xl-3 card p-4">
          <h1 className="text-center mb-4">Login</h1>
          <form onSubmit={handleSubmit}>
            <div className="form-group mb-3">
              <label htmlFor="username" className="form-label">Email</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div className="form-check mb-3">
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label" htmlFor="rememberMe">Remember Me</label>
            </div>
            <button type="submit" className="btn btn-primary w-100">Login</button>
            <a href="#" className="d-block mt-3 text-muted">Forgot Password?</a>
            <p className="text-center mt-4">Don't have an account? <a href="#">Register Here</a></p>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginUser;
