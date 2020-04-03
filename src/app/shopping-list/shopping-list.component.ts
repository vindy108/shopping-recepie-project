import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppinglistService } from './shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit, OnDestroy {
    // ingredients:Ingredient[] = [
    //   new Ingredient('Apples',5),
    //   new Ingredient('Tomato',10)
    // ];
    ingredients:Ingredient[];
    private ingredientsChangedSub:Subscription;
  constructor(private shoppinglistService:ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.ingredientsChangedSub = this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  ngOnDestroy(){
    this.ingredientsChangedSub.unsubscribe();
  }

  

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);

  // }
}
