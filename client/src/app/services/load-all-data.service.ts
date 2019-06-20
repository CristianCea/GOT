import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { AngularFrameworkComponentWrapper } from 'ag-grid-angular';

@Injectable({
  providedIn: 'root'
})
export class LoadAllDataService {

  constructor(private http: HttpClient) { }



  loadAllData() {
    const one : any = Object
    const categories = ["books", "characters", "houses"]
    var noPages = [1, 43, 9]
    var books = [];
    var characters = [];
    var houses = [];
    var bookPromises = [];
    var characterPromises = [];
    var housePromises = [];

    for (let indexZ = 0; indexZ < categories.length; indexZ++) {
      // un loop por cada categoria
      for (let indexY = 0; indexY < noPages[indexZ]; indexY++) {
        if (indexZ === 0) {
          bookPromises.push(this.http.get(`https://anapioficeandfire.com/api/${categories[indexZ]}?page=${indexY + 1}&pageSize=50`));
        }
        if (indexY === 1) {
          characterPromises.push(this.http.get(`https://anapioficeandfire.com/api/${categories[indexZ]}?page=${indexY + 1}&pageSize=50`));
        }
        if (indexZ === 2) {
          housePromises.push(this.http.get(`https://anapioficeandfire.com/api/${categories[indexZ]}?page=${indexY + 1}&pageSize=50`));
        }
      }
    }

    one.all(bookPromises).then(function (res) {
      res.forEach(element => {
        element.array.forEach(book => {
          books.push(book)
        });

      });
    })
      .catch(err => {
        alert("we have a problem getting books")
      })


    one.all(characterPromises).then(function (res) {
      res.forEach(element => {
        element.array.forEach(char => {
          characters.push(char)
        });

      });
    })
      .catch(err => {
        alert("we have a problem getting characters")
      })

    one.all(housePromises).then(function (res) {
      res.forEach(element => {
        element.array.forEach(house => {
          houses.push(house)
        });

      });
    })
      .catch(err => {
        alert("we have a problem getting houses")
      })

    return {
      books: books,
      characters: characters,
      houses: houses
    }

  }

}
