import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    console.log("cdm");
    let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=821549a63a364d22bf6bf6180051e91a&page=1&pageSize=20";
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handlePrevClick = async () => {
    console.log("previous");
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=821549a63a364d22bf6bf6180051e91a&page=${this.state.page - 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
    });
  }

  handleNextClick = async () => {
    console.log("next");
    if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {
      return;
    }
    let url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=821549a63a364d22bf6bf6180051e91a&page=${this.state.page + 1}&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
    });
  }

  render() {
    return (
      <div className='container my-3'>
        <h1 className="text-center">Latest News</h1>
        <div className="row">
          {this.state.articles.map((element) => (
          <div className="col-12 col-sm-6 col-md-4 mb-3" key={element.url}>
              <NewsItem
                title={element.title ? element.title.slice(0, 35) : ""}
                description={element.description ? element.description.slice(0, 70) : ""}
                imageUrl={element.urlToImage ? element.urlToImage : ""}
                newsUrl={element.url ? element.url : ""}
              />
            </div>
          ))}
        </div>
        <div className="container d-flex justify-content-between my-3">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark"
            onClick={this.handlePrevClick}
          >
            &larr; Previous
          </button>
          <button
            disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / 20)}
            type="button"
            className="btn btn-dark"
            onClick={this.handleNextClick}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
