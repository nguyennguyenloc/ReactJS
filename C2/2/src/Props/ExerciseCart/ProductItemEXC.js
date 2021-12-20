import React, { Component } from "react";

export default class ProductItemEXC extends Component {
  render() {
    let { sanpham } = this.props;
    return (
      <div className="card text-left text-center">
        <img
          style={{ width: "300px", minHeight: "350px" }}
          className="card-img-top"
          src={sanpham.hinhAnh}
          alt={sanpham.hinhAnh}
        />
        <div className="card-body">
          <h4 className="card-title">{sanpham.tenSP}</h4>
          <p className="card-text">{sanpham.giaBan.toLocaleString()}</p>
          <button
            onClick={() => this.props.xemchitiet(sanpham)}
            className="btn btn-success"
          >
            Xem chi tiết
          </button>
          <button
            onClick={() => this.props.themGioHang(sanpham)}
            className="ml-3 btn btn-success"
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}
