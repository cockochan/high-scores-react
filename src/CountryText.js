import React from 'react'

const CountryText = (props)=>{
    console.log()
   props.scores.map(player=>{
      
       return(
           <ul>
<li className ="playerName"> {player.n}</li>
<li className ="playerScore"> {player.s}</li>

</ul>)})}

export default CountryText