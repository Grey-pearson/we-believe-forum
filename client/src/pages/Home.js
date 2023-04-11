import React, { useState } from 'react';
import NavBar from '../components/Nav';
import Footer from '../components/Footer';
import Home from '../pages/Home';
import Profile from '../pages/Profile';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('Home');
  const renderPage = () => {
    if (currentPage === 'Home') {
      return <Home />;
    }
    if (currentPage === 'Profile') {
      return <Profile />;
    }
  };


    const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      {/* nav, post/home(posts), post button, profile, footer */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      <Footer />
    </div>
  );
}
