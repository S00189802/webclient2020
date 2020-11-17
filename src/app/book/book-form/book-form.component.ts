import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IBook } from 'src/app/model/book';
import { BookService } from '../../book.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {

  @Input() book : IBook;

  @Output() bookFormClose = new EventEmitter<IBook>();

  message: string = '';
  isNewBookForm: boolean = false;
  bookForm: FormGroup;

  

  get title() {
    return this.bookForm.get('title');
  }
  get isbn() {
    return this.bookForm.get('isbn');
  }
  get summary() {
    return this.bookForm.get('summary');
  }

  constructor() { }

  ngOnInit(): void {
    console.table(this.book);
    if (this.book == null) {
      this.book = {title:'', isbn: '', summary: '', id:'', keywords:[]};
      this.isNewBookForm = true;
    }

    this.bookForm = new FormGroup({
      title: new FormControl(this.book.title, [Validators.required, Validators.minLength(4)]),
      isbn: new FormControl(this.book.isbn, [Validators.required]),
      summary: new FormControl(this.book.summary,[Validators.required])
    });
  }

  onSubmit() {
    this.bookFormClose.emit(this.bookForm.value)
  }

  closeForm(){
    this.bookFormClose.emit(null)
  }

}




