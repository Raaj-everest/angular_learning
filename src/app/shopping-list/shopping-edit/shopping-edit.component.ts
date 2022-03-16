import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredients } from 'src/app/models/ingrediants.model';
import { ShoppingService } from 'src/app/services/shopping.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;

  constructor(private slService: ShoppingService) {}

  ngOnInit(): void {}

  addIngredient() {
    let i = new Ingredients(
      this.nameInputRef.nativeElement.value,
      this.amountInputRef.nativeElement.value
    );
    if(i.amount>0){
      this.slService.addIngredientToList(i);
    }
    
  }
}
