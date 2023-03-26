import { Component } from '@angular/core';
import { RecipeService } from './recipes/recipe.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'FrontEnd';

  searchquery = "";

  constructor(private recipeService:RecipeService){}

  allRecipes: any;

  getRecipes() {
    this.recipeService.getRecipes(this.searchquery).subscribe(result => {
      console.log(result.results);
      console.log(result.results[0]);

      this.allRecipes = result.results;
    })
  }
}

