import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-student-dashboard',
  standalone: true,
  imports: [RouterModule],
  template: `
    <div class="dashboard">
      <h1>Student Dashboard</h1>
      <p>Welcome, {{ user?.name }}</p>
      <div class="menu">
        <div class="menu-card" routerLink="/profile">
          <h3>My Profile</h3>
          <p>View and edit your profile</p>
        </div>
        <div class="menu-card">
          <h3>My Courses</h3>
          <p>View enrolled courses</p>
        </div>
      </div>
      <button (click)="logout()" class="logout-btn">Logout</button>
    </div>
  `,
  styles: [`
    .dashboard { padding: 40px; text-align: center; }
    h1 { color: #667eea; }
    .menu { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin: 30px auto; max-width: 800px; }
    .menu-card { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); cursor: pointer; transition: transform 0.3s; }
    .menu-card:hover { transform: translateY(-5px); }
    .menu-card h3 { color: #667eea; margin: 0 0 10px 0; }
    .menu-card p { color: #666; margin: 0; }
    .logout-btn { padding: 10px 20px; background: #667eea; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 20px; }
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
