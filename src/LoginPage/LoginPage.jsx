

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './LoginPage.css';
import 'bootstrap/dist/css/bootstrap.css';

const LoginPage = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    if (!email) {
      newErrors.email = 'Email is required';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    if (Object.keys(newErrors).length === 0) {
      if (email === 'bvs51199@gmail.com' && password === 'kris@123') {
        history.push('/home');
      } else {
        setErrors({ email: 'Invalid email or password', password: 'Invalid email or password' });
      }
    } else {
      setErrors(newErrors);
    }
  };

  return (
    <div className="login-container" style={{ backgroundImage: `url('https://i.postimg.cc/ZR9XHb09/pngwing-com-1.png')` }}>
      <div className="login-form p-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.8)', borderRadius: '8px', boxShadow: '0px 0px 10px 0px rgba(0, 0, 0, 0.1)', maxWidth: '400px', width: '90%' }}>
        <h2 className="mb-4">Jokes App</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Email address</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>

          <div className="mb-3">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>

          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
