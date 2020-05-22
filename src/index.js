import React from 'react';
import { render } from 'react-dom';
import { positions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.scss';
import { Provider as ReduxProvider } from 'react-redux';
import App from './App';
import * as serviceWorker from './serviceWorker';
import './index.css';
import configureStore from './redux/configureStore';

const store = configureStore();

const options = {
  timeout: 4000,
  position: positions.TOP_RIGHT,
  offset: '50px',
};

render(
  <ReduxProvider store={store}>
    <Router>
      <AlertProvider
        template={AlertTemplate}
        timeout={options.timeout}
        position={options.position}
        offset={options.offset}
      >
        <App />
      </AlertProvider>
    </Router>
  </ReduxProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
