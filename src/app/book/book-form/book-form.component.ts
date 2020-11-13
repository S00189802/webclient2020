import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookService } from '../../book.service'

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent implements OnInit {


  bookForm = new FormGroup({
    title: new FormControl('',[Validators.required]),
    isbn: new FormControl('')
  });

  get title() {
    return this.bookForm.get('title');
  }
  get isbn(){
    return this.bookForm.get('isbn');
  }

  //title = new FormControl('');

  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  

  // updateTitle(){
  //   this.title.setValue('Una is great again!');
  // }


  onSubmit() { 
    console.warn(this.bookForm.value);
    let newbook =  {summary: 'dsfdsfa', ...this.bookForm.value};
    console.log(JSON.stringify(newbook))
    this.bookService.addBook(newbook)
  .subscribe(
    book => console.log(JSON.stringify(book) + ' has been added'))
   }



}
