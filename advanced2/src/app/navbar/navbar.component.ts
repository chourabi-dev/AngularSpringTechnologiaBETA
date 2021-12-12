import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  users = [];

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsersList();
  }

}
