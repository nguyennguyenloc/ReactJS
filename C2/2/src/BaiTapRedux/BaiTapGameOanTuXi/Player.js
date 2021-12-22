import React, { Component } from "react";

export default class Player extends Component {
  render() {
    return (
      <div className="text-center playerGame">
        <div className="theThink">
          <img
            style={{ transform: "rotate(120deg" }}
            className="mt-3"
            width={100}
            height={100}
            src="./gameOanTuXi/bua.png"
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
          <div className="col-4">
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
          </div>
        </div>
      </div>
    );
  }
}
