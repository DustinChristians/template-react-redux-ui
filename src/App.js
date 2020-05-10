import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import MessagesPage from './pages/MessagesPage';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/messages" component={MessagesPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  );
}

export default App;
