import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.css']
})
export class SampleFormComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  bookForm = new FormGroup({
    title: new FormControl('blahblah', [Validators.required, Validators.minLength(4)]),
    isbn: new FormControl('', [Validators.required])
  });


  get title() {
    return this.bookForm.get('title');
  }
  get isbn() {
    return this.bookForm.get('isbn');
  }
  


  onSubmit(){
    console.log('forms submitted with ' + JSON.stringify(this.bookForm.value));
    console.table(this.bookForm.value)
  }
}
