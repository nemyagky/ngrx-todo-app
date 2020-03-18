import { loadTasks } from "./tasks/state/tasks.actions";
import { Store } from "@ngrx/store";
import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  template: `
    <router-outlet></router-outlet>
  `
})
export class AppComponent {
  constructor(private store: Store) {
    this.loadTasks();
  }

  private loadTasks() {
    this.store.dispatch(loadTasks());
  }
}
