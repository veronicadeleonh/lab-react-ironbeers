import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import AllBeers from './components/AllBeers';
import BeerDetail from './components/BeerDetail';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/beers" component={AllBeers} />
        <Route exact path="/:id" component={BeerDetail} />
      </Switch>
    </div>
  );
}

export default App;
