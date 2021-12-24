import React, { Component } from "react";

export default class ProfileModel extends Component {
  render() {
    return (
      <div>
        <h3>Profile</h3>
        <div className="card text-left" style={{ width: 300 }}>
          <img className="card-img-top" src="./model/giacatluong.jpg" alt="" />
          <div className="card-body">
            <h4 className="card-title">Họ tên: </h4>
            <p className="card-text">Tuổi</p>
            <p className="card-text">
              Lượt thích: (8) <i className="fa fa-heart text-danger"></i>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
