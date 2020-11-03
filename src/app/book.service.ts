import { Injectable } from '@angular/core';
import { IBook } from './book'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient) { }

  books: IBook[] = [{ title: 'goodbye' },
  { title: 'again' },
  { title: 'tomorrow' },
  { title: 'yesterday' },
  { title: 'another' }];


  getBooks(): Observable<IBook[]> {

    console.log("get books called");




    return of(this.books);




  }
}
