import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';
import { RecepieService } from '../../recepie.service';


@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie:Recepie;
  // @Output() recepieSelected = new EventEmitter<void>();
  constructor(private recepieService:RecepieService) { }

  ngOnInit(): void {
  }

  onSelected(){
    // this.recepieSelected.emit();
    this.recepieService.recepieSelected.emit(this.recepie);
  }

}
