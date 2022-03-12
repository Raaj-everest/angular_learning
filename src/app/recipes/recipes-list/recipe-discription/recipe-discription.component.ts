import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../../Recipe.model';

@Component({
  selector: 'app-recipe-discription',
  templateUrl: './recipe-discription.component.html',
  styleUrls: ['./recipe-discription.component.css'],
})
export class RecipeDiscriptionComponent implements OnInit {
 @Input() recipe: Recipe;
  constructor() {}

  ngOnInit(): void {}
}
