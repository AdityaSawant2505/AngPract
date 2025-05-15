import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/Models/Student.Model';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit{
  students: students[] = [];
  constructor(private stdser:StudentsService){};
  ngOnInit(): void {
      this.stdser.getStudents().subscribe({
     next:(students) => {
      this.students = students;
     },
     error:(Response)=>{
      console.log(Response);
     }
    });
  }

}
