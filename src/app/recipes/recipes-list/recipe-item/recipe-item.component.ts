import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { RecipeService } from 'src/app/services/recipes.service';
import { Recipe } from '../../../models/Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  recipeSelected:Recipe;
  constructor(private recipeService:RecipeService) {}

  ngOnInit(): void {}
  onSelected() {
    this.recipeService.recipeSelected.emit(this.recipe);
  }
}
