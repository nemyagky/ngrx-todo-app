import {ChangeDetectionStrategy, Component} from "@angular/core";
import {Observable} from "rxjs";
import {Task} from "../../models/task.interface";
import {TasksState} from "../../state/tasks.reducer";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../state";
import {deleteTask, editTask} from "../../state/tasks.actions";

@Component({
    selector: "app-tasks",
    templateUrl: "./tasks.component.html",
    styleUrls: ["./tasks.component.scss"],
    changeDetection: ChangeDetectionStrategy.OnPush
})

export class TasksComponent {
    public tasks$: Observable<Task[]>;

    constructor(private store: Store<TasksState>) {
        // TODO: FIX IT'S TYPES
        // @ts-ignore
        this.tasks$ = this.store.select(fromRoot.getTasks);
    }

    public changeTaskStatus(id: number, status: boolean) {
        this.store.dispatch(
            editTask({
                task: {
                    id,
                    status
                }
            })
        );
    }

    public delete(id: number) {
        this.store.dispatch(deleteTask({id}));
    }

    // TODO ask if it's correct func name
    public trackByFunction(index: number, item: Task) {
        return item ? item.id : null;
    }
}
