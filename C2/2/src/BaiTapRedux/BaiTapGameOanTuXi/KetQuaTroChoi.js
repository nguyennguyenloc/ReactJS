import React, { Component } from "react";
import { connect } from "react-redux";
class KetQuaTroChoi extends Component {
  render() {
    return (
      <div>
        <div className="display-4 text-warning">{this.props.ketQua}</div>
        <div className="display-4 text-success">
          Số bàn thắng: {this.props.soBanThang}
        </div>
        <div className="display-4 text-success">
          Số lần chơi: {this.props.soLanChoi}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ketQua: state.BaiTapGameOanTuXiReducer.ketQua,
    soBanThang: state.BaiTapGameOanTuXiReducer.soBanThang,
    soLanChoi: state.BaiTapGameOanTuXiReducer.soLanChoi,
  };
};
export default connect(mapStateToProps)(KetQuaTroChoi);
