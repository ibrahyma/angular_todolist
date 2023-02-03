import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class TaskService {
    private baseUrl = "http://localhost:3000"

    constructor(private http: HttpClient) {}

    getTasks(): Observable<Task[]> {
        return this.http.get<Task[]>(`${this.baseUrl}/tasks`)
    }

    createTask(task: Task): Observable<Task> {
        return this.http.post<Task>(`${this.baseUrl}/tasks`, task)
    }

    getTask(id: number): Observable<Task> {
        return this.http.get<Task>(`${this.baseUrl}/tasks/${id}`)
    }

    updateTask(id: number, task: Task): Observable<Task> {
        return this.http.put<Task>(`${this.baseUrl}/tasks/${id}`, task)
    }

    deleteTask(id: number): Observable<any> {
        return this.http.delete(`${this.baseUrl}/tasks/${id}`)
    }
}
