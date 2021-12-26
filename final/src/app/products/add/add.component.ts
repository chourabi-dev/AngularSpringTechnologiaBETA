import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {

  categories = [];

  dataForm = new FormGroup({
    name: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    
  })

  successMsg='';
  errorMsg='';

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getListCategories().toPromise().then((res:any)=> this.categories = res );
  }


  submitForm(){
    this.api.addNewProduct(this.dataForm.value).toPromise().then((res:any)=>{
      if (res.id) {
        this.successMsg='Added successfully !';
      }else{
        this.errorMsg='Something went wrong';
      }
    }).catch((err)=>{
      this.errorMsg='Something went wrong, plase try again';
    })
    
  }
}
