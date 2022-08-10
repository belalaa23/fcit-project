import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DoneComponent } from '../done/done.component';
import { ProfileformateurComponent } from '../_profileformateur/profileformateur.component';


@Component({
  selector: 'app-pop-up',
  templateUrl: './pop-up.component.html',
  styleUrls: ['./pop-up.component.scss']
})
export class PopUpComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<PopUpComponent>,private dialogRef2:MatDialog) { }

  ngOnInit(): void {
  }
  list=["comprondre le principe de la POO","maitriser la définition d'une classe","maitrise le concept d'objet","connaitre le principe de l'encapsulation","savoir manipuler les méthodes"]
 
  closeDialog(){
    this.dialogRef.close();
    this.dialogRef2.open(DoneComponent);
  }
}
