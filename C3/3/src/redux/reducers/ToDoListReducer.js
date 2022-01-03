import { arrTheme } from "../../JSS-StyledComponent/Theme/ThemeManager";
import { ToDoListDarkTheme } from "../../JSS-StyledComponent/Theme/ToDoListDarkTheme";
import { add_task, change_theme } from "../types/ToDoListType";

const initialState = {
  themeToDoList: ToDoListDarkTheme,
  taskList: [
    { id: "task-1", taskName: "task 1", done: true },
    { id: "task-2", taskName: "task 2", done: false },
    { id: "task-3", taskName: "task 3", done: true },
    { id: "task-4", taskName: "task 4", done: false },
  ],
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
    default:
      return { ...state };
  }
};

export default ToDoListReducer;
