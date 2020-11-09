import { Injectable } from '@angular/core';
import { IBook } from './book'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private dataUri = 'http://localhost:3000/books'

  constructor(private http: HttpClient) { }

  // books: IBook[] = [{ title: 'goodbye' },
  // { title: 'again' },
  // { title: 'tomorrow' },
  // { title: 'yesterday' },
  // { title: 'another' }];


  getBooks(limit?: number): Observable<IBook[]> {

    console.log("get books called with limit of " + limit);



    return this.http.get<IBook[]>(`${this.dataUri}?limit=${limit}`)
      .pipe(
        catchError(this.handleError)
      )
  }

  //taken from: https://angular.io/guide/http

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

}
