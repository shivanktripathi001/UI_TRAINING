import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="management-container">
      <h1>User Management</h1>
      <div class="stats">
        <div class="stat-card">
          <h3>{{ totalUsers }}</h3>
          <p>Total Users</p>
        </div>
        <div class="stat-card">
          <h3>{{ adminCount }}</h3>
          <p>Admins</p>
        </div>
        <div class="stat-card">
          <h3>{{ teacherCount }}</h3>
          <p>Teachers</p>
        </div>
        <div class="stat-card">
          <h3>{{ studentCount }}</h3>
          <p>Students</p>
        </div>
      </div>
      <div class="users-table">
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let user of users">
              <td>{{ user.id }}</td>
              <td>{{ user.name }}</td>
              <td>{{ user.email }}</td>
              <td><span class="badge" [class]="user.role">{{ user.role }}</span></td>
              <td>{{ user.created_at | date:'short' }}</td>
              <td>
                <button (click)="deleteUser(user.id)" class="btn-delete">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  styles: [`
    .management-container {
      padding: 40px;
      max-width: 1200px;
      margin: 0 auto;
    }
    h1 {
      color: #667eea;
      margin-bottom: 30px;
    }
    .stats {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 20px;
      margin-bottom: 40px;
    }
    .stat-card {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      color: white;
      padding: 30px;
      border-radius: 10px;
      text-align: center;
    }
    .stat-card h3 {
      font-size: 2.5rem;
      margin: 0;
    }
    .stat-card p {
      margin: 10px 0 0 0;
      opacity: 0.9;
    }
    .users-table {
      background: white;
      border-radius: 10px;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
      overflow: hidden;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 15px;
      text-align: left;
      border-bottom: 1px solid #eee;
    }
    th {
      background: #f8f9fa;
      font-weight: 600;
      color: #333;
    }
    .badge {
      padding: 5px 10px;
      border-radius: 20px;
      font-size: 0.85rem;
      font-weight: 600;
    }
    .badge.admin {
      background: #ff6b6b;
      color: white;
    }
    .badge.teacher {
      background: #4ecdc4;
      color: white;
    }
    .badge.student {
      background: #95e1d3;
      color: #333;
    }
    .btn-delete {
      padding: 8px 15px;
      background: #ff6b6b;
      color: white;
      border: none;
      border-radius: 5px;
      cursor: pointer;
    }
  `]
})
export class UserManagementComponent implements OnInit {
  users: any[] = [];
  totalUsers = 0;
  adminCount = 0;
  teacherCount = 0;
  studentCount = 0;

  constructor(private http: HttpClient, private authService: AuthService) {}

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.http.get<any[]>('http://localhost:5000/api/users').subscribe({
      next: (data) => {
        this.users = data;
        this.totalUsers = data.length;
        this.adminCount = data.filter(u => u.role === 'admin').length;
        this.teacherCount = data.filter(u => u.role === 'teacher').length;
        this.studentCount = data.filter(u => u.role === 'student').length;
      },
      error: () => {
        this.users = [];
      }
    });
  }

  deleteUser(id: number) {
    if (confirm('Are you sure you want to delete this user?')) {
      this.http.delete(`http://localhost:5000/api/users/${id}`).subscribe({
        next: () => {
          alert('User deleted successfully');
          this.loadUsers();
        },
        error: () => alert('Failed to delete user')
      });
    }
  }
}
