import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
  providedIn: 'root'
})
export class BookStoreService implements OnDestroy {
  loading: boolean;
  authors: any[];
  books: any[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  getAllAuthors() {
    // We use the gql tag to parse our query string into a query document
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: gql`
          query {
            authors {
              name
              age
            }
          }
        `
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.authors = data.authors;
      });

    return this.authors;
  }

  getAllBooks() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: gql`
          query {
            books {
              id
              name
              genre
            }
          }
        `
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.books = data.books;
      });

    return this.books;
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
