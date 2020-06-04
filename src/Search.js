import React from 'react'
 const Search =(props)=>{
     return(
         <input className='searchInput' type='text' onKeyUp={props.handleSearch} placeholder='search...'/>
     )
 }
 export default Search