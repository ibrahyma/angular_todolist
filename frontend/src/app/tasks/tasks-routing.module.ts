import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import { TaskUpdateFormComponent } from "./components/task-update-form/task-update-form.component";
import { TasksListComponent } from "./components/tasks-list/tasks-list.component";

const routes: Routes = [
    { path: 'create', component: TaskUpdateFormComponent },
    { path: ':id/modify', component: TaskUpdateFormComponent },
    { path: '', component: TasksListComponent }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TasksRoutingModule { }
