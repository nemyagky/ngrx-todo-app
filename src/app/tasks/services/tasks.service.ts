import {HttpClient} from "@angular/common/http";
import {Task} from "../models/task.interface";
import {Observable} from "rxjs";
import { environment } from '../../../environments/environment';
import {Injectable} from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class TasksService {
    constructor(private http: HttpClient) {
    }

    public getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${environment.serverUrl}/tasks`);
    }

    public createTask(newTask: Task): Observable<Task> {
        return this.http.post<Task>(`${environment.serverUrl}/tasks`, newTask);
    }

    public editTask(task: Task): Observable<Task> {
        return this.http.patch<Task>(`${environment.serverUrl}/tasks/${task.id}`, task);
    }

    public deleteTask(taskId: number) {
        return this.http.delete(`${environment.serverUrl}/tasks/${taskId}`);
    }
}
