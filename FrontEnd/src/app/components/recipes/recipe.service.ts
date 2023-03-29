import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  urlConfig = "https://api.spoonacular.com/recipes/";
  searchAllRecipes = "complexSearch";
  searchOneRecipe = "/information"
  appKey = "9416fdcb6b3f4505bdfaf2373774460e";
  appKey1 = "c79c5dfd430a4d26b946564d958ce954";

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http: HttpClient) { }

  getRecipes(q: string, diet: string) {
    let searchquery = this.urlConfig + this.searchAllRecipes + "?apiKey=" + this.appKey + "&query=" + q + "&diet=" + diet + "&cuisine=&type=&instructionsRequired=true&addRecipeInformation=true&number=12"
  console.log(searchquery)
    return this.http.get<any>(searchquery, this.httpOptions);
  }


  getRecipe(id: any) {
    let singleSearchQuery = this.urlConfig + id + this.searchOneRecipe + "?apiKey=" + this.appKey
  
    return this.http.get<any>(singleSearchQuery, this.httpOptions);
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
