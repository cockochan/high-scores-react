import React from 'react'
import CountryText from'./CountryText'
const CountryCard = (props)=>{
    return(

   <CountryText scores ={props.country.scores} />
    )
}
export default CountryCard