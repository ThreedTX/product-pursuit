import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import ProfileButton from './ProfileButton';
import LoginFormModal from '../LoginFormModal';
import './Navigation.css';

function Navigation({ isLoaded }) {
  const sessionUser = useSelector(state => state.session.user);

  let sessionLinks;
  if (sessionUser) {
    sessionLinks = (

      <li className="float-right">
        <ProfileButton user={sessionUser} className="Navigation-links float-right" />
      </li>
    );
  } else {
    sessionLinks = (
      <>
        <li className="float-right">
          <LoginFormModal className="Navigation-links" />
        </li>
        <li className="float-right">
          <NavLink to="/signup" className="Navigation-links" >Sign Up</NavLink>
        </li>
      </>
    );
  }

  return (
    <ul className="Navigation-wrapper">
      <li className="Navigation-links">
        <NavLink exact to="/" className="Navigation-links">Home</NavLink>
      </li>
      {isLoaded && sessionLinks}
    </ul>
  );
}

export default Navigation;
