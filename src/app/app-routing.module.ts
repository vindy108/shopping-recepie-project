import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecepiesComponent } from './recepies/recepies.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecepieListComponent } from './recepies/recepie-list/recepie-list.component';
import { RecepieStartComponent } from './recepies/recepie-start/recepie-start.component';
import { RecepieDetailComponent } from './recepies/recepie-detail/recepie-detail.component';
import { RecepieEditComponent } from './recepies/recepie-edit/recepie-edit.component';


const routes: Routes = [
  {path:'', redirectTo:'/recepies', pathMatch:'full'},
  {path:'recepies',component:RecepiesComponent,children:[
    {path:'',component:RecepieStartComponent},
    {path:'new',component:RecepieEditComponent},
    {path:':id',component:RecepieDetailComponent},
    {path:':id/edit',component:RecepieEditComponent}
    
  ]},
  {path:'shoppinglist',component:ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
