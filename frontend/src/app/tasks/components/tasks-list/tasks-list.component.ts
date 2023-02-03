import {Component, OnInit} from '@angular/core';
import {TaskService} from "../../../core/services/task.service";
import {Observable, tap} from "rxjs";
import {Task} from "../../../core/models/task.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-tasks-list',
  templateUrl: './tasks-list.component.html',
  styleUrls: ['./tasks-list.component.scss']
})
export class TasksListComponent implements OnInit {
    tasks$!: Observable<Task[]>
    displayedColumns: string[] = ['finished', 'title', 'description', 'deadline', 'modify', 'delete']

    constructor(private taskService: TaskService,
                private router: Router) {}

    ngOnInit() {
        this.tasks$ = this.taskService.getTasks()
    }

    onDelete(task: Task) {
        if (!confirm(`TITRE : ${task.title}\nVeux-tu vraiment supprimer ça ?`)) return

        this.taskService.deleteTask(task.id).pipe(
            tap(() => {
                this.router.navigateByUrl("/tasks")
                this.tasks$ = this.taskService.getTasks()
            })
        ).subscribe()
    }

    onCheckFinishStatus(task: Task) {
        this.taskService.updateTask(task.id, { ...task, finished: !task.finished }).pipe(
            tap(() => {
                this.router.navigateByUrl("/tasks")
                this.tasks$ = this.taskService.getTasks()
            })
        ).subscribe()
    }
}
