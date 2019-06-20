import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Houses } from '../models/Houses';


@Injectable({
  providedIn: 'root'
})
export class HousesService {
  ApiUri = "https://anapioficeandfire.com/api";
  constructor(private http : HttpClient) { }


  getHouses(page : number, pageSize : number) {    
    return this.http.get<Houses[]>(this.ApiUri + "/Houses?page=" + page + "&pageSize=" + pageSize); 
  }

  getHouse(house: string) {
    return this.http.get(house);
  }
}
