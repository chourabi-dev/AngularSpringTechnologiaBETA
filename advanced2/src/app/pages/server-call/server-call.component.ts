import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-server-call',
  templateUrl: './server-call.component.html',
  styleUrls: ['./server-call.component.css']
})
export class ServerCallComponent implements OnInit {

  users = [];

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getDataFromServer();
  }


  getDataFromServer(){
    this.api.getUsersFromServer().toPromise().then((res:any)=>{
      console.log(res);
      this.users = res;
    })
  }

}
