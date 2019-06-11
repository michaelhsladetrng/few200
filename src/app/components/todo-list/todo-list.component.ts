import { Component, ViewEncapsulation } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
  // encapsulation: ViewEncapsulation.None
})
export class TodoListComponent {
  // Jeff Was Here
  items: TodoListItem[] = [
    { description: 'Mow Grass', completed: false },
    { description: 'Clean Gutters', completed: false },
    { description: 'Change Oil', completed: true }
  ];

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  add(what: string) {
    const description = what;
    this.items.unshift({ description, completed: false });
    // what.value = '';
    // what.focus();
    // console.log(what);
  }

  clearCompleted() {
    this.items = this.items.filter(item => !item.completed);
  }
}
