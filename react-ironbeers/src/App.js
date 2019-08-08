import React from 'react';
import 'milligram';
import {BrowserRouter as Router, Route, Switch}from 'react-router-dom';

import Home from './pages/Home.js';
import Beers from './pages/Beers';
import NewBeer from './pages/NewBeer.js';
import RandomBeer from './pages/RandomBeer.js';
import NotFound from './pages/NotFound.js';
import BeerDetail from './pages/BeerDetail.js'
//import Navbar from './components/Navbar.js';
import './App.css';

function App() {
  return (
    <Router>
    <header>
      <h1>Ironbeers</h1>
    </header>
    <Switch>
    <Route path='/' exact component = {Home}/>
    <Route path='/beers' exact component = {Beers}/>
    <Route path='/beers/:id' exact component = {BeerDetail}/>
    <Route path='/new-beer' exact component = {NewBeer}/>
    <Route path='/random-beer' exact component = {RandomBeer}/>
    <Route component = {NotFound}/>
    </Switch>
    </Router>
  );
}

export default App;
