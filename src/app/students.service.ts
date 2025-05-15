import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from './environments/environments';
import { students } from './Models/Student.Model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  baseapiurl:string = environment.baseapiurl;
  constructor(private http:HttpClient) { }

  getStudents():Observable<students[]>{
    return this.http.get<students[]>(this.baseapiurl + '/api/StudentApi/GetAll');
  }

  addStudent(addsstdreq:students):Observable<students>{
    return this.http.post<students>(this.baseapiurl + '/api/StudentApi/AddStudent',addsstdreq);
  }
}
