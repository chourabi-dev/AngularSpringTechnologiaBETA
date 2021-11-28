import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloc-articles',
  templateUrl: './bloc-articles.component.html',
  styleUrls: ['./bloc-articles.component.css']
})
export class BlocArticlesComponent implements OnInit {

  articles:any[] = [ 
    { 
      title:'angular spring', content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti animi blanditiis esse? Debitis aliquid nostrum quia sed incidunt ullam, necessitatibus ad? Quasi non, ipsa iure libero minus magni quam.' 
      ,nbrLikes : 15,
    },
    { 
      title:'React NodeJS', content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti animi blanditiis esse? Debitis aliquid nostrum quia sed incidunt ullam, necessitatibus ad? Quasi non, ipsa iure libero minus magni quam.' 
      ,nbrLikes : 8,
    },
    { 
      title:'VUE symfony 5', content:' Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo corrupti animi blanditiis esse? Debitis aliquid nostrum quia sed incidunt ullam, necessitatibus ad? Quasi non, ipsa iure libero minus magni quam.' 
      ,nbrLikes : 2,
    }, 
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
