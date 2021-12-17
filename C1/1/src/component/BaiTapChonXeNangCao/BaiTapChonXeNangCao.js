import React, { Component } from "react";
import "./BaiTapChonXeNangCao.css";
import dataFeatures from "../Data/arrayFeatures.json";
import dataWheels from "../Data/wheels.json";

export default class BaiTapChonXeNangCao extends Component {
  state = {
    car: {
      id: 1,
      title: "Crystal Black",
      type: "Pearl",
      img: "./images/icons/icon-black.jpg",
      srcImg: "./images/images-black/images-black-1/civic-1.jpg",
      color: "Black",
      price: "19,550",
      engineType: "In-Line 4-Cylinder",
      displacement: "1996 cc",
      horsepower: "158 @ 6500 rpm",
      torque: "138 lb-ft @ 4200 rpm",
      redline: "6700 rpm",
      wheels: [
        {
          idWheel: 1,
          srcImg: "images-black/images-black-1/",
        },
        {
          idWheel: 2,
          srcImg: "images-black/images-black-2/",
        },
        {
          idWheel: 3,
          srcImg: "images-black/images-black-3/",
        },
      ],
    },
  };

  changeImg = (carNew) => {
    this.setState({
      car: carNew,
    });
  };

  renderIcon = () => {
    return dataFeatures.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeImg(item);
          }}
          className="row border border-color-default mt-1 m-2"
          style={{ cursor: "pointer" }}
          key={index}
        >
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10">
            <h3 className="p-3">{item.title}</h3>
            <p className=" pt-0 mt-0 m-3">{item.type}</p>
          </div>
        </div>
      );
    });
  };

  renderWheels = () => {
    return dataWheels.map((item, index) => {
      return (
        <div
          onClick={() => {
            this.changeImg(item);
          }}
          className="row border border-color-default mt-1 m-2"
          style={{ cursor: "pointer" }}
          key={index}
        >
          <div className="col-2">
            <img
              className="p-3"
              style={{ width: "100%" }}
              src={item.img}
              alt={index}
            />
          </div>
          <div className="col-10 d-flex flex-column align-item-center">
            <h3 className="p-3">{item.title}</h3>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-6">
            <div className="model">
              <img
                style={{ width: "100%" }}
                src={this.state.car.srcImg}
                //   src="../assets/products/black-car.jpg"
                alt={this.state.car.color}
              />
              <div class="card mt-2">
                <h5 div className="card-header text-default">
                  Exterior color
                </h5>
                <table className="table border border-color-light" border="1">
                  <tbody>
                    <tr>
                      <td>Color</td>
                      <td>Black</td>
                    </tr>
                    <tr>
                      <td>Price</td>
                      <td>$ 19.000,00</td>
                    </tr>
                    <tr>
                      <td>Engine Type</td>
                      <td>In-line-4-cylinder</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className="card text-left">
              <h5 className="card-header text-default">Exterior Color</h5>
              <div className="container-fuild">{this.renderIcon()}</div>
            </div>
            <div className="card text-left">
              <h5 className="card-header text-default">Exterior Color</h5>
              <div className="container-fuild">{this.renderWheels()}</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
