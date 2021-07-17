import React from 'react';
import './App.css';
import CelebrateButton from './components/CelebrateButton';
import NeonButton from './components/NeonButton';

function App() {
  return (
    <div className="App">
      <div className="buttonSquare">
        <NeonButton/>
      </div>
      <div className="buttonSquare">
        <CelebrateButton/>  
      </div>
      <div className="buttonSquare">
        <div class="centeredButton">Hello</div>
      </div>
      <div className="buttonSquare">
        <div class="centeredButton">Hello</div>
      </div>
      <div className="buttonSquare">
        <div class="centeredButton">Hello</div>
      </div>
      <div className="buttonSquare">
        <div class="centeredButton">Hello</div>
      </div>
    </div>
  );
}

export default App;
