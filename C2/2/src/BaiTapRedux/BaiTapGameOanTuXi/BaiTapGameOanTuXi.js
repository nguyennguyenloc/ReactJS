import React, { Component } from "react";
import Player from "./Player";
import Computer from "./Computer";
import "./BaiTapGameOanTuXi.css";
import KetQuaTroChoi from "./KetQuaTroChoi";

import { connect } from "react-redux";
class BaiTapGameOanTuXi extends Component {
  render() {
    return (
      <div className="gameOanTuXi">
        <div className="row text-center mt-5">
          <div className="col-4 mt-3">
            <Player />
          </div>
          <div className="col-4 mt-3">
            <KetQuaTroChoi />
            <button
              onClick={() => this.props.playGame()}
              className="btn btn-success p-2 display-4 mt-5"
            >
              Play Game
            </button>
          </div>
          <div className="col-4 mt-3">
            <Computer />
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    playGame: () => {
      let count = 0;
      //khai báo hàm lặp đi lặp lại
      let randomComputerItem = setInterval(() => {
        dispatch({
          type: "RAN_DOM",
        });
        count++;
        if (count > 10) {
          //dừng hàm setInterval
          clearInterval(randomComputerItem);
          dispatch({ type: "END_GAME" });
        }
      }, 100);
    },
  };
};
export default connect(null, mapDispatchToProps)(BaiTapGameOanTuXi);
