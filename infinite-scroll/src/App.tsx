import React from 'react';
import './App.css';
import MockComponentContainer from './MockComponentContainer.tsx';


const App= () => {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Infinite Scroll</h1>
      </header>
      <MockComponentContainer />
    </div>
  );
}

export default App;
