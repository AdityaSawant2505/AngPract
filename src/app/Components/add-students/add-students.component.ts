import { Component, OnInit } from '@angular/core';
import { students } from 'src/app/Models/Student.Model';
import { StudentsService } from 'src/app/students.service';

@Component({
  selector: 'app-add-students',
  templateUrl: './add-students.component.html',
  styleUrls: ['./add-students.component.scss']
})
export class AddStudentsComponent implements OnInit{
  addStudentRequest: students = {
  studentId: 0,
  name: "",
  gender: "",
  age: 0,
  standard: "",
  fathersName: ""
};


  constructor(private stdservice:StudentsService){};
  ngOnInit(): void {
  }

  AddStudent(){
   this.stdservice.addStudent(this.addStudentRequest).subscribe({
  next: (res) => {
    alert('Student added successfully for user : '+res.name);
     this.addStudentRequest = {
        studentId: 0,
        name: "",
        gender: "",
       age: undefined,
        standard: "",
        fathersName: ""
      };
  },
  error: (err) => {
    console.error('Error adding student:', err);
    alert('Network or server issue. Please check your connection.');
  }

});

}

}
