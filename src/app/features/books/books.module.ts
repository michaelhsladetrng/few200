import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BooksComponent } from './books.component';
import { BookentryComponent } from './components/bookentry/bookentry.component';
import { BooklistComponent } from './components/booklist/booklist.component';

@NgModule({
  declarations: [BooksComponent, BookentryComponent, BooklistComponent],
  imports: [
    CommonModule
  ]
})
export class BooksModule { }
