import React, { Component } from "react";
import Child from "./Child";
import "./Styling.css";
import style from "./Styling.module.css";
export default class Styling extends Component {
  render() {
    //document.getElementById('id).style.backgroundColor
    const styleText = {
      color: "yellow",
      padding: "15px",
      backgroundColor: "black",
    };
    return (
      <div>
        <Child />
        <p className="text">Hello everyone</p>
        <h6 className={style.txtStyle}>Sử dung Module css</h6>
        <p style={styleText}>Css css trong file luôn</p>
        <p
          style={{
            color: "yellow",
            padding: "15px",
            backgroundColor: "orange",
          }}
        >
          Css css trong file luôn 2
        </p>
      </div>
    );
  }
}
