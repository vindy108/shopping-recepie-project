import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  @Input() recepie:Recepie;
  
  constructor(private recepieService:RecepieService) { }

  ngOnInit(): void {
  }

  onShoppinglist(){
    this.recepieService.addRecepieToShoppinglist(this.recepie.ingredients);

  }

}
