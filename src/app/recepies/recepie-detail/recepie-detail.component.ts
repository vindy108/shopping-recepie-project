import { Component, OnInit, Input } from '@angular/core';
import { Recepie } from '../recepie.model';
import { RecepieService } from '../recepie.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {

  // @Input() 
  recepie:Recepie;
  id:number;
  
  constructor(private recepieService:RecepieService,
              private route:ActivatedRoute,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) => {
        this.id = +params['id'];
        this.recepie = this.recepieService.getRecepieId(this.id);
      }
    )
  }

  onShoppinglist(){
    this.recepieService.addRecepieToShoppinglist(this.recepie.ingredients);

  }

  onEditRecepie(){
    this.router.navigate(['edit'], {relativeTo:this.route});
  }

}
