import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  configUrl = "http://127.0.0.1:8000/api/";

  httpOptions = {
    headers: new HttpHeaders ({
      'Content-Type':  'application/json',
      'Authorization': 'Bearer'
    })
  };
 

  constructor(private http: HttpClient) { }

  
  loginUser(user: User) {
    this.http.post<any>(this.configUrl + "login", user, this.httpOptions)
    .pipe(catchError(this.handleError))
    .subscribe(res => {
      console.log(res)
      localStorage.setItem("id", res.user.id)
      localStorage.setItem("name", res.user.name)
      localStorage.setItem("email", res.user.email)
      localStorage.setItem("token", res.token)
//    localStorage.clear  use this in Logout Function
//    Redirect to homePage when logged in
    })
  }

  registerUser(user: User) {
    this.http.post<any>(this.configUrl + "register", user, this.httpOptions)
    .pipe(catchError(this.handleError))
    .subscribe(res => {
      console.log(res)
      localStorage.setItem("id", res.user.id)
      localStorage.setItem("name", res.user.name)
      localStorage.setItem("email", res.user.email)
      localStorage.setItem("token", res.token)
//    localStorage.clear  use this in Logout Function
//    Redirect to homePage when registered and logged in
    })
  }


  getUser2() {
    console.log(localStorage.getItem("token"));
    this.httpOptions.headers = this.httpOptions.headers.set('Authorization', 'Bearer ' + localStorage.getItem("token"))
    return this.http.get<User[]>(this.configUrl + "getuser/2", this.httpOptions)
    .pipe(catchError(this.handleError))
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
