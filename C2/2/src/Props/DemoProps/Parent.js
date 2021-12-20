import React, { Component } from "react";

export default class Parent extends Component {
  state = { title: "cyberlearn" };

  changeTitle = () => {
    this.setState({ title: "Hello" });
  };
  render() {
    return (
      <div>
        <h3>Danh sách sản phẩm</h3>
        <h2>{this.state.title}</h2>
        {/* {this.props.children} */}
      </div>
    );
  }
}
