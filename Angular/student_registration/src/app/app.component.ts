import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { studentForm } from './models/models.component';
import { StudentComponent } from './student/student.component';
import { StudentlistComponent } from './studentlist/studentlist.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'student_registration';
}
