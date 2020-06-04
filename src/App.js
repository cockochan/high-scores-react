import React, {useState} from 'react';
import Search from './Search.js'
import './App.css';
import allCountryScores from './scores.js'
import AllCountries from './AllCountries.js'

function App() {
  allCountryScores.sort((a, b) => a.name.localeCompare(b.name))
  const [scoresToRender, setScoresToRender]=useState(allCountryScores)
  const handleSearch = (event)=>{
    console.log(event.target.value)
    const filteredCountry = allCountryScores.filter(country=>country.name.toLowerCase().includes(event.target.value.toLowerCase()))
    setScoresToRender(filteredCountry.sort((a, b) => a.name.localeCompare(b.name)))
  }
  return (
    <div className="blueColumn">
      <Search handleSearch={handleSearch}/>
      <p className="allHighs">High Scores per Country</p>
       <AllCountries allCountryScores={scoresToRender}/>
        
       </div>
    
  );
}

export default App
