import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-loanedlist',
  templateUrl: './loanedlist.component.html',
  styleUrls: ['./loanedlist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoanedlistComponent implements OnInit {

  @Input() loaned: Book[] = [];
  @Output() markBookReturned = new EventEmitter<Book>();

  constructor() { }

  ngOnInit() {
  }

  markReturned(book: Book) {
    this.markBookReturned.emit(book);
  }
}
