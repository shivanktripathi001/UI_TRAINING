import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div class="profile-container">
      <div class="profile-card">
        <h2>My Profile</h2>
        <div class="profile-info">
          <div class="info-group">
            <label>Name</label>
            <input type="text" [(ngModel)]="user.name" [disabled]="!editMode">
          </div>
          <div class="info-group">
            <label>Email</label>
            <input type="email" [(ngModel)]="user.email" disabled>
          </div>
          <div class="info-group">
            <label>Role</label>
            <input type="text" [value]="user.role" disabled>
          </div>
        </div>
        <div class="actions">
          <button *ngIf="!editMode" (click)="editMode = true" class="btn-edit">Edit Profile</button>
          <button *ngIf="editMode" (click)="saveProfile()" class="btn-save">Save</button>
          <button *ngIf="editMode" (click)="cancelEdit()" class="btn-cancel">Cancel</button>
          <button (click)="showChangePassword = !showChangePassword" class="btn-password">Change Password</button>
        </div>
        <div *ngIf="showChangePassword" class="password-section">
          <h3>Change Password</h3>
          <div class="info-group">
            <label>New Password</label>
            <input type="password" [(ngModel)]="newPassword" placeholder="Enter new password">
          </div>
          <button (click)="changePassword()" class="btn-save">Update Password</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .profile-container {
      display: flex;
      justify-content: center;
      padding: 40px 20px;
      min-height: calc(100vh - 70px);
    }
    .profile-card {
      background: white;
      padding: 40px;
      border-radius: 10px;
      box-shadow: 0 10px 25px rgba(0,0,0,0.1);
      max-width: 500px;
      width: 100%;
    }
    h2 {
      color: #667eea;
      margin-bottom: 30px;
      text-align: center;
    }
    .info-group {
      margin-bottom: 20px;
    }
    label {
      display: block;
      margin-bottom: 5px;
      color: #555;
      font-weight: 600;
    }
    input {
      width: 100%;
      padding: 12px;
      border: 1px solid #ddd;
      border-radius: 5px;
      font-size: 14px;
    }
    input:disabled {
      background: #f5f5f5;
    }
    .actions {
      display: flex;
      gap: 10px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-weight: 600;
    }
    .btn-edit, .btn-save {
      background: #667eea;
      color: white;
    }
    .btn-cancel {
      background: #ccc;
      color: #333;
    }
    .btn-password {
      background: #764ba2;
      color: white;
    }
    .password-section {
      margin-top: 30px;
      padding-top: 30px;
      border-top: 1px solid #ddd;
    }
    h3 {
      color: #667eea;
      margin-bottom: 20px;
    }
  `]
})
export class ProfileComponent implements OnInit {
  user: any = {};
  editMode = false;
  showChangePassword = false;
  newPassword = '';
  originalUser: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.user = { ...this.authService.getUser() };
    this.originalUser = { ...this.user };
  }

  saveProfile() {
    alert('Profile updated successfully!');
    this.editMode = false;
    this.originalUser = { ...this.user };
  }

  cancelEdit() {
    this.user = { ...this.originalUser };
    this.editMode = false;
  }

  changePassword() {
    if (this.newPassword.length < 6) {
      alert('Password must be at least 6 characters');
      return;
    }
    alert('Password changed successfully!');
    this.newPassword = '';
    this.showChangePassword = false;
  }
}
