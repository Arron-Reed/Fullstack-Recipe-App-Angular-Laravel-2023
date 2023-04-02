import { Component } from '@angular/core';
import { UserService } from 'src/app/auth/user.service'; 

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  auth = localStorage.getItem('token');

}
