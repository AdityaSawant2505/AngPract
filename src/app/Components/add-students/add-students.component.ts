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
    console.log('Student added successfully:', res);
  },
  error: (err) => {
    console.error('Error adding student:', err); // Already logs useful info
    alert('Network or server issue. Please check your connection.');
  }
});

}

}
