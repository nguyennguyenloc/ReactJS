import React, { Component } from "react";

export default class RenderingCondition extends Component {
  login = true;
  username = "Nguyễn Nguyên Lộc";

  renderConten = () => {
    if (this.login === true) {
      return <p>Hello {this.username}</p>;
    }
    return <button>Đăng nhập</button>;
  };

  render() {
    return <div>{this.renderConten()}</div>;
  }
}
