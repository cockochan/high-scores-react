import React from 'react'
import CountryCard from './CountryCard.js'
const AllCountries =(props)=>{
    return(
<div className ="allCountries">
         {props.allCountryScores.map(country=>{
           return (
               <CountryCard key={country.name} country ={country}/>
           )
            })}
            </div>)
}
export default AllCountries