import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bookentry',
  templateUrl: './bookentry.component.html',
  styleUrls: ['./bookentry.component.css']
})
export class BookentryComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  addBook(title: HTMLInputElement, author: HTMLInputElement, format: HTMLInputElement) {
    const theTitle = title.value;
    const theAuthor = author.value;
    const theFormat = format.value;
    // dispatch something
    // this.store.dispatch(itemAddedToList({ description }));
    title.value = '';
    author.value = '';
    format.value = '';
    title.focus();
  }
}
