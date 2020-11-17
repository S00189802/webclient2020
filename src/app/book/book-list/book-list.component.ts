import { Component, OnInit } from '@angular/core';
import { IBook } from '../../model/book'
import { BookService } from '../../book.service'



@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  bookList: IBook[];
  message: string;
  showBookForm: boolean = false;

  currentBook: IBook;

  constructor(private bookService: BookService) { }

  ngOnInit(): void {


    this.bookService.getBooks().subscribe({
      next: (value: IBook[]) => this.bookList = value,
      complete: () => console.log('book service finished'),
      error: (mess) => this.message = mess
    })
  }

  clicked(book: IBook): void {
    this.currentBook = book;
  }
  openAddBook(): void {
    this.currentBook = null;
    this.showBookForm = true;
  }

  openEditBook(): void {
    this.showBookForm = true;
  }

bookFormClose(book: IBook): void{
  this.showBookForm = null;
  console.table(book);
  if (book == null){
    this.currentBook = null;
  }
  else if (this.currentBook == null){
    this.addNewBook(book);
  }
  else {
    console.log('need to update book with id ' + this.currentBook.id);
    this.updateBook(this.currentBook.id, book)
  }
}
  
updateBook (id: string, book: IBook){
  this.bookService.updateBook(id, book)
  .subscribe({
    next: book => this.message = "book has been modified",
    error: (err) => this.message = err
  });

// so the updated list appears

    this.bookService.getBooks().subscribe({
      next: (value: IBook[]) => this.bookList = value,
      complete: () => console.log('book service finished'),
      error: (mess) => this.message = mess
    })
}

  addNewBook(newBook: IBook): void {
    console.log('adding new book ' + JSON.stringify(newBook));
    this.bookService.addBook({ summary: 'dsfdsfa', ...newBook })
      .subscribe({
        next: book => {
          console.log(JSON.stringify(book) + ' has been added');
        this.message = "new book has been added";},
        error: (err) => this.message = err
      });
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


  // onSubmit() { 
  //   console.warn(this.bookForm.value);
  //   let newbook =  {summary: 'dsfdsfa', ...this.bookForm.value};
  //   console.log(JSON.stringify(newbook))
  //   this.bookService.addBook(newbook)
  // .subscribe({
  //   next:  book => console.log(JSON.stringify(book) + ' has been added'),
  //   error: (err) => this.message = err
  // })


