import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  formData = new FormGroup({
    id:  new FormControl('',Validators.required),
    username:  new FormControl('',Validators.required),
    email:  new FormControl('',Validators.required),
    
  })
  constructor(private users:UsersService, private router:Router) { }

  ngOnInit(): void {
  }


  save(){
    const data = this.formData.value;

    console.log(data);

    this.users.addNewUser(data);

    this.router.navigateByUrl('/home');
    
  }

}
