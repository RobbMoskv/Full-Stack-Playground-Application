import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookListComponent } from './components/book-list/book-list.component';
import { AuthorListComponent } from './components/author-list/author-list.component';

const routes: Routes = [
  { path: 'books', component: BookListComponent },
  { path: 'authors', component: AuthorListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
