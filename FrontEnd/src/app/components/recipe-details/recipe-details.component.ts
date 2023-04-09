import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ListService } from 'src/app/list/list.service';
import { Favourite } from 'src/app/favourite';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})


export class RecipeDetailsComponent implements OnInit {

  user_id: any
  recipeId: any
  allRecipe: any;
  

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private listService: ListService) {
  }

  ngOnInit(): void {

this.route.params.subscribe((res) => {
    let id = res['id'];
    this.getRecipe(id);
    localStorage.setItem("recipeId", res['id'])
    });
  }


  getRecipe(id: any) {
    this.recipeService.getRecipe(id).subscribe((result) => {
      console.log(result);
      console.log(id);

      this.allRecipe = result;
    });
  }
  
    favourite: any = {
      user_id: localStorage.getItem('id'),
      recipeId: localStorage.getItem('recipeId')
    }

    addtoFav(favourite: Favourite) {
      this.listService.addFavourite(this.favourite)
      console.log(favourite)
  }
}
