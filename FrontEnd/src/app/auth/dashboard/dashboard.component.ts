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


  constructor(private listService: ListService, private recipeService: RecipeService, private router: Router){
  }


  ngOnInit(): void {
    
    this.auth = localStorage.getItem('token');

    
    this.id = localStorage.getItem('id')
    this.name = localStorage.getItem('name')
    this.email = localStorage.getItem('email')
    

    console.log(this.id)
    console.log(this.name)
    console.log(this.email)

    this.listService.getLists().subscribe(result => {
      console.log(result);
      console.log(result[0],result[1],result[2],result[3],result[4]);
      this.listofFavourites = result;
      
      const favourite = this.listofFavourites
      

      
        
     


  

      
      })
  }

//  getRecipeLists() {
    

//    getFavourites()
//  }

//  getUser() {
//    this.userService.getUser2().subscribe(res => {
//      console.log(res[0]);
//      this.user2 = res[0];
//    })
//  }

}
