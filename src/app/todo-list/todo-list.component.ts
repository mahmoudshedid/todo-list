import { TodoList } from './../model/todo.list';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  @ViewChild('newTodo', {static: false})
  newTodo: ElementRef;
  todoList: TodoList[] = [];

  constructor() { }

  ngOnInit(): void {
    // Init Todo list items.
    for (let i = 0; i < 10; i++) {
      this.todoList.push({ title: 'To Do' + i, status: this.isEven(i) });
    }
  }

  /**
   * This method to add new to do item to Todo list.
   */
  addNewTodo(): void {
    this.todoList.push({ title: this.newTodo.nativeElement.value, status: false });
    this.newTodo.nativeElement.value = '';
  }

  /**
   * This method to check if number is odd or even.
   * @param value boolean
   */
  private isEven(value: number): boolean {
    if (value % 2 === 0) {
      return true;
    } else {
      return false;
    }
  }

}
