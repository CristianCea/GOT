import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Characters } from '../models/Characters';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  ApiUri = "https://anapioficeandfire.com/api";
  constructor(private http : HttpClient) { }

  getCharacters(page : Number, pageSize : Number) {
    var characters =  this.http.get<Characters[]>(this.ApiUri + "/characters?page=" + page + "&pageSize=" + pageSize)      
    return characters
  }

  getCharacter(id : Number){
    return this.http.get(`${this.ApiUri}/characters` + id)
  }

}
