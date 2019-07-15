import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

// We use the gql tag to parse our query string into a query document
const AllBooks = gql`
  query {
    authors {
      name
    }
  }
`;

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit, OnDestroy {
  loading: boolean;
  authors: any;

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: AllBooks
      })
      .valueChanges.subscribe(({ data, loading }) => {
        this.loading = loading;
        this.authors = data.authors;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
