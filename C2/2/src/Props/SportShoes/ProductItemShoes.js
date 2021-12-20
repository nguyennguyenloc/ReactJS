import React, { Component } from "react";

export default class ProductItemShoes extends Component {
  render() {
    let { dataShoesItem, newShoes } = this.props;
    return (
      <div class="card text-left">
        <img
          style={{ width: "100%" }}
          className="card-img-top"
          src={dataShoesItem.image}
          alt={dataShoesItem.image}
        />
        <div className="card-body">
          <h4 className="card-title">{dataShoesItem.name}</h4>
          <p className="card-text">{dataShoesItem.price}</p>
          <button
            onClick={() => newShoes(dataShoesItem)}
            className="btn btn-success"
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
