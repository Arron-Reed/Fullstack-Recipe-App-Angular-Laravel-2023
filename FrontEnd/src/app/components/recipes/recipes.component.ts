import { Component } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { IfStmt } from '@angular/compiler';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  searchquery: string = '';
  singleSearchQuery: string = '';
  selected: string = '';
  diet: string = '';
  type: string = '';
  sort: string = '';
  result: undefined;

  constructor(private recipeService: RecipeService) {}

  allRecipes: any;

  getRecipes() {
    this.recipeService
      .getRecipes(this.searchquery, this.diet, this.type, this.sort)
      .subscribe((result) => {
        console.log(result.results);
        console.log(result.results[0]);
  
        this.allRecipes = result.results;
      });
  }
}
