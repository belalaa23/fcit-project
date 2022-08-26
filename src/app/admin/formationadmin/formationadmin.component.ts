import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-formationadmin',
  templateUrl: './formationadmin.component.html',
  styleUrls: ['./formationadmin.component.scss']
})
export class FormationadminComponent implements OnInit {

  @Input()
  done=true;
  @Input()
  dates="dorne"; 
  @Input()
  nombrep=0;
  @Input()
  title="Formation NodeJs For beginners"
  @Input()
  eval=false
  @Input()
  evaluated="0";
  @Input()
  id=0;
  @Input()
  nombreval=0;
  @Input()
  nomformateur="mohsen Rigouta"
  constructor() { }

  ngOnInit(): void {
  }

}
