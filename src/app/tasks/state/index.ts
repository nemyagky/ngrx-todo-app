import {createFeatureSelector, createSelector} from "@ngrx/store";
import {TasksState} from "./tasks.reducer";

export const TASK_STATE = "tasksState";


const taskState = createFeatureSelector(TASK_STATE);
export const getTasks = createSelector(taskState, (state: TasksState) => state.tasks);