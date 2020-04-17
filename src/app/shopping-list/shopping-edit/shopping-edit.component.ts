import { Component, OnInit, ElementRef, ViewChild, EventEmitter, Output, OnDestroy } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list.service';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

  // @ViewChild('nameInput') nameInputRef : ElementRef;
  // @ViewChild('amountInput') amountInputRef : ElementRef;
  // @Output() ingredientAdded = new EventEmitter<Ingredient>();
  constructor( private shoppinglistService:ShoppinglistService) {}
  @ViewChild('f') slsForm:NgForm;
  subscription:Subscription;
  editMode=false;
  editedItemIndex :number;
  editedItem:Ingredient;

  ngOnInit(): void {
    this.subscription =  this.shoppinglistService.startedEditing
    .subscribe(
      (index:number) => {
        this.editedItemIndex  = index;
        this.editMode = true;
        this.editedItem = this.shoppinglistService.getIngredient(index);
        this.slsForm.setValue({
          name:this.editedItem.name,
          amount:this.editedItem.amount
        })
      }
    )
  }

  onSubmit(form: NgForm){
    // const newIngredient = new Ingredient(this.nameInputRef.nativeElement.value,
    //   this.amountInputRef.nativeElement.value);
      // this.ingredientAdded.emit(newIngredient);
      const value = form.value;
      const newIngredient  = new Ingredient(value.name,value.amount);
      if(this.editMode){
        this.shoppinglistService.updateIngredients(this.editedItemIndex,newIngredient);
      }else{
        this.shoppinglistService.addIngredient(newIngredient);
      }
      this.editMode = false;
      form.reset();
  }

  onClear(){
    this.slsForm.reset();
    this.editMode = false;
  }

  onDelete(){
    this.shoppinglistService.deleteIngredients(this.editedItemIndex);
    this.onClear();
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
