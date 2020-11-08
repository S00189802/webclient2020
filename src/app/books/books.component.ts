import { Component, OnInit } from '@angular/core';
import { IBook } from '../book';
import { BookService } from '../book.service';


@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  books: IBook[]
  test: string[]
  message: string;

  constructor(private bookService: BookService) { 
    this.message = '';
  }

  ngOnInit(): void {
    console.log('in ngOnInit');

    this.bookService.getBooks(5)
      .subscribe({
        next: (value: IBook[]) => {
          this.books = value;
        },
        complete: () => console.log('all done'),
        error: (mess: string) => {
          this.message = mess;
          console.log(mess);
        }
      });

    this.test = ['a', 'b', 'c'];
  }

}
