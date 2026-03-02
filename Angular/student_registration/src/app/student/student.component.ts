import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { studentForm } from '../models/models.component';

@Component({
  selector: 'app-student',
  standalone: true,
  imports: [FormsModule, RouterModule],
  templateUrl: './student.component.html',
  styleUrl: './student.component.scss'
})
export class StudentComponent {
  student: studentForm = new studentForm();

  constructor(private authService: AuthService, private router: Router) {}

  onSubmit() {
    this.authService.register({
      name: this.student.sname,
      email: this.student.email,
      password: this.student.password,
      role: this.student.role || 'student'
    }).subscribe({
      next: (response) => {
        alert('Registration successful! Please login.');
        this.router.navigate(['/login']);
      },
      error: (error) => {
        alert(error.error.error || 'Registration failed!');
      }
    });
  }
}
