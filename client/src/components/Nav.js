import React from 'react';
import { Link, NavLink } from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink >
        </li>
        <li>
          {/* change to log in? */}
          <NavLink to="/signup">Signup</NavLink >
        </li>
        <li>
          <NavLink to="/user/:id">User</NavLink >
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
