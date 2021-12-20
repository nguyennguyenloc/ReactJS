import React, { Component } from "react";

export default class ProductItemCar extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card text-left">
        <img className="card-img-top" src={item.image} alt={item.image} />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">{item.price}</p>
          <button
            type="button"
            className="btn btn-primary btn-lg"
            data-toggle="modal"
            data-target="#modelId"
          >
            View detail
          </button>
        </div>
      </div>
    );
  }
}
