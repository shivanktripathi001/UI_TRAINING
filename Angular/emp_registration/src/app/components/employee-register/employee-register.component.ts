import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { EmployeeService } from '../../services/employee.service';
import { Employee } from '../../models/employee.model';

@Component({
  selector: 'app-employee-register',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterModule],
  templateUrl: './employee-register.component.html',
  styleUrl: './employee-register.component.scss'
})
export class EmployeeRegisterComponent implements OnInit {
  employeeForm!: FormGroup;
  isEditMode = false;
  employeeId: number | null = null;
  loading = false;
  message = '';
  messageType: 'success' | 'error' = 'success';

  constructor(
    private fb: FormBuilder,
    private employeeService: EmployeeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();
    
    this.route.queryParams.subscribe(params => {
      if (params['id']) {
        this.isEditMode = true;
        this.employeeId = +params['id'];
        this.loadEmployee(this.employeeId);
      } else {
        this.isEditMode = false;
        this.employeeId = null;
      }
    });
  }

  initForm() {
    this.employeeForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(2)]],
      lastName: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^[0-9]{10}$/)]],
      salary: ['', [Validators.required, Validators.min(0)]],
      address: ['', Validators.required]
    });
  }

  loadEmployee(id: number) {
    this.loading = true;
    this.employeeService.getEmployees().subscribe({
      next: (employees) => {
        console.log('All employees:', employees);
        const employee = employees.find(e => e.id === id);
        console.log('Found employee:', employee);
        if (employee) {
          this.employeeForm.setValue({
            firstName: employee.firstName,
            lastName: employee.lastName,
            email: employee.email,
            phone: employee.phone,
            salary: employee.salary,
            address: employee.address
          });
          console.log('Form values after set:', this.employeeForm.value);
        }
        this.loading = false;
      },
      error: (err) => {
        console.error('Error loading employee:', err);
        this.showMessage('Failed to load employee', 'error');
        this.loading = false;
      }
    });
  }

  onSubmit() {
    if (this.employeeForm.invalid) {
      Object.keys(this.employeeForm.controls).forEach(key => {
        this.employeeForm.get(key)?.markAsTouched();
      });
      return;
    }

    this.loading = true;
    const employeeData: Employee = this.employeeForm.value;

    if (this.isEditMode && this.employeeId) {
      this.employeeService.updateEmployee(this.employeeId, employeeData).subscribe({
        next: () => {
          this.showMessage('Employee updated successfully!', 'success');
          setTimeout(() => this.router.navigate(['/employees']), 1500);
        },
        error: () => {
          this.showMessage('Failed to update employee', 'error');
          this.loading = false;
        }
      });
    } else {
      this.employeeService.addEmployee(employeeData).subscribe({
        next: () => {
          this.showMessage('Employee registered successfully!', 'success');
          this.employeeForm.reset();
          this.loading = false;
        },
        error: () => {
          this.showMessage('Failed to register employee', 'error');
          this.loading = false;
        }
      });
    }
  }

  onReset() {
    this.employeeForm.reset();
    this.message = '';
  }

  showMessage(msg: string, type: 'success' | 'error') {
    this.message = msg;
    this.messageType = type;
    setTimeout(() => this.message = '', 3000);
  }

  get f() {
    return this.employeeForm.controls;
  }
}
