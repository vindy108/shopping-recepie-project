import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model'
import { ShoppinglistService } from './shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
  
})
export class ShoppingListComponent implements OnInit {
    // ingredients:Ingredient[] = [
    //   new Ingredient('Apples',5),
    //   new Ingredient('Tomato',10)
    // ];
    ingredients:Ingredient[];
  constructor(private shoppinglistService:ShoppinglistService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppinglistService.getIngredients();
    this.shoppinglistService.ingredientsChanged.subscribe(
      (ingredients:Ingredient[]) => {
        this.ingredients = ingredients;
      }
    )
  }

  

  // onIngredientAdded(ingredient:Ingredient){
  //   this.ingredients.push(ingredient);

  // }
}
