import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/NotFound';
import GetMessages from './components/GetMessages';
import PostMessages from './components/PostMessages';
import PutMessages from './components/PutMessages';
import DeleteMessages from './components/DeleteMessages';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/get-messages" component={GetMessages} />
        <Route exact path="/post-messages" component={PostMessages} />
        <Route exact path="/put-messages" component={PutMessages} />
        <Route exact path="/delete-messages" component={DeleteMessages} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;
