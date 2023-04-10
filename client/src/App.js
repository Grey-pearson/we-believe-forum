import React from 'react';
import Nav from './components/Nav';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import { Router, Switch, Route } from 'react-router-dom';
import CssBaseline from '@mui/material/CssBaseline';

function App() {
  return (
    <React.Fragment>
      <CssBaseline />
    <Router>
      <Nav />
      <Routes>
        <Route exact path="/Post/" component={Post} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/User" component={User} />
      </Routes>
    </Router>
    </React.Fragment>
  );
}

export default App;
