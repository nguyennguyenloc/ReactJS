import React, { Component } from "react";
import { connect } from "react-redux";
// import { HUY_GHE } from "../../redux/types/BaiTapDatVeXemPhimType";
import { huyGheAction } from "../../redux/actions/BaiTapDatVeXemPhimActions";

class ThongTinDatGhe extends Component {
  renderA = () => {
    return this.props.danhSachGheDangDat.map((gheDangDat, index) => {
      return (
        <tr key={index} className="text-warning" style={{ fontSize: "20px" }}>
          <th>{gheDangDat.soGhe}</th>
          <th>{gheDangDat.gia}</th>
          <th>
            <button
              onClick={() => {
                // this.props.dispatch({ type: HUY_GHE, ghe: gheDangDat.soGhe });
                this.props.dispatch(huyGheAction(gheDangDat.soGhe));
              }}
            >
              Huỷ
            </button>
          </th>
        </tr>
      );
    });
  };
  render() {
    return (
      <div>
        <div className="mt-5">
          <button className="gheDuocChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đã đặt
          </span>
          <br />
          <button className="gheDangChon"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế đang đặt
          </span>
          <br />
          <button className="ghe ml-0"></button>
          <span className="text-light" style={{ fontSize: "30px" }}>
            Ghế chưa đặt
          </span>
        </div>
        <div className="mt-5">
          <table className="table" border="2">
            <thead>
              <tr className="text-light" style={{ fontSize: "25px" }}>
                <th>Số ghế</th>
                <th>Giá</th>
                <th>Huỷ</th>
              </tr>
            </thead>
            <tbody>{this.renderA()}</tbody>
            <tfoot>
              <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td className="text-warning">
                  {this.props.danhSachGheDangDat.reduce(
                    (tongTien, item, index) => {
                      return (tongTien += item.gia);
                    },
                    0
                  )}
                </td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    danhSachGheDangDat: state.BaiTapDatVeXemPhimReducer.danhSachGheDangDat,
  };
};
export default connect(mapStateToProps)(ThongTinDatGhe);
