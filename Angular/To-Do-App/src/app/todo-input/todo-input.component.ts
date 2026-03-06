import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './todo-input.component.html',
  styleUrl: './todo-input.component.scss'
})
export class TodoInputComponent {

  // This variable is connected to the input box
  newTodoText = '';

  // Angular gives us the service automatically
  constructor(private todoService: TodoService) {}

  addTodo() {
    // Don't add if input is empty
    if (this.newTodoText.trim() === '') {
      alert('Please enter a todo!');
      return;
    }

    // Call service to add todo
    this.todoService.addTodo(this.newTodoText.trim());

    // Clear the input box after adding
    this.newTodoText = '';
  }
}
