import { Component, OnInit } from '@angular/core';
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


  ngOnInit(){
    console.log("on init");
   // this.initGallery();
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
     
  }

}