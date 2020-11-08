import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BooksComponent } from './books/books.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookRowComponent } from './book/book-row/book-row.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';


@NgModule({
  declarations: [
    AppComponent,
    BooksComponent,
    BookListComponent,
    BookRowComponent,
    BookDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
