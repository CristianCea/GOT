import { Component, OnInit } from '@angular/core';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {

  constructor(private boosService : BooksService) { }
  books : any
  
  ngOnInit() {
    this.boosService.getBooks().subscribe(
      res => {
        this.books = res
      }
    )
  }

  getBooks(){

  }

}
