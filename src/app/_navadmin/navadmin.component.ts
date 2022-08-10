import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navadmin',
  templateUrl: './navadmin.component.html',
  styleUrls: ['./navadmin.component.scss']
})
export class NavadminComponent implements OnInit {
  listes=[
    {
      title:'Mon profile',
      icon:'account_circle'
    },
    {
      title:'Mes formateurs',
      icon:'groups'
    },
    
    {
      title:'suivi de progression',
      icon:'query_stats'
    },
    
    
  ]
  constructor() { }
//,'liste des formateurs','listes des formations','suivi de progression'
  ngOnInit(): void {
  }

}
