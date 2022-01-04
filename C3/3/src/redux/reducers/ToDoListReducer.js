import { arrTheme } from "../../JSS-StyledComponent/Theme/ThemeManager";
import { ToDoListDarkTheme } from "../../JSS-StyledComponent/Theme/ToDoListDarkTheme";
import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  update_task,
} from "../types/ToDoListType";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
  taskEdit: { id: "task-4", taskName: "task 4", done: false },
};

const ToDoListReducer = (state = initialState, action) => {
  switch (action.type) {
    case add_task: {
      //ktra rông
      if (action.newTask.taskName.trim() === "") {
        alert("Task name is required");
        return { ...state };
      }
      //kiểm tra tồn tại
      let taskListUpdate = [...state.taskList];

      let index = taskListUpdate.findIndex(
        (task) => task.taskName === action.newTask.taskName
      );
      if (index !== -1) {
        alert("task name already exists!");
        return { ...state };
      }

      taskListUpdate.push(action.newTask);
      //xử lý xong gán taskList mới vào taskList cũ
      state.taskList = taskListUpdate;
      return { ...state };
    }

    case change_theme: {
      //tìm theme dựa vào action.themid được chọn
      let theme = arrTheme.find((theme) => theme.id == action.themeId);
      if (theme) {
        // console.log(theme);
        //set lại theme cho state.themeToDoList
        state.themeToDoList = { ...theme.theme };
      }
      return { ...state };
    }

    case done_task: {
      //click button check => dispatch lên redux
      let taskListUpdate = [...state.taskList];
      //tìm vị trí task được click
      let index = taskListUpdate.findIndex((task) => task.id === action.taskId);
      //cập nhật trạng thái thành done
      if (index !== -1) {
        taskListUpdate[index].done = true;
      }
      // state.taskList = taskListUpdate;
      return { ...state, taskList: taskListUpdate };
    }

    case delete_task: {
      // let taskListUpdate = [...state.taskList];
      //c1
      // let index = taskListUpdate.findIndex((task) => task.id == action.taskId);
      // if (index !== -1) {
      //   taskListUpdate.splice(index, 1);
      // }

      //c2
      // taskListUpdate = taskListUpdate.filter(
      //   (task) => task.id !== action.taskId
      // );
      // state.taskList = taskListUpdate;

      // return { ...state };

      //c3
      return {
        ...state,
        taskList: state.taskList.filter((task) => task.id !== action.taskId),
      };
    }

    case edit_task: {
      return { ...state, taskEdit: action.task };
    }

    case update_task: {
      //chỉnh sửa lại taskName của taskEdit
      // console.log("action:", action.taskName);
      state.taskEdit = { ...state.taskEdit, taskName: action.taskName };

      //tìm trong taskList cập nhật lại taskEdit người dùng update
      let taskListUpdate = [...state.taskList];

      let index = taskListUpdate.findIndex(
        (task) => task.id === state.taskEdit.id
      );
      if (index !== -1) {
        // console.log("state taskEdit", state.taskEdit);
        taskListUpdate[index] = state.taskEdit;
      }

      state.taskList = taskListUpdate;
      return { ...state };
    }
    default:
      return { ...state };
  }
};

export default ToDoListReducer;
