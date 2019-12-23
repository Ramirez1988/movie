import React from 'react'
import MoviesCard from './moviesCard';
import Spinner from './spinner'

 function moviesList(props) {
    
        return (
    props.isLoading ? <Spinner /> :
    <div style={{display:'flex',flexWrap:'wrap'}}>
    {props.films.map((el,i) =>
    <MoviesCard
    key={i}
    Movie={el}    
    />
    )}
    <div className='card'>
    <h2 onClick={()=>props.onAddMovie({
                                
        title: prompt('insert movie title: '),
        year: prompt('insert movie year: '),
        link: prompt('insert movie link: '),
        rate: prompt('insert movie rating: ')
    })
    }>+</h2>
    </div>   
    </div>
                
     )}

    export default moviesList;

