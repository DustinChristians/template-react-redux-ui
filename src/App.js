import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
