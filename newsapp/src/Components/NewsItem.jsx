import React, { Component } from 'react';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;

    return (
      <div className='my-3'>
        <div className="card h-100">
          <img 
            src={imageUrl || "https://via.placeholder.com/150"}
            className="card-img-top img-fluid"
            alt="news"
          />
          <div className="card-body d-flex flex-column">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <a 
              href={newsUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-sm btn-primary mt-auto"
            >
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
