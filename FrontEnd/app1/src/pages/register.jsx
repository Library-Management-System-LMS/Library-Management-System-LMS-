import React, { useState } from 'react';
import axios from 'axios';

const RegisterUser = () => {
    //to set title of the page
    document.title = "SIGN UP";

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    role: 'admin', // Default role
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('', formData);
      console.log('Registration successful:', response.data);
      // Optionally: show a success message or redirect to another page
    } catch (error) {
      console.error('Registration failed:', error);
      // Optionally: handle error state or show an error message
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center pt-5">
        <div className="col-md-8 d-flex flex-wrap justify-content-between">
          <div className="col-md-5 pe-4 mb-4">
            <h2 className="text-center mb-5">Welcome to Our Library!</h2>

            <p className="text-muted mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Et molestie ac feugiat sed diam volutpat commodo.
            </p>

            <p className="text-muted">
              With a library card, you can borrow books, audiobooks, and ebooks. You can also access a variety of online resources, including research databases and streaming services.
            </p>

            <p className="text-muted">
              Signing up is free and easy! Just fill out the form below to get started.
            </p>
          </div>
          <div className="col-md-6 form-container rounded shadow-sm p-4">
            <h2 className="text-center mb-5">SIGN UP</h2>

            <form onSubmit={handleSubmit}>
              <div className="form-group mb-3">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  className="form-control"
                  value={formData.firstName} // Assuming there's a new state variable for first name
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  className="form-control"
                  value={formData.lastName} // Assuming there's a new state variable for last name
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group mb-3">
                <label htmlFor="email">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {/* ... rest of the form fields */}
              <div className="text-center">
                <button type="submit" className="btn btn-primary btn-lg">Register</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterUser;
