import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State, selectCurrentCount } from '../../reducers';
import * as counterActions from '../../actions/counter.actions';


@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  current$: Observable<number>;

  constructor(private store: Store<State>) { }

  ngOnInit() {
    // this.current$ = this.store.select(state => state.counter.current);
    this.current$ = this.store.select(selectCurrentCount);
  }

  increment() {
    // this.count += 1;
    this.store.dispatch(counterActions.countIncremented());
  }

  decrement() {
    // this.count -= 1;
    this.store.dispatch(counterActions.countDecremented());
  }

  reset() {
    // this.count -= 1;
    this.store.dispatch(counterActions.countReset());
  }
}
