import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-fridge-recipes',
  templateUrl: './fridge-recipes.component.html',
  styleUrls: ['./fridge-recipes.component.css'],
})
export class FridgeRecipesComponent {
  searchquery: string = '';
  singleSearchQuery: string = '';
  fridgeSearchQuery: string = '';
  fridgeItems: string = '';
  diet: string = '';
  newFridgeItems: string = '';

  constructor(private recipeService: RecipeService) {}

  allRecipes: any;

  replaceComma() {
    let old = this.fridgeItems;
    let newFridgeItems = old.replace(/,/g, ',+');
    return newFridgeItems;
  }

  getFridgeFood() {
    this.newFridgeItems = this.replaceComma();

    this.recipeService
      .getFridgeFood(this.newFridgeItems)
      .subscribe((result) => {
        console.log(result);
        this.allRecipes = result;
      });
  }
}
