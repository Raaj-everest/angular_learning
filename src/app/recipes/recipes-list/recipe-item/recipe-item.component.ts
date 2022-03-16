import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RecipeService } from 'src/app/services/recipes.service';
import { Recipe } from '../../../models/Recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  recipe: Recipe;
  @Input() id: number;
  constructor(
    private route: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit(): void {
    // this.route.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
      this.recipe = this.recipeService.getRecipeById(this.id);
    // });
  }
}
