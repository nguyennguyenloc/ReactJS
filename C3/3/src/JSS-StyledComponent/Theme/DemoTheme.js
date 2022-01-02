import React, { Component } from "react";
import styled, { ThemeProvider } from "styled-components";

const configDarkTheme = {
  color: "#fff",
  background: "#000",
  fontSize: "15px",
  fontWeight: "bold",
};

const configLightTheme = {
  color: "#fff",
  background: "#63F",
  fontSize: "20px",
  fontWeight: "300",
};

export default class DemoTheme extends Component {
  state = {
    currentTheme: configDarkTheme,
  };

  setTheme = (event) => {
    this.setState({
      currentTheme:
        event.target.value === "1" ? configDarkTheme : configLightTheme,
    });
  };

  render() {
    const DivStyle = styled.div`
      color: ${(props) => props.theme.color};
      background-color: ${(props) => props.theme.background};
      padding: 5%;
      font-size: ${(props) => props.theme.fontSize}
      font-weight: ${(props) => props.theme.fontWeight}
    `;

    return (
      <ThemeProvider theme={this.state.currentTheme}>
        <DivStyle>Hello</DivStyle>
        <select onChange={this.setTheme}>
          <option value="1">Dark Theme</option>
          <option value="2">Light Theme</option>
        </select>
      </ThemeProvider>
    );
  }
}
