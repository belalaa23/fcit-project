import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import { PopUpComponent } from '../pop-up/pop-up.component';

@Component({
  selector: 'app-inputfield',
  templateUrl: './inputfield.component.html',
  styleUrls: ['./inputfield.component.scss']
})
export class InputfieldComponent implements OnInit {
  firstNameAutofilled: boolean = false;
  lastNameAutofilled: boolean = false;
  constructor(public dialog: MatDialog) { }
  openDialog() {
    const dialogRef = this.dialog.open(PopUpComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  };
  ngOnInit(): void {
  }


}
