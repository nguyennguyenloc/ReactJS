import React, { Component } from "react";
import { connect } from "react-redux";
class Player extends Component {
  renderImg = () => {
    return this.props.mangDatCuoc.map((item, index) => {
      let border = {};
      if (item.datCuoc) {
        border = { border: "3px solid orange" };
      }
      return (
        <div
          onClick={() => this.props.datCuoc(item.ma)}
          className="col-4"
          key={index}
        >
          <button style={border} className="btnItem">
            <img
              style={{ width: 35, height: 35 }}
              src={item.hinhAnh}
              alt={item.hinhAnh}
            />
          </button>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(120deg)" }}
            className="mt-3"
            width={100}
            height={100}
            src={
              this.props.mangDatCuoc.find((item) => item.datCuoc === true)
                .hinhAnh
            }
            alt="bua"
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./gameOanTuXi/player.png"
          alt="player"
        />
        <div className="row">{this.renderImg()}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapGameOanTuXiReducer.mangDatCuoc,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    datCuoc: (maCuoc) => {
      let action = {
        type: "CHON_KEO_BUA_BAO",
        maCuoc,
      };
      dispatch(action);
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Player);
