import { Component, OnInit } from '@angular/core';
import { Recipe } from '../models/Recipe.model';
import { RecipeService } from '../services/recipes.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
selected:Recipe;
  constructor(private recipeService:RecipeService) { }

  ngOnInit(): void {
   this.recipeService.recipeSelected.subscribe(
     (reipe:Recipe)=>{this.selected=reipe}
   );
  }

}
