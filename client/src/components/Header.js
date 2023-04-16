import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { Button, Typography } from '@mui/material';
import { AUTH_TOKEN } from '../constants';

function Header(props) {
  const { currentTab, handleTabChange } = props;

  // const Header = () => {
  //   const navigate = useNavigate();
  //   const authToken = localStorage.getItem(AUTH_TOKEN);

  //   const handleTabChange = (tab) => {
  //     localStorage.setItem(AUTH_TOKEN, tab);
  //     navigate(tab);
  //   };

  return (
    <div className="center">
      <section>
        <header className="header-container">
          <div className="navbar">
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
    </div>
  );
}
// }

export default Header;
