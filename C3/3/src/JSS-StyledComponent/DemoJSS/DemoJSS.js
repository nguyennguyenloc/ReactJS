import React, { Component } from "react";
import { Button, SmallButton } from "../Components/Button";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button fontsize2x primary>
          Hello Lộc
        </Button>
        <Button>You are awesome!</Button>
        <SmallButton>Hello SmallButton</SmallButton>
      </div>
    );
  }
}
