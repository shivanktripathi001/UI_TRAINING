import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  template: `
    <div class="dashboard">
      <h1>Student Dashboard</h1>
      <p>Welcome, {{ user?.name }}</p>
      <button (click)="logout()">Logout</button>
    </div>
  `,
  styles: [`
    .dashboard { padding: 40px; text-align: center; }
    h1 { color: #667eea; }
    button { padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; }
  `]
})
export class StudentDashboardComponent {
  user = this.authService.getUser();

  constructor(private authService: AuthService, private router: Router) {}

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
