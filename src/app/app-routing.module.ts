import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ApplicationFormComponent } from './application-form/application-form.component';
import { JobListComponent } from './job-list/job-list.component';


const routes: Routes = [
  {
    path: '',
    component: JobListComponent
  },
  {
    path: 'apply',
    component: ApplicationFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
