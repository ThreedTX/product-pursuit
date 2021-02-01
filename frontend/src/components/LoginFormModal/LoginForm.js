import React, { useState } from "react";
import { NavLink } from 'react-router-dom';
import * as sessionActions from "../../store/session";
import { useDispatch } from "react-redux";
import "./LoginForm.css";
import DemoUserButton from "./DemoUserButton";
import logo from './images/website_logo_transparent_background.png';

function LoginForm() {
  const dispatch = useDispatch();
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      (res) => {
        if (res.data && res.data.errors) setErrors(res.data.errors);
      }
    );
  };
  let num = 0;
  return (
    <div className="divider__div">
      <h1>Log In to Product Pursuit</h1>
      <p>Need an account? <NavLink key={num++} to={`/signup`}>Sign Up</NavLink></p>
      <div className="left-container">
        <form className="log-in__form" onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <div className="input-icons">
            <div className="input-icons__container">
              <i className="fas fa-user"></i>
            </div>
            <input
              type="text"
              placeholder=" "
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              className="log-in__input"
              required
            />
            <span class="floating-placeholder">Username or Email</span>
          </div>
          <div className="input-icons">
            <div className="input-icons__container">
              <i class="fas fa-key"></i>
            </div>
            <input
              type="password"
              placeholder=" "
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="log-in__input"
              required
            />
            <span class="floating-placeholder"> Password</span>
          </div>
          <button className="log-in__button" type="submit">Log In</button>
          <DemoUserButton />
        </form>
      </div >
      <div className="right-container">
        <h2>Welcome back!</h2>
        <div className="right-container-content__div">
          <img className="logo" src={logo} />
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
        </div>
      </div>
    </div >
  );
}

export default LoginForm;
