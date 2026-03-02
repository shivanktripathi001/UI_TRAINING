import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentService } from '../services/student.service';
import { studentForm } from '../models/models.component';

@Component({
  selector: 'app-studentlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './studentlist.component.html',
  styleUrl: './studentlist.component.scss'
})
export class StudentlistComponent implements OnInit {
  students: studentForm[] = [];

  constructor(private studentService: StudentService) {}

  ngOnInit() {
    this.loadStudents();
  }

  loadStudents() {
    this.studentService.getAllStudents().subscribe({
      next: (data) => {
        this.students = data;
      },
      error: (error) => {
        console.error('Error:', error);
      }
    });
  }

  deleteStudent(id: number) {
    if(confirm('Are you sure?')) {
      this.studentService.deleteStudent(id).subscribe({
        next: () => {
          this.loadStudents();
        },
        error: (error) => {
          console.error('Error:', error);
        }
      });
    }
  }
}
