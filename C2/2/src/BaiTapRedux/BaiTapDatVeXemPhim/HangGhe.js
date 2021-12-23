import React, { Component } from "react";

export default class HangGhe extends Component {
  renderGhe = () => {
    return this.props.hangGhe.danhSachGhe.map((ghe, index) => {
      let cssGheDaDat = "";
      let disabled = false;
      if (ghe.daDat) {
        disabled = true;
        cssGheDaDat = "gheDuocChon";
      }
      return (
        <button
          disabled={disabled}
          className={`ghe ${cssGheDaDat}`}
          key={index}
        >
          {ghe.soGhe}
        </button>
      );
    });
  };

  renderSoHang = () => {
    return this.props.hangGhe.danhSachGhe.map((hang, index) => {
      return (
        <button key={index} className="rowNumber">
          {hang.soGhe}
        </button>
      );
    });
  };

  renderHangGhe = () => {
    if (this.props.soHangGhe === 0) {
      return (
        <div className="ml-4">
          {this.props.hangGhe.hang}
          {this.renderSoHang()}
        </div>
      );
    } else {
      return (
        <div>
          {this.props.hangGhe.hang}
          {this.renderGhe()}
        </div>
      );
    }
  };
  render() {
    return (
      <div
        className="text-light text-left mt-5 ml-5"
        style={{ fontSize: "30px" }}
      >
        {this.renderHangGhe()}
      </div>
    );
  }
}
