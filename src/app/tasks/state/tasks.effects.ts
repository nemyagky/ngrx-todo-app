import {TasksService} from "../services/tasks.service";
import * as TaskActions from "./tasks.actions";
import {Injectable} from "@angular/core";
import {map, switchMap, tap} from "rxjs/operators";
import {Actions, Effect, ofType, createEffect} from "@ngrx/effects";
import {Task} from "../models/task.interface";
import {Router} from "@angular/router";

@Injectable()
export class TasksEffects {
    private loadTasks$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.loadTasks),
            switchMap(() =>
                this.taskService.getTasks().pipe(
                    map((tasks: Task[]) => {
                        return TaskActions.loadTasksSuccess({tasks});
                    })
                )
            )
        )
    );

    private createTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.createTask),
            switchMap(action =>
                this.taskService.createTask(action.task).pipe(
                    tap(t => console.log(t)),
                    map((task: Task) => {
                        // TODO I think that it will be better to place navigation in component
                        this.router.navigateByUrl("/tasks");
                        return TaskActions.createTaskSuccess({task});
                    })
                )
            )
        )
    );
    private editTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.editTask),
            switchMap(action =>
                this.taskService.editTask(action.task).pipe(
                    map((task: Task) => {

                        this.router.navigateByUrl("/tasks");
                        return TaskActions.editTaskSuccess({task});
                    })
                )
            )
        )
    );

    private deleteTask$ = createEffect(() =>
        this.actions$.pipe(
            ofType(TaskActions.deleteTask),
            switchMap(action =>
                this.taskService.deleteTask(action.id).pipe(
                    map(() => {
                        return TaskActions.deleteTaskSuccess({id: action.id});
                    })
                )
            )
        )
    );

    constructor(
        private actions$: Actions,
        private taskService: TasksService,
        private router: Router
    ) {
    }
}
