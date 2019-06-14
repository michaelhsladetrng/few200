import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { bookAddedToList } from '../../actions/booklist.actions';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {

  constructor(private store: Store<State>) { }

  ngOnInit() {
  }

  addBook(theTitle: HTMLInputElement, theAuthor: HTMLInputElement, theFormat: HTMLInputElement) {
    const title = theTitle.value;
    const author = theAuthor.value;
    const format = theFormat.value;

    this.store.dispatch(bookAddedToList({ title, author, format }));
    theTitle.value = '';
    theAuthor.value = '';
    theFormat.value = '';
    theTitle.focus();
  }
}
