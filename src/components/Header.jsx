import React from 'react';
import logo from './logo@2x.png';
import '../css/App.css';

const Header = () => {
  return (
    <div>
      <img src={logo} alt="healthcare.gov logo"/>
      <header className="App-header">
        <h1>Content Browser</h1>
      </header>
    </div>
  )
}

export default Header;