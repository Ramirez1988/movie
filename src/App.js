import React, { Component } from 'react';
import MoviesList from "./components/moviesList";
import RatingFilter from "./components/ratingFilter";
import NameFilter from './components/nameFilter';
import "./App.css";

 class App extends Component {

  state = {

    minRating:1,
    titleFilter:'',
    Films: [
      {
        title: "Artemis Fowl",
        year: "2016",
        link: " http://bit.do/fmfAY",
        rate: 5
      },          
      {
        title: "John Wick",
        year: "2019",
        link: " http://bit.do/fk7sH",
        rate: 4
      },
      {
        title: "Fast Furious",
        year: "2013",
        link: " http://bit.do/fk8TU",
        rate: 3
      },
      {
        title: "Darth Maul",
        year: "2015",
        link: " http://bit.do/fmfAd",
        rate: 4
      },
      {
        title: "Walter",
        year: "2010",
        link: " http://bit.do/fmfAu",
        rate: 1
      },
      {
        title: "War",
        year: "2019",
        link: " http://bit.do/fk7rF",
        rate: 2
      },     
      {
        title: "Fast Furious",
        year: "2013",
        link: " http://bit.do/fmfBi",
        rate: 2
      }                  
    ],
    isLoading:false
  };
  componentDidMount=()=>{
    setTimeout(()=>this.setState({isLoading:false}),2000)
    this.setState({isLoading:true})
   
}
    addRating = (newValue) =>{
      setTimeout(()=>this.setState({isLoading:false}),2000)
      this.setState({
        minRating:newValue,
        isLoading:true
      })    
    }  

    nameSearch = (newTitleFilter) => {
      setTimeout(()=>this.setState({isLoading:false}),2000)
      this.setState({
         titleFilter: newTitleFilter,
         isLoading:true
        })              
    }

    addMovie = (newMovie) =>{
      this.setState({
        Films:this.state.Films.concat(newMovie)
      })
    }

  render() {
    return (
      <div>
        <div className='intro'>
          <NameFilter value={this.state.titleFilter} onChangeName={this.nameSearch}/>            
          <RatingFilter count={this.state.minRating}  onChangeRating={this.addRating} /> 
        </div>                  
        <MoviesList   isLoading= {this.state.isLoading}
        films={this.state.Films.filter(el=>el.rate>=this.state.minRating &&
          el.title.toLowerCase().includes(this.state.titleFilter.toLowerCase().trim()))} 
        onAddMovie={this.addMovie}  
        load={this.componentDidMount}
        />
      </div>
    )
  }
}
export default App;