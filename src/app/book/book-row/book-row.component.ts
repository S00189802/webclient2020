import { Component, Input, OnInit } from '@angular/core';
import { IBook } from 'src/app/model/book';

@Component({
  selector: 'app-book-row',
  templateUrl: './book-row.component.html',
  styleUrls: ['./book-row.component.css']
})
export class BookRowComponent implements OnInit {

  @Input() book: IBook;

  constructor() { }

  ngOnInit(): void {
  }

}
