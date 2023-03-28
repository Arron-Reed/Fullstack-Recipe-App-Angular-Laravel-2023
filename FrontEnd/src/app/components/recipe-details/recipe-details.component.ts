import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipes/recipe.service';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit{

    constructor(private route: ActivatedRoute, private recipeService: RecipeService) {}
  
    ngOnInit(): void {
    this.route.params.subscribe(res => {
      let id = res['id']
      this.getRecipe(id)
    
    })
  }
  
    allRecipe: any;
  
    getRecipe(id: any) {
      this.recipeService.getRecipe(id).subscribe((result) => {
        console.log(result);
        console.log(id);
       
      this.allRecipe = result;
      });
    }
  
  }
