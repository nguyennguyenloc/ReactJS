import React, { Component } from "react";

export default class RenderWithLoop extends Component {
  productList = [
    {
      id: 1,
      name: "black car",
      price: 1000,
      img: "./carbasic/products/black-car.jpg",
    },
    {
      id: 2,
      name: "red car",
      price: 1000,
      img: "./carbasic/products/red-car.jpg",
    },
    {
      id: 3,
      name: "silver car",
      price: 1000,
      img: "./carbasic/products/silver-car.jpg",
    },
    {
      id: 4,
      name: "steel car",
      price: 1000,
      img: "./carbasic/products/steel-car.jpg",
    },
  ];

  renderTable = () => {
    let mangTrComponent = [];
    for (let index = 0; index < this.productList.length; index++) {
      let product = this.productList[index];
      let trJSX = (
        <tr key={index}>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td>{product.price}</td>
          <td>
            <img style={{ width: "100px" }} src={product.img} />
          </td>
        </tr>
      );
      console.log(trJSX);
      mangTrComponent.push(trJSX);
    }
    return mangTrComponent;
  };

  render() {
    return (
      <div className="container">
        <table className="table">
          <thead>
            <tr>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>img</th>
            </tr>
          </thead>
          <tbody>{this.renderTable()}</tbody>
        </table>
      </div>
    );
  }
}
