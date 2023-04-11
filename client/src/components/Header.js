import React from 'react';
import Nav from './Nav';

function Header(props) {
  const { currentTab, handleTabChange } = props;

  return (
    <div className="center">
      <section>
        <header className="header-container">
          <div>
            <h1 className="title">The We Believe Blog</h1>
          </div>
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
