import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service'
import { IBook } from '../book'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {

  books: IBook[];

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    //  this.getBooks();
  }

  // getBooks(): void {

  //   this.bookService.getBooks()
  //   .subscribe (books => this.books = books)
  // }

}
