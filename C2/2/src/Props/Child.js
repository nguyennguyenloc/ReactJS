import React, { Component } from "react";

export default class Child extends Component {
  render() {
    return (
      <div>
        <img
          style={{ width: 50 }}
          src={this.props.propSource}
          alt={Date.now()}
        />
        <div style={{ width: "250px" }} className="card text-white bg-primary">
          <img
            className="card-img-top"
            src={this.props.propSource}
            alt={Date.now()}
          />
          <div className="card-body">
            <h4 className="card-title">{this.props.name}</h4>
          </div>
        </div>
      </div>
    );
  }
}
