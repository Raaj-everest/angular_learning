import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../Ingredients/ingrediants.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
 ingrediants:Ingredients[] = [
   new Ingredients("apple",5),
   new Ingredients("tomato",10)
 ]
  constructor() { }

  ngOnInit(): void {
  }

}
