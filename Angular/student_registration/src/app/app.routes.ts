import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { TeacherComponent } from './teacher/teacher.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { UserManagementComponent } from './user-management/user-management.component';
import { authGuard, roleGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: StudentComponent },
  { path: 'students', component: StudentlistComponent },
  { path: 'profile', component: ProfileComponent, canActivate: [authGuard] },
  { path: 'admin', component: AdminComponent, canActivate: [authGuard, roleGuard(['admin'])] },
  { path: 'teacher', component: TeacherComponent, canActivate: [authGuard, roleGuard(['teacher', 'admin'])] },
  { path: 'student-dashboard', component: StudentDashboardComponent, canActivate: [authGuard, roleGuard(['student', 'teacher', 'admin'])] },
  { path: 'user-management', component: UserManagementComponent, canActivate: [authGuard, roleGuard(['admin'])] }
];
