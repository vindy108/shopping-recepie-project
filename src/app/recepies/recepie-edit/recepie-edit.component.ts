import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecepieService } from '../recepie.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {
  id:number;
  editMode = false;
  recepieForm:FormGroup;


  constructor(private route:ActivatedRoute,
              private recepieService:RecepieService,
              private router:Router) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params:Params) =>{
        this.id = +params['id'];
        this.editMode = params['id'] != null;
        this.initForm();
      }
    )
  }

  onAddIngredient(){
   (<FormArray>this.recepieForm.get('ingredients')).push(
     new FormGroup(
       {
         'name': new FormControl(null,
          Validators.required,
          ),
         'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
         ])
       }
     )
   )
  }

  private initForm(){
    
    let recepieName = '';
    let recepiePath = '';
    let recepieDesc = '';
    let recepieIng = new FormArray([]);

    if(this.editMode){
      const recepie = this.recepieService.getRecepieId(this.id);
      recepieName = recepie.name;
      recepiePath = recepie.imagePath;
      recepieDesc = recepie.description;
      if(recepie['ingredients']){
        for(let ingredient of recepie.ingredients){
          recepieIng.push(new FormGroup(
            {
              'name': new FormControl(ingredient.name,Validators.required),
              'amount': new FormControl(ingredient.amount,[Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
              ])
            }
          ))
        }
      }
    }
    this.recepieForm = new FormGroup({
      'name': new FormControl(recepieName,Validators.required),
      'imagePath': new FormControl(recepiePath,Validators.required),
      'description': new FormControl(recepieDesc,Validators.required),
      'ingredients': recepieIng 
    });
  }

  onSubmit(){
    // const recepie = new Recepie(this.recepieForm.value['name'],
    // this.recepieForm.value['description'],
    // this.recepieForm.value['imagePath'],
    // this.recepieForm.value['ingredients'])
    if(this.editMode){
      this.recepieService.updateRecepie(this.id, this.recepieForm.value)
    }else{
      this.recepieService.addRecepie(this.recepieForm.value);
    }

    this.onCancel();

  }

  get controls() { // a getter!
    return (<FormArray>this.recepieForm.get('ingredients')).controls;
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

  onDeleteIngredient(index:number){
    (<FormArray>this.recepieForm.get('ingredients')).removeAt(index);
  }

}
