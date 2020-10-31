import { Injectable } from '@angular/core';
import { Book } from './book'
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private http: HttpClient)
    { }

    books: Book[] = [{title: 'goodbye',  isbn: '123', summary: '', keywords: [], _id : '', uri: '', id: ''},
    {title: 'again',  isbn: '456', summary: '', keywords: [], _id : '', uri: '', id: ''},
    {title: 'tomorrow',  isbn: '321', summary: '', keywords: [], _id : '', uri: '', id: ''},
    {title: 'tomorrow',  isbn: '321', summary: '', keywords: [], _id : '', uri: '', id: ''}];


    getBooks() : Observable <Book[]> {

    

    
    
      return of(this.books);


     //  return this.http.get<Book[]>('http://localhost:3000/');

      
      }
}
