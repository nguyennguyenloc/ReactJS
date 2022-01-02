import React, { Component } from "react";
import DemoTheme from "./JSS-StyledComponent/Theme/DemoTheme";
// import UserProfile from "./FormValidation/UserProfile/UserProfile";
// import DemoJSS from "./JSS-StyledComponent/DemoJSS/DemoJSS";

export default class App extends Component {
  render() {
    return (
      <div>
        {/* <UserProfile /> */}
        {/* <DemoJSS /> */}
        <DemoTheme />
      </div>
    );
  }
}
