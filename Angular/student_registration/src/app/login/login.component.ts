import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    this.authService.login(this.email, this.password).subscribe({
      next: (response) => {
        const role = response.user.role;
        if (role === 'admin') this.router.navigate(['/admin']);
        else if (role === 'teacher') this.router.navigate(['/teacher']);
        else this.router.navigate(['/student-dashboard']);
      },
      error: (error) => {
        this.errorMessage = error.error.error || 'Login failed';
      }
    });
  }
}
