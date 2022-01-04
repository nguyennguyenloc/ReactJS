import React, { Component } from "react";
import { Container } from "../../Containers/Container";
import { ThemeProvider } from "styled-components";
import { Dropdown } from "../../Components/Dropdown";
import { Heading3 } from "../../Components/Heading";
import { TextField } from "../../Components/TextField";
import { Button } from "../../Components/Button";
import { Table, Thead, Tr, Th } from "../../Components/Table";
import { connect } from "react-redux";
import {
  addTaskAction,
  changeThemeAction,
  deleteTaskAction,
  doneTaskAction,
  editTaskAction,
  updateTaskAction,
} from "../../../redux/actions/ToDoListActions";
import { arrTheme } from "../../Theme/ThemeManager";

class ToDoList extends Component {
  state = {
    taskName: "",
  };
  renderTaskToDo = () => {
    return this.props.taskList
      .filter((task) => !task.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(editTaskAction(task));
                }}
                className="ml-1"
              >
                <i className="fa fa-edit"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(doneTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-check"></i>
              </Button>
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  renderTaskDone = () => {
    return this.props.taskList
      .filter((item) => item.done)
      .map((task, index) => {
        return (
          <Tr key={index}>
            <Th style={{ verticalAlign: "middle" }}>{task.taskName}</Th>
            <Th className="text-right">
              <Button
                onClick={() => {
                  this.props.dispatch(deleteTaskAction(task.id));
                }}
                className="ml-1"
              >
                <i className="fa fa-trash"></i>
              </Button>
            </Th>
          </Tr>
        );
      });
  };

  // handleChange = (event) => {
  //   let { name, value } = event.target.value;
  //   this.setState({
  //     [name]: value,
  //   });
  // };

  renderTheme = () => {
    return arrTheme.map((theme, index) => {
      return (
        <option key={index} value={theme.id}>
          {theme.name}
        </option>
      );
    });
  };

  // componentWillReceiveProps(newProps) {
  //   console.log("ok", newProps);
  //   this.setState({
  //     taskName: newProps.taskEdit.taskName,
  //   });
  // }

  // static getDerivedStateFromProps(newProps, currentState) {
  //   //newProps: props mới, props cũ không truy xuất được do là this.state trong static
  //   //currentState: state hiện tại
  //   //hoặc trả về state mới
  //   let newState = { ...currentState, taskName: newProps.taskEdit.taskName };
  //   return newState;
  // }
  render() {
    return (
      <ThemeProvider theme={this.props.themeToDoList}>
        <Container className="w-50">
          <Dropdown
            onChange={(event) => {
              let { value } = event.target;
              //dispatch value lên reducer
              // this.props.dispatch(change_theme(value));
              this.props.dispatch(changeThemeAction(value));
            }}
          >
            {this.renderTheme()}
          </Dropdown>
          <Heading3>To do list</Heading3>
          {/* <Label>Task Name</Label> */}
          {/* <Input />  */}
          <TextField
            value={this.state.taskName}
            onChange={(event) => {
              this.setState({
                taskName: event.target.value,
              });
            }}
            name="task_name"
            label="Task name"
            className="w-50"
          ></TextField>
          <Button
            onClick={() => {
              //lấy thông tin từ input
              let { taskName } = this.state;
              //tạo ra 1 taskObject
              let newTask = {
                id: Date.now(),
                taskName: taskName,
                done: true,
              };
              //đưa task object lên redux thông qua phương thức dispath
              this.props.dispatch(addTaskAction(newTask));
            }}
          >
            <i className="fa fa-plus"></i> Add task
          </Button>
          <Button
            onClick={() => {
              this.props.dispatch(updateTaskAction(this.state.taskName));
            }}
            className="ml-2"
          >
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

  //trả về props cũ, state cũ trước khi render (life cycle này chạy sau render)
  componentDidUpdate(prevProps, prevState) {
    //so sánh nếu props trước đó - khác với edit props hiện tai thì setState

    if (prevProps.taskEdit.id !== this.props.taskEdit.id) {
      this.setState({
        taskName: this.props.taskEdit.taskName,
      });
    }
  }
}

const mapStateToProps = (state) => {
  return {
    themeToDoList: state.ToDoListReducer.themeToDoList,
    taskList: state.ToDoListReducer.taskList,
    taskEdit: state.ToDoListReducer.taskEdit,
  };
};
export default connect(mapStateToProps)(ToDoList);
