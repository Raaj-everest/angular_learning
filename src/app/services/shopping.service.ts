import { EventEmitter } from '@angular/core';
import { Ingredients } from '../models/ingrediants.model';

export class ShoppingService {
  changed = new EventEmitter<Ingredients[]>();
  private ingredientList: Ingredients[] = [
    new Ingredients('apple', 5),
    new Ingredients('tomato', 10),
  ];

  addIngredientToList(newIngrediant: Ingredients) {
    this.ingredientList.push(newIngrediant);
    console.log(this.ingredientList.length);
    this.changed.emit(this.ingredientList.slice());
  }

  getIngrediantsList() {
    return this.ingredientList.slice();
  }
}
