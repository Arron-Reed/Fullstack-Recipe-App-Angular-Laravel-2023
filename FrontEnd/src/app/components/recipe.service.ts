import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  urlConfig: string = "https://api.spoonacular.com/recipes/";
  searchAllRecipes: string = "complexSearch";
  searchOneRecipe: string = "/information";
  foodFromFridge: string = "findByIngredients";
  getBulkIds: string = "informationBulk";
  appKey1: string = "9416fdcb6b3f4505bdfaf2373774460e";
  appKey2: string = "c79c5dfd430a4d26b946564d958ce954";
  appKey: string = "57b56bd0db324a87845aff796d2c2963";

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }

  getRecipes(q: string, diet: string, type: string, sort: string) {
    let searchquery = this.urlConfig + this.searchAllRecipes + "?apiKey=" + this.appKey + "&query=" + q + "&diet=" + diet + "&type=" + type + "&sort=" + sort + "&addRecipeInformation=true&addRecipeNutrition=true&number=12"
  console.log(searchquery)
    return this.http.get<any>(searchquery, this.httpOptions).pipe(catchError(this.handleError))
  }


  getRecipe(id: any) {
    let singleSearchQuery = this.urlConfig + id + this.searchOneRecipe + "?apiKey=" + this.appKey
    return this.http.get<any>(singleSearchQuery, this.httpOptions).pipe(catchError(this.handleError))
  }


  getFridgeFood(x: string) {
    let fridgeSearchQuery = this.urlConfig + this.foodFromFridge + "?apiKey=" + this.appKey + "&ingredients=" + x + "&diet&cuisine=&type=&instructionsRequired=true&addRecipeInformation=true&ignorePantry=true&ranking=2&sort=min-missing-ingredients&number=12"
    console.log(fridgeSearchQuery)
    return this.http.get<any>(fridgeSearchQuery, this.httpOptions).pipe(catchError(this.handleError))
  }


  getFavourites(bulkIds: string) {
    let FavouritesSearchquery = this.urlConfig + this.getBulkIds + "?apiKey=" + this.appKey + "&ids=" + bulkIds
    console.log(FavouritesSearchquery)
    return this.http.get<any>(FavouritesSearchquery, this.httpOptions).pipe(catchError(this.handleError))
  }


  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
