import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Route } from '@angular/compiler/src/core';

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


  constructor(private recepieService:RecepieService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit(){
     this.recepies= this.recepieService.getRecepie();
  }

  onNewRecepie(){
    this.router.navigate(['new'], {relativeTo:this.route});


  }

  // onRecepieSelected(recepie:Recepie){
  //   this.recepiewasSelected.emit(recepie);

  // }

}
