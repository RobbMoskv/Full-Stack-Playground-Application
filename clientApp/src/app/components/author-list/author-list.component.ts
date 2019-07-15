import { Component, OnInit, OnDestroy } from '@angular/core';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { Subscription } from 'rxjs';

// We use the gql tag to parse our query string into a query document
const AllAuthors = gql`
  query {
    authors {
      name
      age
    }
  }
`;

@Component({
  selector: 'app-author-list',
  templateUrl: './author-list.component.html',
  styleUrls: ['./author-list.component.css']
})
export class AuthorListComponent implements OnInit, OnDestroy {
  loading: boolean;
  authors: any[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: AllAuthors
      })
      .valueChanges.subscribe(({ data, loading }) => {
        // tslint:disable-next-line:no-debugger
        this.loading = loading;
        this.authors = data.authors;
      });
  }

  ngOnDestroy() {
    this.querySubscription.unsubscribe();
  }
}
