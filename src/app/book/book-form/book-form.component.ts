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


  @Output() newBookEvent = new EventEmitter<IBook>();

  message: string = '';

  bookForm = new FormGroup({
    title: new FormControl('', [Validators.required, Validators.minLength(4)]),
    isbn: new FormControl('', [Validators.required]),
    summary: new FormControl('',[Validators.required])
  });

  get title() {
    return this.bookForm.get('title');
  }
  get isbn() {
    return this.bookForm.get('isbn');
  }
  get summary() {
    return this.bookForm.get('summary');
  }

  //title = new FormControl('');

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    this.newBookEvent.emit(this.bookForm.value)
  }

}




