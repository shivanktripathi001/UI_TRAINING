import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  standalone: true,
  imports: [],
  templateUrl: './models.component.html',
  styleUrl: './models.component.scss'
})
export class studentForm {
 
  sid: number = 0;
  sname: string = '';
  address: string = '';
  mobileNo: number = 0;
  email: string = '';
  password: string = '';
  role: string = 'student';
}
