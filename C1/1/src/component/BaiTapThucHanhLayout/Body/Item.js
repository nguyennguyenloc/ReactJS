import React, { Component } from "react";

export default class Item extends Component {
  render() {
    return (
      <div className="card" style={{ width: "15rem" }}>
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="https://kenh14.vn/" className="card-link">
            Card link
          </a>
          <a href="https://kenh14.vn/" className="card-link">
            Another link
          </a>
        </div>
      </div>
    );
  }
}
