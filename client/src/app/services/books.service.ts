import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"

@Injectable({
  providedIn: 'root'
})
export class BooksService {
  ApiUri = "https://anapioficeandfire.com/api";
  constructor(private http : HttpClient) { }


getBooks(){
  return this.http.get(`${this.ApiUri}/books`)
}


}
