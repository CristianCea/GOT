import { Component, OnInit, HostBinding } from '@angular/core';
import { HousesService } from 'src/app/services/houses.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Houses } from 'src/app/models/Houses';


@Component({
  selector: 'app-houses',
  templateUrl: './houses.component.html',
  styleUrls: ['./houses.component.css']
})
export class HousesComponent implements OnInit {
  @HostBinding("class") classes = "row";
  houses : Houses[];
  pageNumber : number = 1
  pageSize : number = 10


  constructor(private housesService : HousesService, private activatedRoute: ActivatedRoute, private router : Router ) { }

  ngOnInit() {
    this.getHouses(this.pageNumber, this.pageSize)
  }


  getHouses(pageNumber : number, pageSize : number){
    const params = this.activatedRoute.snapshot.params        
      this.housesService.getHouses(pageNumber, pageSize).subscribe(        
        list => {
          this.houses = list                         
        }
      ) 
  }

  nextPage(){
    const params = this.activatedRoute.snapshot.params
    var paginasiguiente : number = (parseInt(params.pagenumber))  
    paginasiguiente = paginasiguiente + 1      
    this.router.navigate(["houses/"+ paginasiguiente +"/"+ params.pagesize ])
    this.getHouses(paginasiguiente,params.pagesize) 
  }

  prevPage(){
    const params = this.activatedRoute.snapshot.params
    var paginaanterior : number = (parseInt(params.pagenumber))  
    paginaanterior = paginaanterior - 1      
    this.router.navigate(["houses/"+ paginaanterior +"/"+ params.pagesize ])
    this.getHouses(paginaanterior,params.pagesize) 
  }

}
