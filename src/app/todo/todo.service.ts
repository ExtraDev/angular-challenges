import { Injectable } from '@angular/core';
import { TODOS } from './todo.seed';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[];

  constructor() { 
    this.todos = TODOS
  }

  getTodos(): Todo[] {
    return this.todos;
  }

  createTodo(todo:Todo): Todo {
    this.todos.push(todo)

    return todo;
  }

  deleteTodo(id: number): Todo[]{
    this.todos = this.todos.filter(todo => todo.id != id);
    return this.todos;
  }
}
