import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard">
      <h1>Admin Dashboard</h1>
      <p>Welcome, {{ user?.name }}</p>
      <div class="stats">
        <div class="stat-card">
          <h3>{{ totalUsers }}</h3>
          <p>Total Users</p>
        </div>
        <div class="stat-card">
          <h3>{{ totalStudents }}</h3>
          <p>Students</p>
        </div>
      </div>
      <div class="actions">
        <button routerLink="/user-management">Manage Users</button>
        <button (click)="logout()">Logout</button>
      </div>
    </div>
  `,
  styles: [`
    .dashboard { padding: 40px; text-align: center; }
    h1 { color: #667eea; }
    .stats { display: flex; gap: 20px; justify-content: center; margin: 30px 0; }
    .stat-card { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; border-radius: 10px; min-width: 150px; }
    .stat-card h3 { font-size: 2rem; margin: 0; }
    .stat-card p { margin: 10px 0 0 0; }
    .actions { display: flex; gap: 10px; justify-content: center; }
    button { padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; }
  `]
})
export class AdminComponent {
  user = this.authService.getUser();
  totalUsers = 0;
  totalStudents = 0;

  constructor(private authService: AuthService, private router: Router, private http: HttpClient) {
    this.loadStats();
  }

  loadStats() {
    this.http.get<any[]>('http://localhost:5000/api/users').subscribe({
      next: (data) => {
        this.totalUsers = data.length;
        this.totalStudents = data.filter(u => u.role === 'student').length;
      }
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
