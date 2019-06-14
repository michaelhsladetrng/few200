export const bookFeatureName = 'books';

import * as fromBookList from './booklist.reducer';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Book } from '../models';

export interface State {
  list: fromBookList.BookListState;
}

export const reducers = {
  list: fromBookList.reducer
};

const selectBookFeature = createFeatureSelector<State>(bookFeatureName);

const selectBookListBranch = createSelector(selectBookFeature, f => f.list);

// 3. helpers?

const { selectAll: selectAllBookEntities } = fromBookList.adapter.getSelectors(selectBookListBranch);

export const selectBooks = createSelector(selectAllBookEntities, s => s as Book[]);
