
import React, { Component } from 'react';

import Movie from './Movie';

class MovieList extends Component {

    constructor(props){
        super(props);
        this.state={
            movieList:this.props.movieList,
        }
    }

    render(){
    
    const {movieList}=this.props;

        return (
    <div className="MovieList">

  <div>
    {//중괄호 치면 태그안에 자바스크립트 사용 가능
    movieList.map(movie=>(
      <Movie
      key={movie.index}
      actor={movie.actor}
      director={movie.director}
      image={movie.image}
      link={movie.link}
      pubDate={movie.pubDate}
      subtitle={movie.subtitle}
      title={movie.title}
      userRating={movie.userRating}
      ></Movie>))
    }
  </div>

    </div>
  );
    }
}

export default MovieList;
