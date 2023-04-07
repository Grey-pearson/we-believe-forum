import React from 'react';
import Nav from './components/Nav';
//import PostList from './components/PostList.js';
import Post from './components/Post';
import Login from './components/Login';
import Signup from './components/Signup';
import User from './components/User';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Nav />
      <Switch>
        <Route exact path="/PostList" component={PostList} />
        <Route exact path="/Post/" component={Post} />
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Signup" component={Signup} />
        <Route exact path="/User" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
