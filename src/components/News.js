import React, { Component } from 'react';
import NewsItem from './NewsItem';

export class News extends Component {
    
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }
  async componentDidMount() {
    console.log('cdm');
    let url='https://newsapi.org/v2/top-headlines?' +
    'country=in&' +
    'apiKey=2d2e9f11e12148bb8b33ae9ce9723251';
    let data = await fetch(url);
    let parsedData= await data.json();
    console.log(parsedData);
    this.setState({articles: parsedData.articles})
  }
  
  render() {
    return (
      <div className="container my-3">
        <h1>Hot News Headlines</h1>

        <div className="row">
          {this.state.articles.map((element) => {
            return(
                <div className="col-md-4">
              <NewsItem
                title={element.title?element.title.slice(0,40):""}
                description={element.description?element.description.slice(0,80):""}
                imageUrl={element.urlToImage}
                newsUrl={element.url}
              />
            </div>
            )
          })}
        </div>
      </div>
    );
  }
}

export default News;
