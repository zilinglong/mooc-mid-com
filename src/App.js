import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/style.css';
import HelloWorld from './components/HelloWorld';
import ComplexCard from './components/ComplexCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>hello world</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <HelloWorld name={'xiaoming'} bgColor={'#eee'} color={'#0f0'} />
      <HelloWorld name={'tom'} bgColor={'#ttt'} color={'#00f'} />
      <ComplexCard color={'#0f0'} />
    </div>
  );
}

export default App;
