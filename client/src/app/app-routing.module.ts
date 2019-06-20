import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HousesComponent } from './components/houses/houses.component';
import { BooksComponent } from './components/books/books.component';
import { CharactersComponent } from './components/characters/characters.component';

const routes: Routes = [
  {
    // este es el parametro donde le vamos a decir como se va a llamar nuestra ruta
  path: '',
  redirectTo: "houses", 
  pathMatch: "full"
  },
  {
    path: "houses/:pagenumber/:pagesize",
    component : HousesComponent
  },
  {
    path: "houses",
    component : HousesComponent
  },
  {
    path: "characters",
    component : CharactersComponent
  },
  {
    path: "books",
    component : BooksComponent
  },
  {
    path: "characters/:pagenumber/:pagesize",
    component : CharactersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
