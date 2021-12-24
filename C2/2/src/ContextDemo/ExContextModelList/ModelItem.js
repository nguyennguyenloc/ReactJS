import React, { Component } from "react";

export default class ModelItem extends Component {
  render() {
    return (
      <div>
        <div className="card text-left bg-default text-dark">
          <img
            className="card-img-top"
            src="./model/joker.jpg"
            alt="./model/joker.jpg"
          />
          <div className="card-body">
            <h4 className="card-title">Họ tên: </h4>
            <p className="card-text">Tuổi</p>
            <button
              style={{
                background: "none",
                border: "1px solide red",
                borderRadius: "5px",
              }}
              className="card-text"
            >
              Lượt thích: (8) <i className="fa fa-heart text-danger"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
