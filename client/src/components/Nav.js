import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <nav className="nav-container">
      {
        <ul>
          <li>
            <Link to="/Post">POST</Link>
          </li>
          <li>
            <Link to="/Login">LOGIN</Link>
          </li>
          <li>
            <Link to="/Signup">SIGN UP</Link>
          </li>
          <li>
            <Link to="/User">User</Link>
          </li>
        </ul>
      }
    </nav>
  );
}

export default Nav;
