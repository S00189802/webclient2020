import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap'



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
import { FacebookLoginComponent } from './facebook-login/facebook-login.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookRowComponent,
    BookDetailsComponent,
    BookFormComponent,
    SampleFormComponent,
    FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
