import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {



  menu:any=[] = [
    { title:'first link', url:'#' },
    { title:'second link', url:'#' },
    { title:'third link', url:'#' }, 
    { title:'foorth link', url:'#' }, 
    
    
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
