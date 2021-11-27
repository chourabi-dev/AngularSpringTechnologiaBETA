import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

 /* formationName: string = "Angular springboot";

  amount = 2500;

  isRaining: boolean = false;*/
  /*
  employees:Employee[] = [
    new Employee('chourabi taher','tchourabi@gmail.com','somewhere on earth'),
    new Employee('chourabi taher','tchourabi@gmail.com','somewhere on earth'),
    new Employee('chourabi taher','tchourabi@gmail.com','somewhere on earth'),
    new Employee('chourabi taher','tchourabi@gmail.com','somewhere on earth'),
    
  
  ];*/


  /**
   * 
   * JSON
   * 
   * vehicule couleur puissance
   * { color:'red' , power:5 }
   * 
   */

  // json is a data reprisenting system 
/*
  employees: any[] = [


     { year: 2016, fullname: "chourabi taher", email: 'tchourabi@gmail.com', address: '400 rue test' }
    , { year: 2018, fullname: "chourabi taher", email: 'tchourabi@gmail.com', address: '400 rue test' }
    , { year: 2020, fullname: "chourabi taher", email: 'tchourabi@gmail.com', address: '400 rue test' }

  ]*/


/*
  content="this is a <strong>simple message</strong>"
 

  gallery=[  
    'https://p4.wallpaperbetter.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg', 
    'https://wallshub.net/wp-content/uploads/2021/08/Vaporwave-Wallpaper-4k.jpg'
  ]

  selectedIndex = 0; 
  imgSRC=this.gallery[this.selectedIndex];*/

  today = new Date();

  constructor(){
    console.log("consutructor");
    
  }




/*
  initGallery(){

    setInterval( ()=>{
      this.selectedIndex++; 
      if (this.selectedIndex == this.gallery.length) {
        this.selectedIndex = 0;
      } 
      this.imgSRC = this.gallery[this.selectedIndex];

    }, 2000 )
  }*/

/*


  click = 0;


  btnClick(){
    console.log("clicked");

    this.click++;
    
  }


  blocTextIsShown = false;


  toggleTextBloc(){
    this.blocTextIsShown = ! this.blocTextIsShown;
  }

  /**************************** */

/*
  isTyping = false;

  typing(e){  
    const code = e.code; 
    console.log(code); 
    if (code === 'Enter') {
      this.isTyping = false;
      e.target.value='';
    }else{
      this.isTyping = true;
    } 
  }





  x = '0px'; 
  y = '0px'; 

  isMoving(e){
    console.log(e);
    
    const clientX = e.clientX;
    const clientY = e.clientY; 
    this.x = clientX+'px';
    this.y = clientY+'px';
     
  }*/





  /********************************forms*************************************** */



  employees:any[] = [];
  resultSearch:any[] = [];
  




  formData = new FormGroup({
    fullname: new FormControl('', [Validators.required,Validators.minLength(5)] ),
    email: new FormControl('', [Validators.required, Validators.email]),
    address : new FormControl('', Validators.required),
  });


  addEmployee(){
    const data = this.formData.value;

    console.log(data);
    
    this.employees.push(data);

    this.formData.reset();
  }


  searchFor(e){
    const val = e.target.value;

    
    this.resultSearch = ( this.employees.filter( (e)=> e.fullname.indexOf(val) != -1 ) );
    

  }




/*

  index = 0;

  stepper = new FormGroup({
    stepOne : new FormGroup({
      fullname: new FormControl('', [Validators.required] ),
      email: new FormControl('', [Validators.required]),
      address : new FormControl('', Validators.required),
    }),
    stepTwo : new FormGroup({
      city: new FormControl('', [Validators.required] ),
      code: new FormControl('', [Validators.required]), 
    }),
    stepThree : new FormGroup({
      username: new FormControl('', [Validators.required] )
    })
    
  })
*/

  ngOnInit(){ 
  }

/*

  next(){
    this.index++;
  }


  previous(){
    this.index--;
  }


  add(){
    console.log(this.stepper.value);
    
  }*/
}