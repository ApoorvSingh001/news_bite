import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }
  async componentDidMount() {
    console.log("cdm");
    this.setState({ loading: true });
    let url =
      "https://newsapi.org/v2/top-headlines?" +
      "country=in&" +
      "apiKey=2d2e9f11e12148bb8b33ae9ce9723251"+
      `&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handleNextBtnClick = async () => {
    console.log("next");
    this.setState({ loading: true });
    if (this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)) {
    } else {
      let url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=in&" +
        "apiKey=2d2e9f11e12148bb8b33ae9ce9723251" +
        `&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loading: false,
      });
    }
  };
  handlePrevBtnClick = async () => {
    console.log("prev");
    this.setState({ loading: true });
    if (this.state.page < 1) {
    } else {
      let url =
        "https://newsapi.org/v2/top-headlines?" +
        "country=in&" +
        "apiKey=2d2e9f11e12148bb8b33ae9ce9723251" +
        `&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page - 1,
        loading: false,
      });
    }
  };
  render() {
    return (
      <>
        {this.state.loading && (
          <div className="lds-facebook text-center">
            <div></div>
            <div></div>
            <div></div>
          </div>
        )}
        <div className="container my-3">
          <h1>Hot News Headlines</h1>

          <div className="row">
            {this.state.articles.map((element) => {
              return (
                <div className="col-md-4">
                  <NewsItem
                    title={element.title ? element.title.slice(0, 40) : ""}
                    description={
                      element.description
                        ? element.description.slice(0, 80)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                  />
                </div>
              );
            })}
          </div>
          <div class="d-flex justify-content-evenly">
            <button
              type="button"
              className="btn btn-outline-primary"
              disabled={this.state.page <= 1}
              onClick={this.handlePrevBtnClick}
            >
              &larr; Previous
            </button>
            <button
              type="button"
              className="btn btn-outline-primary"
              disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)}
              onClick={this.handleNextBtnClick}
            >
              Next &rarr;
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default News;
