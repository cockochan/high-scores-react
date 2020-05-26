import React from 'react'

const CountryText = (props)=>{
    return(
 props.scores.map((player)=>{
      
       return(
           <ul key={player.n}>
<li className ="playerName" > {player.n}</li>
<li className ="playerScore"> {player.s}</li>

</ul>)
}))
 
}

export default CountryText