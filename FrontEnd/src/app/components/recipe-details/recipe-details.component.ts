import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';
import { ListService } from 'src/app/list/list.service';
import { Favourite } from 'src/app/favourite';

@Component({
  selector: 'app-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css'],
})


export class RecipeDetailsComponent implements OnInit {

  user_id: any;
  recipeId: any;
  allRecipe: any;
  currentPath: any;
  price: any;
  

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private listService: ListService, private router: Router) {
  }

  ngOnInit(): void {

    this.route.params.subscribe((res) => {
      let id = res['id'];
      this.getRecipe(id);
    });
  }


    getRecipe(id: any) {
      this.recipeService.getRecipe(id).subscribe((result) => {
        console.log(result);

        this.allRecipe = result;

        let sekPrice = this.allRecipe.pricePerServing/10;
        console.log(sekPrice)
        this.price = sekPrice
        
      });
    }
  


    favourite: any = {
      user_id: localStorage.getItem('user_id'),
      recipeId: this.router.url.slice(9)
    }

    addtoFav(favourite: Favourite) {
      this.listService.addFavourite(this.favourite)
      console.log(favourite)
  }



}
