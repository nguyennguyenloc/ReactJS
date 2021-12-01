import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("hello");
  };

  handleClickParam = (param, button) => {
    alert("param: " + param);
    console.log("param " + param);
    console.log("button: ", button);
  };
  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        <button
          onClick={() => {
            alert("Lôc");
          }}
        >
          Ok
        </button>
        <button onClick={() => this.handleClick()}>Click me 2!</button>
        <button onClick={this.handleClickParam.bind(this, "hello men")}>
          Click me 3!
        </button>
      </div>
    );
  }
}
