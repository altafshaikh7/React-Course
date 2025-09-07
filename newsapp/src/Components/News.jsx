import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
  render() {
    return (
      <div className='container my-3'>
        <h1>Latest News</h1>
        <div className="row">
          <div className="col-md-4">
            <NewsItem title="News Title" description="News Description" imageUrl="..." newsUrl="..." />
          </div>
          <div className="col-md-4">
            <NewsItem title="News Title" description="News Description" imageUrl="..." newsUrl="..." />
          </div>
          <div className="col-md-4">
            <NewsItem title="News Title" description="News Description" imageUrl="..." newsUrl="..." />
          </div>
        </div>
      </div>
    )
  }
}

export default News
