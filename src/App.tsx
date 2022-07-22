import Calculator from './components/Calculator';
import React from 'react';
import './app.scss'
// import {iconDollar} from './components/logo.svg';

function App() {
  return (
    <div className="home">
      <Calculator />
      {/* <img src={iconDollar} alt="" /> */}
    </div>
  );
}

export default App;
