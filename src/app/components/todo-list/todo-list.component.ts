import { Component } from '@angular/core';
import { TodoListItem } from './models';

@Component({
  styleUrls: ['./todo-list.component.css'],
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html'
})

export class TodoListComponent {

  items: TodoListItem[] = [
    { description: 'Mow grass', completed: false },
    { description: 'Clean Gutters', completed: false },
    { description: 'Change Oil', completed: true }
  ];

  add(what: string) {
    const description = what;
    this.items.unshift({ description, completed: false });
    // what.value = '';
    // what.focus();
    // console.log(what);
  }

  markComplete(item: TodoListItem) {
    item.completed = true;
  }

  clearCompleted() {
    this.items = this.items.filter(item => !item.completed);
  }
}
