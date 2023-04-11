import React, { useState } from 'react';
import NavBar from '../components/Nav';
import Footer from '../components/Footer';
import PostList from '../components/Postlist'

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('AboutMe');
    const renderPage = () => {
        if (currentPage === 'AboutMe') {
            return <AboutMe />;
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio />;
        }
        if (currentPage === 'Contact') {
            return <Contact />;
        }
        return <Resume />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>
            {/* nav, post/home(posts), post button, profile, footer */}
            {/* <NavBar currentPage={currentPage} handlePageChange={handlePageChange} /> */}
            {renderPage()}
            <Footer />
        </div>
    );
}

// adding nav component
// rendering post component with props from server how do i do that
