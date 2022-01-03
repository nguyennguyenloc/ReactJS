import { add_task } from "../types/ToDoListType";

export const addTaskAction = (newTask) => {
  return {
    type: add_task,
    newTask,
  };
};
