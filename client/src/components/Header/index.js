import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div className="app-header">
    <nav>
      <NavLink exact activeClassName="active-link" to="/">
        Home Page
      </NavLink>
      <NavLink exact activeClassName="active-link" to="/register">
        Register
      </NavLink>
      <NavLink exact activeClassName="active-link" to="/users">
        Users
      </NavLink>
    </nav>
  </div>
);
export default Header;
