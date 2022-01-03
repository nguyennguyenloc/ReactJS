import React, { Component } from "react";
import { Container } from "../../Containers/Container";
import { ThemeProvider } from "styled-components";
// import { ToDoListDarkTheme } from "../../Theme/ToDoListDarkTheme";
// import { ToDoListLightTheme } from "../../Theme/ToDoListLightTheme";
import { ToDoListPrimaryTheme } from "../../Theme/ToDoListPrimaryTheme";
import { Dropdown } from "../../Components/Dropdown";
import { Heading3 } from "../../Components/Heading";
import { TextField } from "../../Components/TextField";
import { Button } from "../../Components/Button";
import { Table, Thead, Tr, Th } from "../../Components/Table";

export default class ToDoList extends Component {
  render() {
    return (
      <ThemeProvider theme={ToDoListPrimaryTheme}>
        <Container className="w-50">
          <Dropdown>
            <option value="1">Dark theme</option>
            <option value="2">Light theme</option>
            <option value="3">Primary theme</option>
          </Dropdown>
          <Heading3 className="">To do list</Heading3>
          {/* <Label>Task Name</Label> */}
          {/* <Input />  */}
          <TextField label="Task name" className="w-50"></TextField>
          <Button className="ml-2">
            <i className="fa fa-plus"></i> Add task
          </Button>
          <Button className="ml-2">
            <i className="fa fa-upload"></i> Update task
          </Button>
          <br />
          <Table></Table>
          <Heading3>Task to do</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-edit"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-check"></i>
                  </Button>
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
          <Heading3>Task completed</Heading3>
          <Table>
            <Thead>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
              <Tr>
                <Th style={{ verticalAlign: "middle" }}>Task name</Th>
                <Th className="text-right">
                  <Button className="ml-1">
                    <i className="fa fa-trash"></i>
                  </Button>
                </Th>
              </Tr>
            </Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}
