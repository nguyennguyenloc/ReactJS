import React, { Component } from "react";
import dataGlasses from "../Data/dataGlasses.json";
import "./BaiTapThuKinh.css";
export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 2,
      price: 50,
      name: "GUCCI G8759H",
      url: "./glassesImage/v2.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };
  renderGlassesList = () => {
    return dataGlasses.map((glasses, index) => {
      return (
        <img
          onClick={() => this.changeGlass(glasses)}
          className="ml-2 p-2 border border-width-1"
          style={{ width: "120px", cursor: "pointer" }}
          src={glasses.url}
          alt="{index}"
        />
      );
    });
  };

  changeGlass = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };
  render() {
    const keyFrame = `@keyframes animationGlasses${Date.now()} {
      from{
          width:0;
          opacity:0;
          transform: rotate(45deg);
      }to{
          width: 150px;
          opacity:.7;
          transform: rotate(0deg);

      }
    }`;
    const styleGlasses = {
      width: "150px",
      top: "75px",
      right: "70px",
      opacity: ".7",
      transform: "rotate(0deg)",
      animation: `animationGlasses${Date.now()} 1s`,
    };

    const infoGlasses = {
      width: "250px",
      top: "200px",
      left: "270px",
      paddingLeft: "15px",
      backgroundColor: "rgba(255, 127, 0,.5)",
      textAlign: "left",
      height: "105px",
    };
    return (
      <div
        style={{
          backgroundImage: "url(./glassesImage/background.jpg",
          backgroundSize: "2000px",
          minHeight: "2000px",
        }}
      >
        <style>{keyFrame}</style>
        <div style={{ backgroundColor: "rgba(0,0,0,.5)", minHeight: "2000px" }}>
          <h3
            style={{ backgroundColor: "rgba(0,0,0,.3)" }}
            className="text-center text-light p-5"
          >
            TRY GLASSES APP ONLINE
          </h3>
          <div className="container">
            <div className="row mt-5 text-center">
              <div className="col-6">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    style={{ width: "250px" }}
                    src="./glassesImage/model.jpg"
                    alt="model"
                  />
                  <img
                    style={styleGlasses}
                    className="position-absolute glassStyle"
                    src={this.state.glassesCurrent.url}
                    alt="glasses"
                  />
                  <div style={infoGlasses} className="position-relative">
                    <span
                      style={{ color: "#AB82FF", fontSize: "17px" }}
                      className="font-weight-bold"
                    >
                      {this.state.glassesCurrent.name}
                    </span>
                    <br />
                    <span style={{ fontSize: "13px", fontWeight: "400" }}>
                      {this.state.glassesCurrent.desc}
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <img
                  style={{ width: "250px" }}
                  src="./glassesImage/model.jpg"
                  alt="model"
                />
              </div>
            </div>
          </div>
          {/* Div chứa các kính được chọn */}
          <div className="bg-light container mt-5 p-5 text-center d-flex justify-content-around">
            {this.renderGlassesList()}
          </div>
        </div>
      </div>
    );
  }
}
