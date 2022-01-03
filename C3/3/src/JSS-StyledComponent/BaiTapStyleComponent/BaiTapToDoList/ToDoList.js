import React, { Component } from "react";
import { Container } from "../../Containers/Container";
import { ThemeProvider } from "styled-components";
import { Dropdown } from "../../Components/Dropdown";
import { Heading3 } from "../../Components/Heading";
import { TextField } from "../../Components/TextField";
import { Button } from "../../Components/Button";
import { Table, Thead, Tr, Th } from "../../Components/Table";
import { connect } from "react-redux";
class ToDoList extends Component {
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
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
        );
      });
  };

  renderTaskDone = () => {
    return this.props.taskList
      .filter((item) => item.done === false)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button className="ml-1">
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };
  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
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
            <Thead>{this.renderTaskToDo()}</Thead>
          </Table>
          <Heading3>Task completed</Heading3>
          <Table>
            <Thead>{this.renderTaskDone()}</Thead>
          </Table>
        </Container>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
  };
};
export default connect(mapStateToProps)(ToDoList);
