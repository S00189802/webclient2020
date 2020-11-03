import { Component, OnInit } from '@angular/core';
import {IBook} from '../book'
import {BookService } from '../book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: IBook[]  
  test : string[]

  constructor (private bookService: BookService){}

  ngOnInit(): void {

    console.log('in ngOnInit');

    this.bookService.getBooks()
    .subscribe ({
      next: (value: IBook[] )=> {
        this.books = value;},
        complete:() => console.log('all done') 
      });

      this.test = ['a','b','c'];
    }
  }
