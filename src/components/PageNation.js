import React, { Component } from 'react';
import "../css/PageNation.css";

class PageNation extends Component {

    constructor(props){
        super(props);
        this.state={
            moviePerPage:this.props.moviePerPage,
            totalCount:this.props.totalCount,
        }
    }

    setCurrentPage=(page)=>{
        alert("클릭한 페이지"+page);
        this.props.setCurrentPage(page);
        document.getElementById("pagination>span").classList.add("highlight")
    }

    prevPage=()=>{
        alert("이전 페이지!")
        const currentPage=this.props.currentPage
        if(currentPage===1){
            alert("1페이지 입니다!");
            alert("이전으로 갈 수 없습니다.");
            return
        }
        this.props.setCurrentPage(currentPage-1);
        
    }

    nextPage=()=>{
        alert("다음 페이지!")
        const currentPage=this.props.currentPage
        const {moviePerPage,totalCount}=this.props;
        const lastPage=Math.ceil(totalCount/moviePerPage);
        if(lastPage===currentPage){
            alert("페이지의 끝에 도달했습니다!")
            alert("더이상 갈 수 없습니다!")
            return
        }
        this.props.setCurrentPage(currentPage+1);
    }

    render(){
        let pageNumbers = [];
        const {moviePerPage,totalCount}=this.props;        
        for(var i=1; i<=Math.ceil(totalCount/moviePerPage); i++)
        {
            pageNumbers.push(i);
        }

        const pageList = pageNumbers.map(page => 
            (<span className={"page "+page} key={page} onClick={()=>this.setCurrentPage(page)}>{page}</span> )
        );

        return(
            <div id="pagination">
                <span className="page" onClick={this.prevPage}>&lt;</span>
                {pageList}
                <span className="page" onClick={this.nextPage}>&gt;</span>
            </div>
        );
    }
}

export default PageNation;