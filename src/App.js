import React from 'react';

import './App.css';
import allCountryScores from './scores.js'
import AllCountries from './AllCountries.js'

function App() {

  return (
    <div className="blueColumn">
      <p className="allHighs">High Scores per Country</p>
       <AllCountries allCountryScores={allCountryScores}/>
        
       </div>
    
  );
}

export default App
