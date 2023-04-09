import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from 'src/app/components/recipe.service';
import { ListService } from 'src/app/list/list.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  
  auth: any
  id: any
  name: any
  email: any
  listofFavourites: any
  fav: any
  allFavourites: any

  constructor(private listService: ListService, private recipeService: RecipeService, private router: Router){
  }

  ngOnInit(): void {
    
    this.auth = localStorage.getItem('token');

    this.id = localStorage.getItem('id')
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    
//    console.log(this.id)
//    console.log(this.name)
//    console.log(this.email)

    this.listService.getLists().subscribe(result => {
//      console.log(result);
      this.listofFavourites = result;
//      console.log(this.listofFavourites[0])
        const myJSON = JSON.stringify(this.listofFavourites);
//      console.log(myJSON)

      let old = myJSON;
    let stepOne = old.replace(/{"recipeId":/, '');
    let stepTwo = stepOne.replace(/},{"recipeId":/g, ',');
    let stepThree = stepTwo.replace(/}]/, '');
    let bulkIds = stepThree.slice(2,)
    
//    console.log(bulkIds);

    this.recipeService
      .getFavourites(bulkIds)
      .subscribe((result) => {
//        console.log(result);
        this.allFavourites = result;
        console.log(this.allFavourites)
      });

      })
  }
  bulkIds(bulkIds: any) {
    throw new Error('Method not implemented.');
  }

  

}
