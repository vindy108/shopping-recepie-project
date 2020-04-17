import { Recepie } from './recepie.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppinglistService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecepieService{

    recepieChanged = new Subject<Recepie[]>();

    constructor(private slService:ShoppinglistService){}

    private recepies:Recepie[]=[
        new Recepie(
          'Chicken Masala',
          'Chicken',
          'https://www.seriouseats.com/recipes/images/2013/01/20130114-237007-mapo-chicken-primary.jpg',
          [ new Ingredient('Chicken',1),
            new Ingredient('Masala',50)
          ]
        ),
        new Recepie(
          'Prawn Fry',
          'Prawn',
          'https://vaya.in/recipes/wp-content/uploads/2018/06/Andhra-Prawn-Fry.jpg',
          [ new Ingredient('prawn',10),
            new Ingredient('Masala',50)
          ]
        )
      ];

      getRecepie(){
          return this.recepies.slice();
      }

      getRecepieId(id:number){
        return this.recepies[id];
      }

      addRecepieToShoppinglist(ingredients:Ingredient[]){
          this.slService.addIngredients(ingredients);
      }

      addRecepie(recepie:Recepie){
        this.recepies.push(recepie);
        this.recepieChanged.next(this.recepies.slice());
      }

      updateRecepie(index:number, newRecepie:Recepie){
          this.recepies[index] = newRecepie;
          this.recepieChanged.next(this.recepies.slice());
      }

      deleteRecepie(index:number){
        this.recepies.splice(index);
        this.recepieChanged.next(this.recepies.slice());
      }

}