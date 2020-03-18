import {createSelector} from "@ngrx/store";
import {TasksState} from "./tasks.reducer";

// TODO wtf is going here? Why state contains property from tasks.module.ts
interface State {
    tasksState: TasksState
}

export const getTasks = (state: State) => state.tasksState.tasks;
export const getTaskById = createSelector(getTasks, (tasks, props: {id: number}) => {
    return tasks.find((task) => task.id === props.id);
});