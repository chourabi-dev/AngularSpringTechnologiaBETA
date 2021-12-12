import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  private usersList:any[] = [];
  constructor() { }

  public addNewUser(data){
    this.usersList.push(data);
  }

  public getUsersList(){
    return this.usersList;
  }
}
