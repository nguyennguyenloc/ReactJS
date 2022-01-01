import React, { Component } from "react";
import { Button } from "../Components/Button";

export default class DemoJSS extends Component {
  render() {
    return (
      <div>
        <Button fontsize2x primary>
          Hello Lộc
        </Button>
        <Button>You are awesome!</Button>
      </div>
    );
  }
}
