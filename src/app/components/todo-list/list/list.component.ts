import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TodoListItem } from '../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css', '../todo-list.component.css']
})
export class ListComponent implements OnInit {
  @Input() todoItems: TodoListItem[];

  @Output() clearCompletedItems = new EventEmitter();
  @Output() markItemComplete = new EventEmitter<TodoListItem>();
  constructor() { }

  ngOnInit() {
  }


  markComplete(item: TodoListItem) {
    this.markItemComplete.emit(item);
  }

  clearCompleted() {
    this.clearCompletedItems.emit();
  }

}
