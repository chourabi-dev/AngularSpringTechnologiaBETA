import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-types',
  templateUrl: './new-types.component.html',
  styleUrls: ['./new-types.component.css']
})
export class NewTypesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    let i;

    // deplay !! 200ms

   /**
    *  setTimeout(
    
    
      ()=>{
      i = 0;
    }
    
    ,200);

    i++;

    console.log(i);
    */
    
    /**
     * 
     * call server 
     * wait for response !!
     * if(response.succees... )
     */


    this.doAsyncWork().then((res)=>{

      console.log("response after 3000 ms");
      
      console.log(res);
      
    }).catch((err)=>{

    })
  }
  doAsyncWork(){
    let promsie = new Promise( (resolve,reject)=>{

       setTimeout(() => {
        resolve( { success:true } );
      }, 3000);
      
    } );

    return promsie;
  }

}
