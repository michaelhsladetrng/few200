
import { createReducer, on } from '@ngrx/store';
import { EntityState, createEntityAdapter } from '@ngrx/entity';


export interface BookEntity {
  id: string;
  title: string;
  author: string;
  format: string;
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
      format: 'HardCover'
    }
  }
};

export const adapter = createEntityAdapter<BookEntity>();


export const reducer = createReducer(
  initialBookListState,
  // on(actions.itemAddedToList, (state, { entity }) => adapter.addOne(entity, state))
);
