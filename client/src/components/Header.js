import React from 'react';
import Nav from './Nav';
import { Button, Typography } from '@mui/material';

function Header(props) {
  const { currentTab, handleTabChange } = props;

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

export default Header;
