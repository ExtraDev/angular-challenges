import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { Todo } from './todo/todo.model';
import { TodoService } from './todo/todo.service';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'todolist';
  todos: Todo[] = [];

  todoForm = new FormGroup({
    name: new FormControl<string>('', Validators.required)
  })

  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.todos = this.todoService.getTodos();
    console.log(this.todos);

  }

  addTodo(): void {
    let newTodo = {
      id: this.todos.length + 1,
      name: ""+this.todoForm.value.name,
      status: false
    }

    this.todoService.createTodo(newTodo);
    this.todoForm.reset();
    this.updateOrder();
  }

  deleteTodo(id:number) {
    this.todos = this.todoService.deleteTodo(id);
    console.log(this.todos);
  }

  updateOrder(): void {
    this.todos.sort((a, b) => {
      if (a.status === b.status) {
          return 0;
      } else if (a.status) {
          return 1; // met les Todos avec status 'true' en dernier
      } else {
          return -1; // met les Todos avec status 'false' en premier
      }
  });
  }
}
