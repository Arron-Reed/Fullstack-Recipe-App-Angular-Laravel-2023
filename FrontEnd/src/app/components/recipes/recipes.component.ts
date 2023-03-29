import { Component } from '@angular/core';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent {

  searchquery:string = '';
  singleSearchQuery:string = '';
  selected:string = '';
  message = "hello world";
  diet:string = '';

  constructor(private recipeService: RecipeService) {}

  allRecipes: any;

  getRecipes() {
    this.recipeService.getRecipes(this.searchquery, this.diet).subscribe((result) => {
      console.log(result.results);
      console.log(result.results[0]);

      this.allRecipes = result.results;
    });
  }
}
