import { Injectable, signal, computed } from '@angular/core';

// This is what ONE todo looks like
export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  // signal() stores our todo list reactively
  todos = signal<Todo[]>([
    { id: 1, text: 'Learn Angular 17', completed: false },
    { id: 2, text: 'Build Todo App', completed: false },
    { id: 3, text: 'Practice Signals', completed: false },
  ]);

  // computed() auto-calculates total todos
  totalTodos = computed(() => this.todos().length);

  // computed() auto-calculates completed todos
  completedTodos = computed(() => 
    this.todos().filter(t => t.completed).length
  );

  // ADD a new todo
  addTodo(text: string) {
    const newTodo: Todo = {
      id: Date.now(),   // unique id using timestamp
      text: text,
      completed: false
    };
    this.todos.update(list => [...list, newTodo]);
  }

  // DELETE a todo by id
  deleteTodo(id: number) {
    this.todos.update(list => list.filter(t => t.id !== id));
  }

  // TOGGLE complete/incomplete
  toggleTodo(id: number) {
    this.todos.update(list =>
      list.map(t => t.id === id ? { ...t, completed: !t.completed } : t)
    );
  }

}
