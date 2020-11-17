import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../book.service';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  // note: This form uses the bookService directly to add books 

  message: string = '';

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  bookForm = new FormGroup({
    title: new FormControl('blahblah', [Validators.required, Validators.minLength(4)]),
    isbn: new FormControl('', Validators.required),
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
  


  onSubmit(){

    // just showing two different ways of logging the json data.
    console.log('forms submitted with ' + JSON.stringify(this.bookForm.value));
    console.table(this.bookForm.value);

    
    this.bookService.addBook(this.bookForm.value)
    .subscribe({
      next: book => {
        console.log(JSON.stringify(book) + ' has been added');
      this.message = "new book has been added";},
      error: (err) => this.message = err
    });
  }
}
