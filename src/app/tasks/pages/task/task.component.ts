import {createTask, editTask} from "../../state/tasks.actions";
import {Store} from "@ngrx/store";
import {Router} from "@angular/router";
import {Component} from "@angular/core";

@Component({
    selector: "app-task",
    templateUrl: "./task.component.html",
    styleUrls: ["./task.component.scss"]
})

// TODO ask about best way:
// 1) Create base class and 2 classes (create & edit), witch implement from it
// 2) Create
// 3) everything is ok :)
export class TaskComponent {
    private readonly mode: "edit" | "create";

    constructor(private store: Store, private router: Router) {
        if (this.router.url === "/task/create") {
            this.mode = "create";
        } else {
            this.mode = "edit";
        }
    }

    public save(event) {
        if (this.mode === "create") {
            this.createTask(event.target.name.value);
        }
        if (this.mode === "edit") {
            this.editTask(event.target.name.value);
        }
    }

    private createTask(name: string) {
        this.store.dispatch(
            createTask({
                task: {
                    id: Date.now(),
                    name,
                    status: false
                }
            })
        );
    }

    private editTask(name: string) {
        this.store.dispatch(
            editTask({
                task: {
                    id: +this.router.url.replace("/task/", ""),
                    name
                }
            })
        );
    }
}
