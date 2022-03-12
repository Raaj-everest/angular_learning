import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  feature='recipe';
  title = 'recipe_app';

  selectedFeature(feature:string){
      this.feature=feature;
  }
}
