import React, { Component } from "react";
import Parent from "./Parent";
import DanhSachSanPham from "../DanhSachSanPham";

export default class DemoProps extends Component {
  refParen = React.createRef();

  changeTitle = () => {
    this.refParen.current.changeTitle();
  };

  render() {
    return (
      <div>
        <button onClick={this.changeTitle}>Change title</button>
        <Parent ref={this.refParen}>
          <DanhSachSanPham />
          <h3>Hello Cyberlearn</h3>
          <DanhSachSanPham />
        </Parent>
      </div>
    );
  }
}
