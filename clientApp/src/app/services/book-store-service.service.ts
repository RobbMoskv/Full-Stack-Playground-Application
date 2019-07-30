import { Injectable, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Apollo } from 'apollo-angular';

@Injectable({
  providedIn: 'root'
})
// export class BookStoreServiceService {

//   constructor() { }
// }

export class BookStoreServiceService implements OnInit, OnDestroy {
  
  loading: boolean;
  authors: any[];

  private querySubscription: Subscription;

  constructor(private apollo: Apollo, private query: String ) {}

  ngOnInit() {
    this.querySubscription = this.apollo
      .watchQuery<any>({
        query: this.query
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
