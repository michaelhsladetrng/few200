
import { createReducer } from '@ngrx/store';

export interface ListState {

}

export const initialListState: ListState = {
}

export const reducer = createReducer(
  initialListState
);
