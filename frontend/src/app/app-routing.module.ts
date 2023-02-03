import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from "./tasks/components/tasks-list/tasks-list.component";

const routes: Routes = [
    { path: 'tasks', loadChildren: () => import('./tasks/tasks.module').then(m => m.TasksModule) },
    { path: '', component: TasksListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
