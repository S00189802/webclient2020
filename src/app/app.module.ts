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
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
//import { FacebookLoginComponent } from './facebook-login/facebook-login.component';

import { JwtModule } from '@auth0/angular-jwt';

// this function is used to descibe where to get the 
// jwt to use when sending http requests.

export function tokenGetter() {
  return localStorage.getItem('id_token');
}

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BookRowComponent,
    BookDetailsComponent,
    BookFormComponent,
    SampleFormComponent,
    LoginComponent,
    DashboardComponent
   // FacebookLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    ReactiveFormsModule,
    FormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter,
        headerName: 'x-auth-token'
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
