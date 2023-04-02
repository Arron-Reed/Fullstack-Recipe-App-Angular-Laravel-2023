import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent
{
title = 'Login Page';

// Leaving this here so you see how I built this

me = { 
  name: "",
  email: "",
  password: "",
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

value: string =""

//user = {
//  user.email: "",
//  user.password: "",
//}

constructor(private userService: UserService, private router: Router){
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

  logout() {
    localStorage.clear()
    this.router.navigate(["/"])
    window.location.reload();
    
  }
}
