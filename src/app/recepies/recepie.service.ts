import { Recepie } from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecepieService{

    recepieSelected = new EventEmitter<Recepie>();

    constructor(private slService:ShoppinglistService){}

    private recepies:Recepie[]=[
        new Recepie(
          'Chicken Masala',
          'Chicken',
          'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/indian.jpg',
          [ new Ingredient('Chicken',1),
            new Ingredient('Masala',50)
          ]
        ),
        new Recepie(
          'Prawn Fry',
          'Prawn',
          'https://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/indian.jpg',
          [ new Ingredient('prawn',10),
            new Ingredient('Masala',50)
          ]
        )
      ];

      getRecepie(){
          return this.recepies.slice();
      }

      addRecepieToShoppinglist(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);
      }

}