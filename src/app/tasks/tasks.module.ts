import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TasksComponent} from "./pages/tasks/tasks.component";
import {TaskComponent} from "./pages/task/task.component";
import {StoreModule} from "@ngrx/store";
import {EffectsModule} from "@ngrx/effects";
import {tasksReducer} from "./state/tasks.reducer";
import {TasksEffects} from "./state/tasks.effects";
import {RouterModule} from "@angular/router";
import {FormsModule} from "@angular/forms";
import {TASK_STATE} from "./state";

@NgModule({
    declarations: [TasksComponent, TaskComponent],
    imports: [
        CommonModule,
        StoreModule.forFeature(TASK_STATE, tasksReducer),
        EffectsModule.forRoot([TasksEffects]),
        RouterModule,
        FormsModule
    ]
})
export class TasksModule {
}
