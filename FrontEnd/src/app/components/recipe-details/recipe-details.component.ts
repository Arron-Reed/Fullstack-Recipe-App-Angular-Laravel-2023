import { Component } from '@angular/core';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent {

    constructor(private recipeService: RecipeService) {}
  
    allRecipes: any;
  
    getRecipe(id: any) {
      this.recipeService.getRecipe(id).subscribe((result) => {
        console.log(result);
      });
    }
  
  }
