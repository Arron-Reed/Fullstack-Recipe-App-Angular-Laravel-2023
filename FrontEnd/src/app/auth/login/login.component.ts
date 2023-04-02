import { Component } from '@angular/core';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
title = 'Login Page';

// Leaving this here so you see how I built this
me = { 
  name: "arron",
  email: "arron@arron.com",
  password: "password",
}

user2 = {
  name: "",
  email: "",
  password: "",
}

newUser = {
  name: "Oliver",
  email: "oliver@hotmail.com",
  password: "password",
}

constructor(private userService: UserService){

}

  login() {
    this.userService.loginUser(this.me)
  }


  register() {
    this.userService.registerUser(this.newUser)
  }


  getUser() {
    this.userService.getUser2().subscribe(res => {
      console.log(res[0]);
      this.user2 = res[0];
    })
  }
}
