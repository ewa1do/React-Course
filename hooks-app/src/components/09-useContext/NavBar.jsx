import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className='navbar navbar-expand-sm navbar-dark bg-dark'>
      <div className='container-fluid'>
        <Link
          className='navbar-brand'
          to='./'
        >
          useContext
        </Link>
        <div
          className='collapse navbar-collapse'
          id='navbarNav'
        >
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <NavLink
                exact='true'
                activeclassname='active'
                className='nav-link'
                to='/'
              >
                Home
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact='true'
                activeclassname='active'
                className='nav-link'
                to='/about'
              >
                About
              </NavLink>
            </li>
            <li className='nav-item'>
              <NavLink
                exact='true'
                activeclassname='active'
                className='nav-link'
                to='/login'
              >
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
