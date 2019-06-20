import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { MatTableDataSource,MatSort,MatPaginator } from '@angular/material';
import { CharactersService } from 'src/app/services/characters.service';
import { Characters } from 'src/app/models/Characters';
import { ActivatedRoute, Router } from '@angular/router';
import { HousesService } from 'src/app/services/houses.service';
import { Houses } from 'src/app/models/Houses';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent implements OnInit {

  constructor(private charServices : CharactersService, private activatedRoute: ActivatedRoute, private router : Router , private houseService : HousesService) {
    const initialPage  : number = 1
   }

  characters : Characters []
  house : Houses 
  pageNumber : number = 1
  pageSize : number = 10 


  ngOnInit(){
    this.getCharacters(this.pageNumber,this.pageSize)    
  }

  // getCharacters(pageNumber : number, pageSize : number){
  //   const params = this.activatedRoute.snapshot.params        
  //     this.charServices.getCharacters(pageNumber, pageSize).subscribe(        
  //       list => {
  //         this.characters = list                         
  //       }
  //     ) 
  // }
  getCharacters(pageNumber : number, pageSize : number){
    const params = this.activatedRoute.snapshot.params        
      this.charServices.getCharacters(pageNumber, pageSize).subscribe(        
        list => {
          this.characters = list                         
        }
      ) 
  }

  nextPage(){
    const params = this.activatedRoute.snapshot.params
    var paginasiguiente : number = (parseInt(params.pagenumber))  
    paginasiguiente = paginasiguiente + 1      
    this.router.navigate(["characters/"+ paginasiguiente +"/"+ params.pagesize ])
    this.getCharacters(paginasiguiente,params.pagesize) 
  }

  prevPage(){
    const params = this.activatedRoute.snapshot.params
    var paginaanterior : number = (parseInt(params.pagenumber))  
    paginaanterior = paginaanterior - 1      
    this.router.navigate(["characters/"+ paginaanterior +"/"+ params.pagesize ])
    this.getCharacters(paginaanterior,params.pagesize) 
  }







  }

  
  

