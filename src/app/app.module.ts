import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BookListComponent } from './book/book-list/book-list.component';
import { BookRowComponent } from './book/book-row/book-row.component';
import { BookDetailsComponent } from './book/book-details/book-details.component';
import { BookFormComponent } from './book/book-form/book-form.component';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SampleFormComponent } from './sample-form/sample-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookRowComponent,
    BookDetailsComponent,
    BookFormComponent,
    SampleFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
