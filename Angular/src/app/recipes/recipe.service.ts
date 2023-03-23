import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  urlConfig = "https://api.spoonacular.com/recipes/complexSearch";
  appKey = "9416fdcb6b3f4505bdfaf2373774460e";

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type': 'application/json',
      'Accept-Language': 'en'
    })
  }

  constructor(private http:HttpClient) { }

  getRecipes(q: string) {
    let searchquery = this.urlConfig + "?apiKey=" + this.appKey + "&query=" + q +"&cuisine=&diet=&type=&instructionsRequired=true&number=12"
  
    return this.http.get<any>(searchquery, this.httpOptions);
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
