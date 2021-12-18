import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { item } = this.props;
    return (
      <div className="card text-left">
        <img
          style={{ width: "300px" }}
          className="card-img-top"
          src={item.image}
          alt={item.image}
        />
        <div className="card-body">
          <h4 className="card-title">{item.name}</h4>
          <p className="card-text">
            {/* {item.description.length > 20 ? (
          <p>{item.description.substring(0, 40)}</p>
        ) : (
          <p>{item.description}</p>
        )} */}
            {item.price}
          </p>
          <button className="w3-button w3-black">
            {" "}
            Add to cart <i class="fa fa-cart-arrow-down"></i>
          </button>
        </div>
      </div>
    );
  }
}
