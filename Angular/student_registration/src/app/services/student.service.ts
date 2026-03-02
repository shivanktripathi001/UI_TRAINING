import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { studentForm } from '../models/models.component';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private apiUrl = 'http://localhost:3000/api/students';

  constructor(private http: HttpClient) { }

  registerStudent(student: studentForm): Observable<any> {
    return this.http.post(this.apiUrl, student);
  }

  getAllStudents(): Observable<studentForm[]> {
    return this.http.get<studentForm[]>(this.apiUrl);
  }

  deleteStudent(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
