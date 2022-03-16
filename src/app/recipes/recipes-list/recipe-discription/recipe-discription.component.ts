import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Ingredients } from 'src/app/models/ingrediants.model';
import { RecipeService } from 'src/app/services/recipes.service';
import { ShoppingService } from 'src/app/services/shopping.service';
import { Recipe } from '../../../models/Recipe.model';

@Component({
  selector: 'app-recipe-discription',
  templateUrl: './recipe-discription.component.html',
  styleUrls: ['./recipe-discription.component.css'],
})
export class RecipeDiscriptionComponent implements OnInit {
  recipe: Recipe;
  id: number;

  constructor(
    private slService: ShoppingService,
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    });
  }

  sendRecipeDetails(ingrediants: Ingredients[]) {
    for (let ingrediant of ingrediants) {
      this.slService.addIngredientToList(ingrediant);
    }
  }
}
