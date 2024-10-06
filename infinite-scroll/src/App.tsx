import React from 'react';
import './App.css';
import MockComponent from './MockComponent.tsx';
import { MockDataInterface, getMockData } from './getMockData.ts';


const App= () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scroll</h1>
      </header>
    </div>
  );
}

export default App;
