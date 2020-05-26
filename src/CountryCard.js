import React from 'react'
import CountryText from'./CountryText'
const CountryCard = (props)=>{

    return(
    <div className="CountryCard">
    <p className = "countryName">{props.country.name}</p>
   <CountryText scores ={props.country.scores} />
   </div>
    )
}
export default CountryCard