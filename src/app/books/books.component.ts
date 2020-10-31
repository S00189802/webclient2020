import { Component, OnInit } from '@angular/core';
import {Book} from '../book'
import {BookService } from '../book.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: Book[]  
  test : string[]

  constructor (private bookService: BookService){}

  ngOnInit(): void {
    this.getBooks();
    this.test = ['a','b','c']
  }

    getBooks(): void {

    this.bookService.getBooks()
    .subscribe (books => {
      console.log(books.length);
      this.books = books })
  }


   

}
