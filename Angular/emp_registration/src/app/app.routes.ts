import { Routes } from '@angular/router';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';

export const routes: Routes = [
  { path: '', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', component: EmployeeRegisterComponent },
  { path: 'employees', component: EmployeeListComponent }
];
