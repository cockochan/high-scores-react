import React from 'react'

const CountryText = (props)=>{
    return(
 props.scores.map((player)=>{
      
       return(
           <ul key={player.n} className ="playerCard" >
<p className ="playerName" > {player.n}</p>
<p className ="playerScore"> {player.s}</p>

</ul>)
}))
 
}

export default CountryText