import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { sanpham } = this.props;
    return (
      <div class="card text-left text-center">
        <img
          style={{ width: "300px", minHeight: "350px" }}
          className="card-img-top"
          src={sanpham.hinhAnh}
          alt={sanpham.hinhAnh}
        />
        <div class="card-body">
          <h4 class="card-title">{sanpham.tenSP}</h4>
          <p class="card-text">{sanpham.giaBan.toLocaleString()}</p>
          <button
            onClick={() => this.props.xemchitiet(sanpham)}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
        </div>
      </div>
    );
  }
}
