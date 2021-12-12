import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  // data , from server !!!
  users:any[] = [];


  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
    this.users = this.usersService.getUsersList();
  }

}
