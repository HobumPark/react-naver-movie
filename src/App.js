import './App.css';
import './css/imageSprite.css';
import React, { Component } from 'react';
import axios from 'axios';
import MovieList from './components/MovieList';
import PageNation from './components/PageNation';
import SearchComp from './components/SearchComp';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      searchText:'',
      movieList:[

      ],
      moviePerPage:3,
      totalCount:0,
      currentPage:1,
    }
  }

  getMovies = async(searchText)=>{
    await axios({
      method: 'get',
      url: '/v1/search/movie.json?query='+searchText,
      dataType: 'json',
      headers: {
        "X-Naver-Client-Id": 'FcXHkX_qtl65OMEljDS8',
        "X-Naver-Client-Secret": 'mzPsOA0aVg',
      },
     
    })
    .then(response => 
        { 
          this.setState({
              movieList:[]
            })
          console.log(response.data.items);
          const movie=response.data.items;//옮겨담아서 사용을 편하게 함
          let movie_obj=null;
          
          this.setState({
            totalCount:movie.length
          })

          for(var i=0; i<movie.length; i++){
    
            movie_obj={
              actor:movie[i].actor,
              director:movie[i].director,
              image:movie[i].image,
              link:movie[i].link,
              pubDate:movie[i].pubDate,
              subtitle:movie[i].subtitle,
              title:movie[i].title,
              userRating:movie[i].userRating
            }

            const {movieList}=this.state;
            this.setState({
              movieList:movieList.concat(movie_obj)
            })
            movie_obj=null;
            
          }
        }
    );
  }

  componentDidMount(){
    //this.getMovies();
  }

  handleChange=(e)=>{
    this.setState({
      [e.target.name]:e.target.value
    })
  }

  searchMovie=(searchText)=>{
    this.getMovies(searchText);
  }

  currentMovieList=(totalMovieList)=>{
    const{currentPage,moviePerPage}=this.state;
    const indexOfLast = currentPage * moviePerPage;
    const indexOfFirst = indexOfLast - moviePerPage;
    const sliceMovieList = totalMovieList.slice(indexOfFirst,indexOfLast);
    return sliceMovieList;
  }

  setCurrentPage=(page)=>{
      alert("페이지 변경(App)"+page);
      this.setState({
        currentPage:page
      });
  }

  render(){
    const {movieList,totalCount,moviePerPage,currentPage}=this.state;
    return (
    <div className="App">
      <SearchComp searchMovie={this.searchMovie}></SearchComp>
      <MovieList movieList={this.currentMovieList(movieList)}></MovieList>
      <PageNation totalCount={totalCount} moviePerPage={moviePerPage}
      currentPage={currentPage}
      setCurrentPage={this.setCurrentPage}></PageNation>
    </div>
  );
  }
  
}

export default App;
