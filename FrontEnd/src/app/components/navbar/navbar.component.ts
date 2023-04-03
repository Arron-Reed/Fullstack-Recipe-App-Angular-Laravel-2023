import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/auth/user.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  me = { 
    name: "",
    email: "",
    password: "",
  }

auth: any
  
  constructor(private userService: UserService, private router: Router){}

  ngOnInit(): void {
    this.auth = localStorage.getItem('token');
  
//      this.router.events.subscribe(event => {
//        if (event.constructor.name === "NavigationEnd") {
//          window.location.reload();
//        }
//      })
  }

  logout() {
    this.userService.logOut(this.me)
  
    this.router.navigate(["/"])
  }

}
