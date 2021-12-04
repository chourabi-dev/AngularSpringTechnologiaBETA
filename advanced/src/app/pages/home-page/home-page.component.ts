import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  // injection du service
  constructor( private router:Router ) { }

  ngOnInit(): void {
  }


  goToAbout(){
    // cmnd router => navigation page => /about
    this.router.navigateByUrl('/about');
  }

}
