import React from 'react';

import './global.css';

import Header from './components/Header';
import Routes from './routes';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes />
    </div>
  );
}

export default App;
