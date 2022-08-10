import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-formation',
  templateUrl: './formation.component.html',
  styleUrls: ['./formation.component.scss']
})
export class FormationComponent implements OnInit {
  @Input()
  done=true;
  @Input()
  dates="dorne"; 
  @Input()
  nombrep=0;
  @Input()
  title="fd"
  @Input()
  eval=false
  @Input()
  evaluated="0";
  constructor(private route:ActivatedRoute , private router:Router) { 
    
  }

  ngOnInit(): void {
  }
  goToEval(){
    this.router.navigate(['evaluation'],{relativeTo: this.route});
  }

}
