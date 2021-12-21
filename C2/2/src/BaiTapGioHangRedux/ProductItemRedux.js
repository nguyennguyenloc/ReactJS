import React, { Component } from "react";
import { connect } from "react-redux";
class ProductItemRedux extends Component {
  render() {
    let { product } = this.props;
    return (
      <div>
        <div className="card text-left">
          <img
            style={{ width: 320, minHeight: 350 }}
            className="card-img-top"
            src={product.hinhAnh}
            alt={product.hinhAnh}
          />
          <div className="card-body">
            <h4 className="card-title">{product.tenSP}</h4>
            <p className="card-text">{product.giaBan.toLocaleString()}</p>
            <button
              onClick={() => {
                this.props.themGioHang(product);
              }}
              className="btn btn-success"
            >
              Thêm sản phẩm
            </button>
          </div>
        </div>
      </div>
    );
  }
}

//hàm gửi dữ liệu trên store
const mapDispathToProps = (dispatch) => {
  return {
    themGioHang: (sanpham) => {
      //tạo ra sp giỏ hàng
      let spGioHang = {
        maSP: sanpham.maSP,
        tenSP: sanpham.tenSP,
        hinhAnh: sanpham.hinhAnh,
        soLuong: 1,
        giaBan: sanpham.giaBan,
      };
      //tạo ra action
      let action = {
        type: "THEM_GIO_HANG", //thuộc tính bắt buộc
        spGioHang,
      };
      //dùng hàm dispatch từ redux gửi dữ liệu lên render
      dispatch(action);
    },
  };
};
export default connect(null, mapDispathToProps)(ProductItemRedux);
