import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.scss';

function HomePage() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </li>
          <li>
            <Link to="/messages" className="App-link">
              API / Redux Test Page
            </Link>{' '}
            (to run the JSON-Server mock API use: <b>npm run start:dev</b>)
          </li>
          <li>
            <a href={process.env.REACT_APP_API_URL} className="App-link">
              JSON-Server Home Page
            </a>{' '}
          </li>
        </ul>
      </header>
    </div>
  );
}

export default HomePage;
