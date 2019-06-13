import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { ShoppingItem } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() items: ShoppingItem[] = [];
  // items: ShoppingItem[] = [
  //   { id: '1', description: 'Weed Eater String' },
  //   { id: '2', description: 'Band Aids' }
  // ];
  constructor() { }

  ngOnInit() {
  }

}
