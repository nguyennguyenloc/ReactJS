import React, { Component } from "react";

export default class BaiTapChonXe extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-7">
            <img
              style={{ width: "100%" }}
              src={require("../assets/products/black-car.jpg").default}
              //   src="../assets/products/black-car.jpg"
              alt="black_car"
            />
          </div>
          <div className="col-5">
            <div className="card text-dark">
              <div className="card-header text-primary">Exterior Color</div>
              <div className="card-body">
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-black.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h4 className="card-title">Crystal Black</h4>
                    <p className="card-text">Pear</p>
                  </div>
                </div>
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-black.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h4 className="card-title">Crystal Black</h4>
                    <p className="card-text">Pear</p>
                  </div>
                </div>
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-red.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h4 className="card-title">Crystal Black</h4>
                    <p className="card-text">Pear</p>
                  </div>
                </div>
                <div
                  className="row border border-light pt-2 pb-2 mt-2"
                  onClick={() => {}}
                  style={{ cursor: "pointer" }}
                >
                  <img
                    className="col-2"
                    src={require("../assets/icons/icon-silver.jpg").default}
                    alt="black_icon"
                  />
                  <div className="col-10">
                    <h4 className="card-title">Crystal Black</h4>
                    <p className="card-text">Pear</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}