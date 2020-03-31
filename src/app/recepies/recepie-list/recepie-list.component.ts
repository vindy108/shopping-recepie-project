import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

//  @Output() recepiewasSelected = new EventEmitter<Recepie>();
  // recepies:Recepie[]=[
  //   new Recepie(
  //     'Test name','Test description','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/indian.jpg'
  //   ),
  //   new Recepie(
  //     'Test name','Test description','https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/indian.jpg'
  //   )
  // ];

  recepies:Recepie[];


  constructor(private recepieService:RecepieService) { }

  ngOnInit(){
     this.recepies= this.recepieService.getRecepie();
  }

  // onRecepieSelected(recepie:Recepie){
  //   this.recepiewasSelected.emit(recepie);

  // }

}
