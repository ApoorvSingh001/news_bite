import React, { Component } from "react";

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl } = this.props;
    return (
      <div className="container my-3 mx-3">
        <div className="card" style={{ width: "18rem" }}>
          <img src={imageUrl?imageUrl:"https://images.unsplash.com/photo-1476242906366-d8eb64c2f661?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMTc3M3wwfDF8c2VhcmNofDIyfHwlMjBOZXdzJTIwfGVufDB8fHx8MTY5OTk3NDI2NHww&ixlib=rb-4.0.3&q=80&w=2000"} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
          </div>

          <div className="card-body">
            <a href={newsUrl} target="_blank"className="btn btn-sm btn-primary">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
