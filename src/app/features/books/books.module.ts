import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookentryComponent } from './components/bookentry/bookentry.component';
import { BooklistComponent } from './components/booklist/booklist.component';
import { StoreModule } from '@ngrx/store';
import { bookFeatureName, reducers } from './reducers';
import { LoanedlistComponent } from './components/loanedlist/loanedlist.component';

@NgModule({
  declarations: [BooksComponent, BookentryComponent, BooklistComponent, LoanedlistComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(bookFeatureName, reducers)
  ]
})
export class BooksModule { }
