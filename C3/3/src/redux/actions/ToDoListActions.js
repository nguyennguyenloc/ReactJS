import { add_task, change_theme } from "../types/ToDoListType";

export const addTaskAction = (newTask) => {
  return {
    type: add_task,
    newTask,
  };
};

export const changeThemeAction = (themeId) => {
  return {
    type: change_theme,
    themeId,
  };
};
