import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <nav class="navbar">
      <div class="nav-brand">Student Portal</div>
      <div class="nav-menu">
        <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Home</a>
        <a *ngIf="isLoggedIn && user?.role === 'admin'" routerLink="/admin" routerLinkActive="active">Admin</a>
        <a *ngIf="isLoggedIn && user?.role === 'teacher'" routerLink="/teacher" routerLinkActive="active">Teacher</a>
        <a *ngIf="isLoggedIn && user?.role === 'student'" routerLink="/student-dashboard" routerLinkActive="active">Dashboard</a>
        <a *ngIf="isLoggedIn && user?.role === 'admin'" routerLink="/user-management" routerLinkActive="active">Users</a>
        <a *ngIf="isLoggedIn" routerLink="/profile" routerLinkActive="active">Profile</a>
      </div>
      <div class="nav-actions">
        <span *ngIf="isLoggedIn" class="user-info">{{ user?.name }} ({{ user?.role }})</span>
        <button *ngIf="!isLoggedIn" routerLink="/login" class="btn-login">Login</button>
        <button *ngIf="isLoggedIn" (click)="logout()" class="btn-logout">Logout</button>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      padding: 1rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      box-shadow: 0 2px 10px rgba(0,0,0,0.1);
    }
    .nav-brand {
      color: white;
      font-size: 1.5rem;
      font-weight: bold;
    }
    .nav-menu {
      display: flex;
      gap: 1.5rem;
    }
    .nav-menu a {
      color: white;
      text-decoration: none;
      padding: 0.5rem 1rem;
      border-radius: 5px;
      transition: background 0.3s;
    }
    .nav-menu a:hover, .nav-menu a.active {
      background: rgba(255,255,255,0.2);
    }
    .nav-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    .user-info {
      color: white;
      font-size: 0.9rem;
    }
    button {
      padding: 0.5rem 1.5rem;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
    }
    .btn-login {
      background: white;
      color: #667eea;
    }
    .btn-logout {
      background: rgba(255,255,255,0.2);
      color: white;
    }
  `]
})
export class NavbarComponent {
  isLoggedIn = false;
  user: any = null;

  constructor(private authService: AuthService, private router: Router) {
    this.authService.currentUser$.subscribe(user => {
      this.user = user;
      this.isLoggedIn = !!user;
    });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
