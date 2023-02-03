import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { TaskService } from "../../../core/services/task.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Task } from "../../../core/models/task.model";
import { Subject, takeUntil, tap } from "rxjs";

@Component({
    selector: 'app-task-update-form',
    templateUrl: './task-update-form.component.html',
    styleUrls: ['./task-update-form.component.scss']
})
export class TaskUpdateFormComponent implements OnInit, OnDestroy {
    destroy$: Subject<boolean> = new Subject
    updateTaskForm!: FormGroup;
    task!: Task
    id!: number
    isAnUpdate!: boolean
    loaded: boolean = false

    constructor(private taskService: TaskService,
                private route: ActivatedRoute,
                private formBuilder: FormBuilder,
                private router: Router) {}

    ngOnInit() {
        this.id = this.route.snapshot.params['id']
        this.isAnUpdate = !!this.id

        this.updateTaskForm = this.formBuilder.group({
            title: [null, [Validators.required] ],
            description: [null],
            deadline: [null, [Validators.required] ],
        })

        if (this.isAnUpdate) {
            this.taskService.getTask(this.id).pipe(
                takeUntil(this.destroy$)
            ).subscribe(task => {
                this.task = task
                this.updateTaskForm = this.formBuilder.group({
                    title: [this.task.title, [Validators.required] ],
                    description: [this.task.description],
                    deadline: [new Date(this.task.deadline), [Validators.required] ],
                })
                this.loaded = true
            })
        }
        else {
            this.loaded = true
        }
    }

    ngOnDestroy() {
        this.destroy$.next(true)
    }

    onCreate() {
        this.taskService.createTask({ ...this.updateTaskForm.value, finished: false }).pipe(
            tap(() => this.router.navigateByUrl(`/tasks`))
        ).subscribe()
    }

    onUpdate(task: Task) {
        this.taskService.updateTask(task.id, { ...task, ...this.updateTaskForm.value }).pipe(
            tap(() => this.router.navigateByUrl(`/tasks`))
        ).subscribe()
    }
}
