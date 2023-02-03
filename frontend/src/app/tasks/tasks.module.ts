import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksListComponent } from './components/tasks-list/tasks-list.component';
import { TasksListItemComponent } from './components/tasks-list-item/tasks-list-item.component';
import { TaskUpdateFormComponent } from './components/task-update-form/task-update-form.component';
import { TasksRoutingModule } from "./tasks-routing.module";
import { MatListModule } from "@angular/material/list";
import { MatGridListModule } from "@angular/material/grid-list";
import { MatTableModule } from "@angular/material/table";
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";
import { ReactiveFormsModule } from "@angular/forms";
import { MatInputModule } from "@angular/material/input";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";

@NgModule({
    declarations: [
        TasksListComponent,
        TasksListItemComponent,
        TaskUpdateFormComponent
    ],
    imports: [
        CommonModule,
        TasksRoutingModule,
        MatListModule,
        MatGridListModule,
        MatTableModule,
        MatCheckboxModule,
        MatIconModule,
        MatButtonModule,
        ReactiveFormsModule,
        MatInputModule,
        MatDatepickerModule,
        MatNativeDateModule
    ]
})
export class TasksModule { }
