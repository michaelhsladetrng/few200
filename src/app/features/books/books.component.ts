import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State, selectBooks } from './reducers';
import { Observable } from 'rxjs';
import { Book } from './models';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  items$: Observable<Book[]>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.items$ = this.store.select(selectBooks);
  }

}
