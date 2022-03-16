import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../models/ingrediants.model';
import { ShoppingService } from '../services/shopping.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingrediants: Ingredients[] = [];
  constructor(private slService: ShoppingService) {}

  ngOnInit(): void {
    this.ingrediants = this.slService.getIngrediantsList();
    this.slService.changed.subscribe((ingrents: Ingredients[]) => {
      this.ingrediants=ingrents;
    });
  }
}
