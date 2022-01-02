import React, { Component } from "react";
import { Container } from "../../Containers/Container";
import { ThemeProvider } from "styled-components";
import { ToDoListDarkTheme } from "../../Theme/ToDoListDarkTheme";
import { ToDoListLightTheme } from "../../Theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Theme/ToDoListPrimaryTheme";

export default class ToDoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListPrimaryTheme}>
        <Container>ABC</Container>
      </ThemeProvider>
    );
  }
}
