import React, { Component } from "react";

export default class StateDemo extends Component {
  state = {
    status: false,
  };
  //   setState = {
  //     status: !this.state.status,
  //   };
  //   status = false;
  login = () => {
    let newState = { status: true };
    this.setState(newState, () => {
      console.log(this.state);
    });
    console.log(this.state.status);
  };
  userLogin = {
    username: "Lộc",
    age: 24,
  };

  renderUserLogin = () => {
    if (this.state.status === true) {
      return <div>{this.userLogin.username}</div>;
    }
    return <button onClick={() => this.login()}>Login</button>;
  };
  render() {
    return <div>{this.renderUserLogin()}</div>;
  }
}
