import {
  add_task,
  change_theme,
  delete_task,
  done_task,
  edit_task,
  update_task,
} from "../types/ToDoListType";

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

export const doneTaskAction = (taskId) => {
  return {
    type: done_task,
    taskId,
  };
};

export const deleteTaskAction = (taskId) => {
  return {
    type: delete_task,
    taskId,
  };
};
export const editTaskAction = (task) => {
  return {
    type: edit_task,
    task,
  };
};

export const updateTaskAction = (taskName) => {
  return {
    type: update_task,
    taskName,
  };
};
