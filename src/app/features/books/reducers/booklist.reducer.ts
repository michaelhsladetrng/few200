
import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';
import * as actions from '../actions/booklist.actions';


export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
  loaned: boolean;
}

export interface BookListState extends EntityState<BookEntity> {

}

export const initialBookListState: BookListState = {
  ids: ['1'],
  entities: {
    1: {
      id: '1',
      title: 'Book1',
      author: 'First Last',
      format: 'HardCover',
      loaned: true
    }
  }
};

export const adapter = createEntityAdapter<BookEntity>();


export const reducer = createReducer(
  initialBookListState,
  on(actions.bookAddedToList, (state, { entity }) => adapter.addOne(entity, state)),
  // on(actions.bookLoaned, (state, { entity }) => adapter.updateOne(entity, state)),
  // on(actions.bookReturned, (state, { entity }) => adapter.updateOne(entity, state))
);
