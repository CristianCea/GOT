import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HousesComponent } from './components/houses/houses.component';
import { HttpClientModule } from '@angular/common/http';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HousesService } from './services/houses.service';
import { BooksComponent } from './components/books/books.component';
import { CharactersComponent } from './components/characters/characters.component';
import { BooksService } from './services/books.service';
import { AgGridModule } from 'ag-grid-angular';
import { PaginatePipe } from './pipes/paginate.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HousesComponent,
    NavigationComponent,
    BooksComponent,    
    CharactersComponent, PaginatePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,  
    HttpClientModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    HousesService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
