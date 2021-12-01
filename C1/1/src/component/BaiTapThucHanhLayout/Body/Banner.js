import React, { Component } from "react";

export default class Banner extends Component {
  render() {
    return (
      <div className="card">
        <h5 className="card-header">Featured</h5>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="https://kenh14.vn/" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    );
  }
}
