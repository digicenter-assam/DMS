import React, { useState, useEffect } from 'react';
import './App.css';

import Home from './pages/home';
import Listing from './pages/Listing';
import Info from './pages/Info';
import SearchListing from './pages/SearchListing';


import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';


const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route  path="/listing/*" component={Listing} />
        <Route  path="/Info/" component={Info} />
        <Route  path="/searchListing/*" component={SearchListing} />
      </Switch>
    </Router>
  );
};

export default App;
