import { Component, OnInit } from '@angular/core';
import { RecipeService } from '../recipe.service';
import { IfStmt } from '@angular/compiler';
import { ListService } from 'src/app/list/list.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})

export class RecipesComponent implements OnInit {

  searchquery: string = '';
  singleSearchQuery: string = '';
  selected: string = '';
  diet: string = '';
  type: string = '';
  sort: string = '';
  result: undefined;
  lists: string = '';

  constructor(private recipeService: RecipeService, private listService: ListService) {}

  ngOnInit(): void {
  }

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
