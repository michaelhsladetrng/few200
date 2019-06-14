import { createAction, props } from '@ngrx/store';

let currentTempId = 0;


export const bookLoaned = createAction(
  '[Book] Book Loaned',
  ({ id, title, author, format }: { id: string, title: string, author: string, format: string }) => {
    return {
      entity: {
        id,
        title,
        author,
        format,
        loaned: true
      }
    };
  }
);

export const bookReturned = createAction(
  '[Book] Book Returned',
  ({ id, title, author, format }: { id: string, title: string, author: string, format: string }) => {
    return {
      entity: {
        id,
        title,
        author,
        format,
        loaned: false
      }
    };
  }
);


export const bookAddedToList = createAction(
  '[books/list] book added',
  ({ title, author, format }: { title: string, author: string, format: string }) => {
    return {
      entity: {
        id: 'TEMP-' + currentTempId++,
        title,
        author,
        format,
        loaned: false
      }
    };
  }
);
