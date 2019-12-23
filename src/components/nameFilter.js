import React from 'react'

function NameFilter({value, onChangeName}) {
    
    return (
        
        <div className='searchArea'>
            <input 
            className='searchBar'
            placeholder='Search'
            value={value} 
            type='text' 
            onChange={(event)=>onChangeName(event.target.value)}
            />
            <input className='btn' type='button' value='Movies'/>
            
        </div>
    )
}

export default NameFilter
