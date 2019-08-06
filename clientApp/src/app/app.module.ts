import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';

// Apollo client specific import
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

// Components
import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { AuthorListComponent } from './components/author-list/author-list.component';
import { HomeComponent } from './components/home/home.component';
import { BookStoreService } from './services/book-store.service';
import { BookListItemComponent } from './components/book-list-item/book-list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    NavBarComponent,
    AuthorListComponent,
    HomeComponent,
    BookListItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ApolloModule,
    HttpLinkModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: (httpLink: HttpLink) => {
        return {
          cache: new InMemoryCache(),
          // connect client to an external GraphQL Server
          link: httpLink.create({
            uri:
              'http://localhost:8080/graphql' ||
              'http://192.168.99.100:8080/graphql'
          })
        };
      },
      deps: [HttpLink]
    },
    [BookStoreService]
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
