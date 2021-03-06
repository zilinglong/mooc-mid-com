import React from 'react';
import logo from './logo.svg';
import './App.css';
import './components/style.css';
import HelloWorld from './components/HelloWorld';
import ComplexCard from './components/ComplexCard';
import PropsShirt from './components/PropsShirt';
import ComState from './components/ComState';
import Lifestyle from './components/Lifestyle';
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
      <PropsShirt color={'#f00'} num={3.14} size={'medium'} />
      <ComState />
      <Lifestyle />
    </div>
  );
}

export default App;
