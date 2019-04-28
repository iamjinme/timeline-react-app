import React from 'react';
import './App.css';

import Timeline from './components/Timeline';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="App-title">EDUCATION TIMELINE</h1>
      </header>
      <div className="container">
        <Timeline />
      </div>
    </div>
  );
}

export default App;
