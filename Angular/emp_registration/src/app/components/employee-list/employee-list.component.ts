import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  templateUrl: './employee-list.component.html',
  styleUrl: './employee-list.component.scss'
})
export class EmployeeListComponent implements OnInit {
  employees: Employee[] = [];
  filteredEmployees: Employee[] = [];
  searchTerm = '';
  loading = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loadEmployees();
  }

  loadEmployees() {
    this.loading = true;
    this.employeeService.getEmployees().subscribe({
      next: (data) => {
        this.employees = data;
        this.filteredEmployees = data;
        this.loading = false;
      },
      error: () => {
        this.showMessage('Failed to load employees', 'error');
        this.loading = false;
      }
    });
  }

  onSearch() {
    if (!this.searchTerm.trim()) {
      this.filteredEmployees = this.employees;
      return;
    }

    const term = this.searchTerm.toLowerCase();
    this.filteredEmployees = this.employees.filter(emp =>
      emp.firstName.toLowerCase().includes(term) ||
      emp.lastName.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term)
    );
  }

  onEdit(employee: Employee) {
    this.router.navigate(['/register'], { queryParams: { id: employee.id } });
  }

  onDelete(employee: Employee) {
    if (confirm(`Are you sure you want to delete ${employee.firstName} ${employee.lastName}?`)) {
      this.loading = true;
      this.employeeService.deleteEmployee(employee.id!).subscribe({
        next: () => {
          this.showMessage('Employee deleted successfully', 'success');
          this.loadEmployees();
        },
        error: () => {
          this.showMessage('Failed to delete employee', 'error');
          this.loading = false;
        }
      });
    }
  }

  showMessage(msg: string, type: 'success' | 'error') {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => this.message = '', 3000);
  }
}
