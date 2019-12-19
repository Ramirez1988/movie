import React from 'react';
import Rating from './rating'

 function MoviesCard ({Movie}) {            
                     
        return (           
                              
       <div className='card'>
       <div><Rating count={Movie.rate}/></div>                 
       <img className='cardImage' src ={Movie.link}/>
       <h3 style={{textAlign:'center'}}> {Movie.title} - {Movie.year}</h3>                
       </div>      
       
       )    
}
export default MoviesCard;


