import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Recepie } from '../../recepie.model';


@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {
  @Input() recepie:Recepie;
  @Output() recepieSelected = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  onSelected(){
    this.recepieSelected.emit();
  }

}
