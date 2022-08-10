import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  lvl=1;
  constructor() { }

  ngOnInit(): void {
  }
  goNext(){
    if(this.lvl < 3){
      this.lvl=this.lvl+1;
    }else if (this.lvl===3){
      this.lvl=1;
    }
    
  }
}
