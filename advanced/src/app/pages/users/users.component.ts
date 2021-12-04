import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users = [
    { name:'chourabi taher', email:'tchourabi@gmail.com', phone:'55447788' },
    { name:'chourabi taher 2', email:'tchourabi@gmail.com', phone:'55447788' },
    { name:'chourabi taher 3', email:'tchourabi@gmail.com', phone:'55447788' },
    { name:'chourabi taher 4', email:'tchourabi@gmail.com', phone:'55447788' },
    
  ];
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  showUserDetails(user){
    console.log(user);

    this.router.navigateByUrl('/user')

    this.router.navigate(  ['/user',user]  )
  }

}
