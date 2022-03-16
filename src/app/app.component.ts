import { Component } from '@angular/core';
import { RecipeService } from './services/recipes.service';
import { ShoppingService } from './services/shopping.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[RecipeService,ShoppingService]
})
export class AppComponent {
  feature='recipe';
  title = 'recipe_app';

  selectedFeature(feature:string){
      this.feature=feature;
  }
}
