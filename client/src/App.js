import React, { useState } from 'react';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import Header from './components/Header';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

function App() {
  const [currentTab, setCurrentTab] = useState('post');

  return (
    <div>
      <Router>
        <div className="mobile-header-container">
          <Header
            currentTab={currentTab}
            setCurrentTab={setCurrentTab}
          ></Header>
        </div>
        <div>
          <main>
            <Routes>
              <Route path="/Post" element={Post} />
              <Route path="/Login" element={Login} />
              <Route path="/Signup" element={Signup} />
              <Route path="/User" element={User} />
            </Routes>
          </main>
        </div>
        <div className="mobile-footer">
          {/* <Footer>© {new Date().getFullYear()}, Built with React</Footer> */}
        </div>
      </Router>
    </div>
  );
}

export default App;
