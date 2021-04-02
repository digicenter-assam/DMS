import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/home';
import Listing from './pages/Listing';
import Info from './pages/Info';
import SearchListing from './pages/SearchListing';
import Web from './pages/Web';


import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/listing/*" component={Listing} />
        <Route  path="/Info/" component={Info} />
        <Route  path="/Web/" component={Web} />
        <Route  path="/searchListing/" component={SearchListing} />
      </Switch>
    </Router>
  );
};

export default App;
