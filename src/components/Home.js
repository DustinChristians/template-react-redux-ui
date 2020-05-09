import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../App.scss';

function Home() {
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
            <Link to="/get-messages" className="App-link">
              Get Messages
            </Link>
          </li>
          <li>
            <Link to="/post-messages" className="App-link">
              Post Messages
            </Link>
          </li>
          <li>
            <Link to="/put-messages" className="App-link">
              Put Messages
            </Link>
          </li>
          <li>
            <Link to="/delete-messages" className="App-link">
              Delete Messages
            </Link>
          </li>
        </ul>
      </header>
    </div>
  );
}

export default Home;
