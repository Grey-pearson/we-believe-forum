import React from 'react';
import Nav from './components/Nav';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import { ThemeProvider, CssBaseline } from '@mui/material';
// import ScopedCssBaseline from '@mui/material/ScopedCssBaseline';

class App extends React.Component {
  render() {
    return (
      < Router >
        <div>
          <Nav />
          <Routes >
            <Route exact path="/" component={Post} />
            <Route path="/Login" component={Login} />
            <Route path="/Signup" component={Signup} />
            <Route path="/User" component={User} />
          </Routes>
        </div>
      </Router >
    );
  }
}

export default App;
