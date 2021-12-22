import React, { Component } from "react";
import { connect } from "react-redux";
class Computer extends Component {
  render() {
    let keyframe = `@keyframes randomItem${Date.now()} {
      0% {top: -50px;}
      25% {top: 100px;}
      50% {top: -50px;}
      75% {top: 100px;}
     100% {top: 0;}
    
    }`;
    return (
      <div className="text-center playerGame">
        <style>{keyframe}</style>
        <div className="theThink" style={{ position: "relative" }}>
          <img
            style={{
              left: "30%",
              position: "absolute",
              transform: "rotate(120deg)",
              animation: `randomItem${Date.now()} 0.5s`,
            }}
            className="mt-3"
            width={100}
            height={100}
            src={this.props.computer.hinhAnh}
            alt={this.props.computer.hinhAnh}
          />
        </div>
        <div className="speech-bubble"></div>
        <img
          style={{ width: 200, height: 200 }}
          src="./gameOanTuXi/playerComputer.png"
          alt="playerComputer"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    computer: state.BaiTapGameOanTuXiReducer.computer,
  };
};
export default connect(mapStateToProps)(Computer);
