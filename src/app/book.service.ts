import { Injectable } from '@angular/core';
import { IBook } from './book'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  // books: IBook[] = [{ title: 'goodbye' },
  // { title: 'again' },
  // { title: 'tomorrow' },
  // { title: 'yesterday' },
  // { title: 'another' }];


  getBooks(limit?: number): Observable<IBook[]> {

    console.log("get books called with limit of " + limit );



    return this.http.get<IBook[]>(`http://localhost:3000/books?limit=${limit}`)
    .pipe(
      tap({complete: () => console.log('handling get request')}),
      catchError(this.handleError)
    )
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // here this is a client side error
      console.error('Error occured in getBooks service', error.error.message)
    }
    else {
      console.error(`Backend error ${error.status}
      body was: ${error.error}`);
    }

    return throwError(
      'Unable to handle request, please try again later')
  }
}
