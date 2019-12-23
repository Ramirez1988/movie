import React, { Component } from 'react'
import MoviesCard from './moviesCard';
import Spinner from './spinner'

 class MoviesList extends Component {    
     state={
         isLoading:true
     }     
     componentDidMount(){
         setTimeout(()=>this.setState({isLoading:false}),2000)
     }
        render() {
            return (
                this.state.isLoading ? <Spinner /> :
                <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.props.films.map((el,i) =>
                <MoviesCard
                key={i}
                Movie={el}
                />
                )}
                <div className='card'>
                 <h2 onClick={()=>this.props.onAddMovie({
                                          
                     title: prompt('insert movie title: '),
                     year: prompt('insert movie year: '),
                     link: prompt('insert movie link: '),
                     rate: prompt('insert movie rating: ')
                 })
                 }>+</h2>
                </div>   
                </div>
          
        
        )}
    }
export default MoviesList;



