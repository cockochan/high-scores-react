import React from 'react'

const CountryText = (props)=>{
 
   props.scores.map(player=>{
      
       return(
           <ul>
<li className ="playerName"> {player.n}</li>
<li className ="playerScore"> {player.s}</li>

</ul>)
})
return CountryText
}

export default CountryText