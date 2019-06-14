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
export const loanedBooks = createSelector(selectAllBookEntities,
  (allBookEntities: Book[]) => {
    return allBookEntities.filter((book: Book) => book.loaned);
  });
export const availableBooks = createSelector(selectAllBookEntities,
  (allBookEntities: Book[]) => {
    return allBookEntities.filter((book: Book) => !book.loaned);
  });


// // 1. "feature Selector"
// // 2. A selector for each "branch" of the features state
// const selectCounterBranch = (state: State) => state.counter;
// // 3. Any Helpers, etc.?
// // 4. The selectors that are needed for the components

// // export const selectCurrentCount = (state: State) => state.counter.current;
// export const selectCurrentCount = createSelector(selectCounterBranch, b => b.current);

// // export const selectZero = (state: State) => state.counter.current === 0;
// export const selectZero = createSelector(selectCurrentCount, c => c === 0);

// export const selectCountingBy = createSelector(selectCounterBranch, b => b.by);

// export const selectDecrementDisabled = createSelector(selectCurrentCount, selectCountingBy, (current, by) => (current - by) < 0);
