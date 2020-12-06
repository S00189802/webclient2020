import { BrowserModule } from '@angular/platform-browser';
import { APP_INITIALIZER, NgModule } from '@angular/core';

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
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { appInitializer } from './helpers/app.initializer';
import { UserService } from './user.service';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookRowComponent,
    BookDetailsComponent,
    BookFormComponent,
    SampleFormComponent,
    HomeComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [UserService] },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
