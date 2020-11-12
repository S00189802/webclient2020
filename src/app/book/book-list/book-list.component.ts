import { Component, OnInit } from '@angular/core';
import { IBook } from '../../model/book'
import { BookService  }  from '../../book.service'


@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: IBook[];
  message: string;

  currentBook : IBook;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {


    this.bookService.getBooks().subscribe({
      next: (value: IBook[] )=> this.bookList = value,
      complete: () => console.log('book service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked (book: IBook): void {
    this.currentBook = book;
  }

  isSelected(book: IBook): boolean{
    if (!book || !this.currentBook) {
      return false;
    }
    else {
      return book.id === this.currentBook.id;
    }
  }

}
