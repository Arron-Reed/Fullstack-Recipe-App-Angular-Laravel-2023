import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  regi = {
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  }

  constructor(private userService: UserService, private router: Router){
  }

  register() {
    this.userService.registerUser(this.regi)

    this.router.navigate(["/"])
  }

}
