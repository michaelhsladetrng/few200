import { Observable } from 'rxjs';
import { TodoListItem } from './models';
import { HttpClient } from '@angular/common/http';
import { TodoListComponent } from './todo-list.component';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class TodosDataService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<TodoListItem[]> {
    return this.http.get<{ data: TodoListItem[] }>('http://localhost:3000/todos')
      .pipe(
        map(results => results.data)
      );
  }
}
