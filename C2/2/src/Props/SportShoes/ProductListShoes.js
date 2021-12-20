import React, { Component } from "react";
import ProductItemShoes from "./ProductItemShoes";

export default class ProductListShoes extends Component {
  renderItemShoes = () => {
    return this.props.dataShoes.map((dataShoesItem, index) => {
      return (
        <div className="col-3 mt-5" key={index}>
          <ProductItemShoes
            dataShoesItem={dataShoesItem}
            newShoes={this.props.newShoes}
          />
        </div>
      );
    });
  };
  render() {
    return <div className="row">{this.renderItemShoes()}</div>;
  }
}
