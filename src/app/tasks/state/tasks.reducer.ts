import { createReducer, on } from "@ngrx/store";
import { Task } from "../models/task.interface";
import * as TaskActions from "./tasks.actions";

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: []
};

export const tasksReducer = createReducer(
  initialState,
  on(TaskActions.loadTasks, state => {
    return {
      ...state
    };
  }),

  on(TaskActions.loadTasksSuccess, (state, { tasks }) => {
    return {
      ...state,
      tasks
    };
  }),

  on(TaskActions.createTaskSuccess, (state, { task }) => {
    return {
      ...state,
      tasks: [...state.tasks, task]
    };
  }),

  on(TaskActions.editTaskSuccess, (state, { task }) => {
    return {
      ...state,
      tasks: [
        ...state.tasks.map(currentTask => {
          if (currentTask.id === task.id) {
            return task;
          }
          return currentTask;
        })
      ]
    };
  }),

  on(TaskActions.deleteTaskSuccess, (state, { id }) => {
    return {
      ...state,
      tasks: [...state.tasks.filter(task => task.id !== id)]
    };
  })
);
