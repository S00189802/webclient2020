import { Component, OnInit } from '@angular/core';
import { IBook } from '../../book'
import { BookService  }  from '../../book.service'


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: IBook[];

  currentBook : IBook;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {

    this.bookService.getBooks().subscribe({
      next: (value: IBook[] )=> this.bookList = value
    })
  }

  clicked (book: IBook): void {
    this.currentBook = book;
  }

}
