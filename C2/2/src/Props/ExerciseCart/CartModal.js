import React, { Component } from "react";

export default class CartModal extends Component {
  renderCar = () => {
    let { gioHang } = this.props;
    return gioHang.map((item, index) => {
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
          <td>{item.soLuong}</td>
          <td>{item.giaBan.toLocaleString()}</td>
          <td>{(item.giaBan * item.soLuong).toLocaleString()}</td>
          <td>
            <button
              onClick={() => this.props.xoaGioHang(item)}
              className="btn btn-danger"
            >
              Xoá
            </button>
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div
        className="modal fade"
        id="modelId"
        tabindex="-1"
        role="dialog"
        aria-labelledby="modelTitleId"
        aria-hidden="true"
      >
        <div
          style={{ minWidth: 1000 }}
          className="modal-dialog"
          role="document"
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">Giỏ hàng</h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
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
    );
  }
}
