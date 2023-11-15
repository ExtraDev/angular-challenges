import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Todo } from './todo.model';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  @Input() todo!: Todo;
  @Output() todoEvent = new EventEmitter<number>();

  toggleTodo(): void {
    this.todo.status = !this.todo.status;
  }

  delete(id: number): void {
    this.todoEvent.emit(this.todo.id);
  }
}
