import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import * as bookListActions from '../../actions/booklist.actions';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooklistComponent implements OnInit {

  @Input() items: Book[] = [];
  @Output() markBookLoaned = new EventEmitter<Book>();

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  markLoaned(book: Book) {
    const id = book.id;
    const title = book.title;
    const author = book.author;
    const format = book.format;

    this.store.dispatch(bookListActions.bookLoaned({ id, title, author, format }));
  }

  markReturned(book: Book) {
    const id = book.id;
    const title = book.title;
    const author = book.author;
    const format = book.format;

    this.store.dispatch(bookListActions.bookReturned({ id, title, author, format }));
  }
}

