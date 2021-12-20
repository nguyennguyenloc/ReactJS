import React, { Component } from "react";
import Modal from "./Modall";
import ProductListCar from "./ProductListCar";

export default class ExerciseCarStore extends Component {
  products = [
    {
      id: 1,
      name: "black car",
      image: "./products/black-car.jpg",
      price: 1000,
    },
    { id: 2, name: "red car", image: "./products/red-car.jpg", price: 2000 },
    {
      id: 3,
      name: "silver car",
      image: "./products/silver-car.jpg",
      price: 3000,
    },
    {
      id: 4,
      name: "steel car",
      image: "./products/steel-car.jpg",
      price: 4000,
    },
  ];

  render() {
    return (
      <div>
        <h3 className="display-4 text-center">Danh sách xe</h3>
        <Modal />
        <ProductListCar productsData={this.products} />
      </div>
    );
  }
}
