import { Component, OnInit } from '@angular/core';
import { BookStoreService } from 'src/app/services/book-store.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {
  loading: boolean;
  books: any[];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.books = this.bs.getAllBooks();
  }
}
