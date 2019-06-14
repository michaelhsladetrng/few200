import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { Book } from '../../models';

@Component({
  selector: 'app-booklist',
  templateUrl: './booklist.component.html',
  styleUrls: ['./booklist.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BooklistComponent implements OnInit {

  @Input() items: Book[] = [];

  constructor() { }

  ngOnInit() {
  }

}
