import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './Components/Student/student-list/student-list.component';
import { AddStudentsComponent } from './Components/add-students/add-students.component';

const routes: Routes = [
  {
    path:'',
    component:StudentListComponent
  },
  {
    path:'students',
    component:StudentListComponent
  },
  {
    path:'students/add',
    component:AddStudentsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
