import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    
  })

  errMsg="";
  constructor(private router:Router) { }

  ngOnInit(): void {
  }


  connect(){
    let user = this.loginForm.value;


    if (user.username ==='admin' && user.password ==='admin') {
      // redirect to /home
      this.router.navigateByUrl('/home');

      // server => token           // token
      localStorage.setItem('auth','123456') // 123456 token jwt 

      
    } else {
      this.errMsg="Wrong username or password."
    }
    
  }
}
