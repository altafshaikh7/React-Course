import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
   
     constructor(){
        super();
        this.state={
            articles:[],
            loading:false,
            page:1
          
        }
    }

   async componentDidMount(){
        console.log("cdm");
        let url="https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=821549a63a364d22bf6bf6180051e91a&page=1&pageSize=20&page=1";
        let data= await fetch(url);
        let parsedData= await data.json()
        console.log(parsedData);
        this.setState({articles:parsedData.articles})
    }

  render() {
    return (
      <div className='container my-3'>
        <h1>Latest News</h1>
        <div className="row">
          {this.state.articles.map((element)=>{
           return <div className="col-md-4" key={element.url}>
            <NewsItem title={ element.title ? element.title.slice(0,35 ) : ""} description={ !element.description ? "" : element.description.slice(0, 70)} imageUrl={ !element.urlToImage ? "" : element.urlToImage} newsUrl={ !element.url ? "" : element.url} />
          </div>;
        })}
      </div>
      <div className="container d-flex justify-content-between">
      <button type="button" class="btn btn-dark"> &larr; Previous</button>
      <button type="button" class="btn btn-dark">Next &rarr;</button>
      </div>
      </div>
    )
  }
}

export default News
