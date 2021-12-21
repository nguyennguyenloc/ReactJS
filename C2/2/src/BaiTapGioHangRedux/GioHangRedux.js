import React, { Component } from "react";

//Sử dụng thư viện connect để lấy dữ liệu store về
import { connect } from "react-redux";
class GioHangRedux extends Component {
  renderCar = () => {
    return this.props.gioHang.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>
            <img
              style={{ width: 35, height: 35 }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </td>
          <td>{item.tenSP}</td>
          <td>
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, true);
              }}
              className="btn btn-success mr-1"
            >
              +
            </button>
            {item.soLuong}
            <button
              onClick={() => {
                this.props.tangGiamSoLuong(item.maSP, false);
              }}
              className="btn btn-success ml-1"
            >
              -
            </button>
          </td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => {
                this.props.xoaGioHang(item.maSP);
              }}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };

  tinhTongTien = () => {
    return this.props.gioHang.reduce((tongTien, spGioHang, idnex) => {
      return (tongTien +=
        spGioHang.soLuong * spGioHang.giaBan).toLocaleString();
    }, 0);
  };
  render() {
    return (
      <div>
        <div
          className="modal fade"
          id="modelId"
          tabIndex={-1}
          role="dialog"
          aria-labelledby="modelTitleId"
          aria-hidden="true"
        >
          <div className="modal-dialog" role="document">
            <div className="modal-content" style={{ width: 1000 }}>
              <div className="modal-header">
                <h5 className="modal-title">Giỏ hàng</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">x</span>
                </button>
              </div>
              <div className="modal-body">
                <table className="table">
                  <thead>
                    <tr>
                      <th>Mã SP</th>
                      <th>Hình ảnh SP</th>
                      <th>Tên SP</th>
                      <th>Số lượng</th>
                      <th>Đơn giá</th>
                      <th>Thành tiền</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>{this.renderCar()}</tbody>
                  <tfoot>
                    <tr>
                      <td colSpan="5"></td>
                      <td>Tổng tiền</td>
                      <td>{this.tinhTongTien()}</td>
                    </tr>
                  </tfoot>
                </table>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//hàm lấy state redux biến đổi thành props của component
const mapStateToProps = (state) => {
  //state là state tổng của ứng dụng chứa các state con(rootReduce)
  return {
    gioHang: state.stateGioHang.gioHang,
  };
};

// hàm đưa dữ liệu lên reducer
const mapDispatchToProps = (dispatch) => {
  return {
    xoaGioHang: (maSP) => {
      //tạo ra action
      let action = {
        type: "XOA_GIO_HANG",
        maSP,
      };
      //dùng hàm dispatch từ redux gửi dữ liệu lên render
      dispatch(action);
    },
    //hàm tăng giảm dữ liệu
    tangGiamSoLuong: (maSP, tangGiam) => {
      //tạo action đưa dữ liệu trên reducer
      let action = {
        type: "TANG_GIAM_SO_LUONG",
        maSP,
        tangGiam,
      };
      dispatch(action);
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GioHangRedux);
