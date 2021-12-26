import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  categories = [];

  dataForm = new FormGroup({
    name: new FormControl('',Validators.required),
    quantity: new FormControl('',Validators.required),
    price: new FormControl('',Validators.required),
    category: new FormControl('',Validators.required),
    
  })

  successMsg='';
  errorMsg='';

  constructor(private api:ApiService, private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.api.getListCategories().toPromise().then((res:any)=> this.categories = res );

    // get the product data fro mthe server !!
    const id = this.route.snapshot.params.id;

    this.api.findProductById(id).toPromise().then((res:any)=>{
      console.log(res);
      this.dataForm.setValue(res);
      
    })
  }


  submitForm(){
    const id = this.route.snapshot.params.id;

    this.api.updateProductById(this.dataForm.value,id).toPromise().then((res:any)=>{
      if (res.id) {
        this.successMsg='updated successfully !';
      }else{
        this.errorMsg='Something went wrong';
      }
    }).catch((err)=>{
      this.errorMsg='Something went wrong, plase try again';
    })
    
  }

}
