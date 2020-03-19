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
// 2) Create strategy pattern. So, when should be main class
// 3) everything is ok :)
// 4) Another way
export class TaskComponent {
    private mode: "edit" | "create";
    
    // url is like /task/123 or /task/create
    private taskId: number = +this.router.url.replace("/task/", "");

    constructor(private store: Store, private router: Router) {

        this.mode = this.router.url === "/task/create" ? "create" : "edit";
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
                    id: this.taskId,
                    name
                }
            })
        );
    }
}
