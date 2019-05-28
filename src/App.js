import React from 'react';
import logo from './logo.svg';
import './App.css';

const Header = ({text}) => <div>{text}</div>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <ul>
          <li>1. item</li>
          <li>2. item</li>
        </ul>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Header text="New Header" />
    </div>
  );
}

export default App;
