import {createAction, props} from "@ngrx/store";
import {Task} from "../models/task.interface";

export const loadTasks = createAction("[Tasks Component] Load Tasks");
export const loadTasksSuccess = createAction(
    "[Tasks Component] Load Tasks Success",
    props<{ tasks: Task[] }>()
);

export const createTask = createAction(
    "[Task Component] Create Task",
    props<{ task: Task }>()
);
export const createTaskSuccess = createAction(
    "[Task Component] Create Task Success",
    props<{ task: Task }>()
);

export const deleteTask = createAction(
    "[Tasks Component] Delete Task",
    props<{ id: number }>()
);
export const deleteTaskSuccess = createAction(
    "[Tasks Component] Delete Task Success",
    props<{ id: number }>()
);

export const editTask = createAction(
    "[Task Component] Edit Task",
    props<{ task: Task }>()
);
export const editTaskSuccess = createAction(
    "[Task Component] Edit Task Success",
    props<{ task: Task }>()
);
