import React from 'react'
import MoviesCard from './moviesCard';

 function MoviesList ({films=[],onAddMovie = ()=>{}}) {         
           
        return (
            <div style={{display:'flex',flexWrap:'wrap'}}>
                {films.map((el,i) =>
                <MoviesCard
                key={i}
                Movie={el}
                />
                )}
                <div className='card'>
                 <h2 onClick={()=>onAddMovie({
                     title: prompt('insert movie title: '),
                     year: prompt('insert movie year: '),
                     link: prompt('insert movie link: '),
                     rate: prompt('insert movie rating: ')
                 })
                 }>+</h2>
                </div>   
            </div>
        )
    }
export default MoviesList;



