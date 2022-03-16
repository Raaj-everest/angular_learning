import { Component, Input, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/models/ingrediants.model';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Recipe } from '../../../models/Recipe.model';

@Component({
  selector: 'app-recipe-discription',
  templateUrl: './recipe-discription.component.html',
  styleUrls: ['./recipe-discription.component.css'],
})
export class RecipeDiscriptionComponent implements OnInit {
 @Input() recipe: Recipe;
  constructor(private slService:ShoppingService) {}

  ngOnInit(): void {}

  sendRecipeDetails(ingrediants:Ingredients[]){
    for(let ingrediant of ingrediants){
    this.slService.addIngredientToList(ingrediant);
    }
  }
  
}

