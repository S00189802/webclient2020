import { Component, Input, OnInit } from '@angular/core';
import {IBook} from '../../book';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  @Input() book : IBook;

  constructor() { }

  ngOnInit(): void {
  }

}
