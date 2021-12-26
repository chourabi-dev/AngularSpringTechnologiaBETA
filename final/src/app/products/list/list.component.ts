import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  data = [];

  constructor( private api:ApiService ) { }

  ngOnInit(): void {
    this.api.getListProducts().toPromise().then((res:any[])=>{
      this.data = res;
    })
  }


  deleteProduct(id){
    if (confirm('Do you really want to delete this product ?')) {
      // 
      this.api.deleteProductById(id).toPromise().then((res)=>{
        this.api.getListProducts().toPromise().then((res:any[])=>{
          this.data = res;
        })
      })
    }
  }


}
