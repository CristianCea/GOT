import { Pipe, PipeTransform } from '@angular/core';
import { Characters } from '../models/Characters';
import { HousesService } from '../services/houses.service';
import { Houses } from '../models/Houses';

@Pipe({
  name: 'paginate'
})
export class PaginatePipe implements PipeTransform {

  transform(array : Characters [], house : string ): any[] {
    
    var houseService : HousesService

    array.forEach((characters =>{
      console.log(characters.allegiances)
    }),"algo") 

    
    return array
  }

}
