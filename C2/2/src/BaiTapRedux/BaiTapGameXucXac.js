import React, { Component } from "react";
import "./BaiTapGameXucXac.css";
import ThongTinTroChoi from "./ThongTinTroChoi";
import XucXac from "./XucXac";
export default class BaiTapGameXucXac extends Component {
  render() {
    return (
      <div className="game">
        <div className="title-game text-center mt-5 display-4">
          Game đổ xúc xắc
        </div>
        <div className="row text-center mt-2">
          <div className="col-5">
            <button className="btnGame">TÀI</button>
          </div>
          <div className="col-2">
            <XucXac />
          </div>
          <div className="col-5">
            <button className="btnGame">TÀI</button>
          </div>
        </div>
        <div className="thongTinTroChoi text-center">
          <ThongTinTroChoi />
          <button className="btn btn-success p-2 display-4 mt-5">
            Play game
          </button>
        </div>
      </div>
    );
  }
}
