import { Component } from '@angular/core';
import { Employee } from './models/employee';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  formationName: string = "Angular springboot";

  amount = 2500;

  isRaining: boolean = false;
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

  employees: any[] = [


     { year: 2016, fullname: "chourabi taher", email: 'tchourabi@gmail.com', address: '400 rue test' }
    , { year: 2018, fullname: "chourabi taher", email: 'tchourabi@gmail.com', address: '400 rue test' }
    , { year: 2020, fullname: "chourabi taher", email: 'tchourabi@gmail.com', address: '400 rue test' }

  ]





}
