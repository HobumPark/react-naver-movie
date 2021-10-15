import React, { Component } from 'react';
import "../css/SearchComp.css";

class SearchComp extends Component {

    constructor(props){
        super(props);
        this.state={
            searchText:''
        }
    }

    searchMovie=()=>{
        const {searchText}=this.state
        alert(searchText+"검색!")
        this.props.searchMovie(searchText)
        var searchInput=document.getElementById("search-input")
        searchInput.value=''
    }

    handleChange=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleKeyPress = (e) => {
        if (e.key === "Enter") {
          this.searchMovie();
        }
    };

    render(){
 
        return(
            <div id="search-comp">
                <input type="text" id="search-input" placeholder="검색어 입력"
                onKeyPress={this.handleKeyPress}
                onChange={this.handleChange} name="searchText"></input>
                <button onClick={this.searchMovie}>검색</button>
            </div>
        );
    }
}

export default SearchComp;