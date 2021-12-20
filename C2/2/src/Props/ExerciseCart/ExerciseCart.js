import React, { Component } from "react";
import CartModal from "./CartModal";
import ProductListEXC from "./ProductListEXC";

export default class ExerciseCart extends Component {
  state = {
    gioHang: [
      // {
      //   maSP: 1,
      //   hinhAnh: "",
      //   tenSP: "tên mặc đinh",
      //   soLuong: 1,
      //   giaBan: 10,
      // },
    ],
  };

  themGioHang = (sanPham) => {
    console.log(sanPham);

    let spGioHang = {
      maSP: sanPham.maSP,
      tenSP: sanPham.tenSP,
      hinhAnh: sanPham.hinhAnh,
      giaBan: sanPham.giaBan,
      soLuong: 1,
    };

    // tìm xem sp đã có chưa
    let index = this.state.gioHang.findIndex(
      (spGH) => spGH.maSP === spGioHang.maSP
    );
    if (index !== -1) {
      //tìm thấy giỏ hàng
      let itemIndex = this.state.gioHang[index];
      itemIndex.soLuong += 1;
    } else {
      // không thấy giỏ hàng
      this.state.gioHang.push(spGioHang);
    }
    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  xoaGioHang = (maSP) => {
    console.log(maSP);
    let index = this.state.gioHang.findIndex(
      (xoaSP) => xoaSP.maSP === maSP.maSP
    );
    if (index !== -1) {
      this.state.gioHang.splice(index, 1);
    }
    //xoá tính năng giỏ hàng

    this.setState({
      gioHang: this.state.gioHang,
    });
  };

  tinhTongSoLuong = () => {
    //C1: dùng for
    // let tongSoLuong = 0;
    // for (let i = 0; i < this.state.gioHang.length; i++) {
    //   let spGioHang = this.state.gioHang[i];
    //   tongSoLuong += spGioHang.soLuong;
    // }
    // return tongSoLuong;
    //C2: dùng map
    // let tongSoLuong = 0;
    // this.state.gioHang.map((item, index) => {
    //   tongSoLuong += item.soLuong;
    // });
    // return tongSoLuong;
    //C3: dùng reduce
    return this.state.gioHang.reduce((tongSoLuong, spGioHang, index) => {
      return (tongSoLuong += spGioHang.soLuong);
    }, 0);
  };
  render() {
    return (
      <div className="container-fluid">
        <h3 className="text-center">BÀI TẬP GIỎ HÀNG</h3>
        <h3 className="text-center">Danh sách sản phẩm</h3>
        <div className="text-right">
          <span
            style={{ cursor: "pointer" }}
            data-toggle="modal"
            data-target="#modelId"
          >
            <i className="fa fa-cart mr-5">
              <i className="fa fa-cart-arrow-down"></i>({this.tinhTongSoLuong()}
              ) Giỏ hàng
            </i>
          </span>
        </div>
        <CartModal xoaGioHang={this.xoaGioHang} gioHang={this.state.gioHang} />
        <ProductListEXC themGioHang={this.themGioHang} />
      </div>
    );
  }
}
