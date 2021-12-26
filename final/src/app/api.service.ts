import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }


  addNewCategory(data){
    return this.http.post(environment.api+'/categories/add',data)
  }


  
  addNewProduct(data){
    return this.http.post(environment.api+'/products/add',data)
  }
  updateProductById(data,id){
    return this.http.post(environment.api+'/products/update/'+id,data)
  }
  


  getListCategories(){
    return this.http.get(environment.api+'/categories/list')
  }

  
  getListProducts(){
    return this.http.get(environment.api+'/products/list')
  }

  findProductById(id){
    return this.http.get(environment.api+'/products/details/'+id)
  }



  deleteProductById(id){
    return this.http.delete(environment.api+'/products/delete/'+id)
  }

}
