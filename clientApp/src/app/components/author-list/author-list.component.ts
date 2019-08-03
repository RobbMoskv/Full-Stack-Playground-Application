import { Component, OnInit } from '@angular/core';
import { BookStoreService } from 'src/app/services/book-store.service';

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit {
  authors: any[];

  constructor(private bs: BookStoreService) {}

  ngOnInit() {
    this.authors = this.bs.getAllAuthors();
  }
}
