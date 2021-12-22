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
        <div className="col-4" key={index}>
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
            style={{ transform: "rotate(120deg" }}
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
        <div className="row">
          {/* <div className="col-4">
            <button className="btnItem">
              <img
                style={{ width: 35, height: 35 }}
                src="./gameOanTuXi/bao.png"
                alt="bao"
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img
                style={{ width: 35, height: 35 }}
                src="./gameOanTuXi/bua.png"
                alt="bua"
              />
            </button>
          </div>
          <div className="col-4">
            <button className="btnItem">
              <img
                width={35}
                height={35}
                src="./gameOanTuXi/keo.png"
                alt="keo"
              />
            </button>
          </div> */}
          {this.renderImg()}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    mangDatCuoc: state.BaiTapGameOanTuXiReducer.mangDatCuoc,
  };
};
export default connect(mapStateToProps)(Player);
