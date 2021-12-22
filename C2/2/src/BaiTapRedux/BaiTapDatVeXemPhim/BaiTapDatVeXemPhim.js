import React, { Component } from "react";
import "./BaiTapDatVeXemPhim.css";
import ThongTinDatGhe from "./ThongTinDatGhe";
export default class BaiTapDatVeXemPhim extends Component {
  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./bookingTicket/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0,0,0,0.7)",
          }}
        >
          <div className="container-fluid">
            <div className="row">
              <div className="col-8 text-center">
                <div className="text-light display-4 text-warninng">
                  ĐẶT VÉ XEM PHIM CYBERLEARN
                </div>
                <div className="mt-5 text-light " style={{ fontSize: "25px" }}>
                  Màn hình
                </div>
                <div
                  className="mt-ư"
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "center",
                  }}
                >
                  <div className="screen"></div>
                </div>
              </div>
              <div className="col-4 ">
                <div style={{ fontSize: "35px" }} className="text-light mt-2 ">
                  DANH SÁCH GHẾ BẠN CHỌN
                  <div>
                    <ThongTinDatGhe />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
