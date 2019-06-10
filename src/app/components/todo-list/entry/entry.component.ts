import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.css']
})
export class EntryComponent implements OnInit {

  @Output() itemAdded = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  add(what: HTMLInputElement) {
    // const description = what.value;
    // this.items.unshift({ description, completed: false });
    this.itemAdded.emit(what.value);
    what.value = '';
    what.focus();
    // console.log(what);
  }
}
