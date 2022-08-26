import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AjouteruneformationComponent } from '../ajouteruneformation/ajouteruneformation.component';

@Component({
  selector: 'app-formationplanifier',
  templateUrl: './formationplanifier.component.html',
  styleUrls: ['./formationplanifier.component.scss']
})
export class FormationplanifierComponent implements OnInit {

  constructor(private dialogRef:MatDialog) { }
  cherche="";
  ngOnInit(): void {
  }
 ajouter(){
  
    this.dialogRef.open(AjouteruneformationComponent);
}
}
