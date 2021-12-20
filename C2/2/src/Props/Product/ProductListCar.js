import React, { Component } from "react";
import ProductItemCar from "./ProductItemCar";
export default class ProductListCar extends Component {
  renderListCar = () => {
    return this.props.productsData.map((item, index) => {
      return (
        <div className="col-3" key={index}>
          <ProductItemCar item={item} xemChiTiet={this.props.xemChiTiet} />
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">{this.renderListCar()}</div>
      </div>
    );
  }
}
